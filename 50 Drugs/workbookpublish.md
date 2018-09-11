---
title: "50 Drugs"
output: 
  html_document:
    keep_md: yes
    toc: true
    toc_float:
      collapsed: false
      smooth_scroll: false
  html_notebook: default

---

##Load libraries

```r
library(rvest)
library(magrittr)
library(stringr)
library(stringi)
library(tidyverse)
library(knitr)
```

##Log-in and collect the links

```r
fiftydrugs <- html_session("https://moodle.gla.ac.uk/login/index.php")

login <- fiftydrugs %>% 
  html_node("form") %>% 
  html_form() %>%
  set_values(username = "username", password = "password") 
login$url <- "https://moodle.gla.ac.uk/login/index.php"

data <- fiftydrugs %>% 
  submit_form(login, submit = '<unnamed>') %>%
  jump_to("https://moodle.gla.ac.uk/mod/data/view.php?d=424") %>%
  read_html() %>%
  html_nodes(".defaulttemplate p")
```

##Separate the links

```r
links <- ""
for (i in 1:length(data)){
  links[i] <- data[[i]] %>%
    html_children() %>%
    .[2] %>%
    html_attrs() %>%
    as.character()
}

titles <- data %>%
  html_text()

class <- strsplit(titles,":") %>%
  map(1) %>%
  unlist

drug <- strsplit(titles,":") %>%
  map(2) %>%
  unlist

table <- data_frame(class, drug, links)
rm(titles, class, drug, i, links)
```

##Follow every link

```r
linksdata <- ""

datacomplete <- fiftydrugs %>% 
  submit_form(login, submit = '<unnamed>')

#need to fix
for (i in 1:length(table$links)){
linksdata[i] <- datacomplete %>%
    jump_to(table$links[i]) %>%
    read_html() %>%
    html_nodes("form li , #region-main h4")
}
for (i in 1:length(table$links)){
linksdata[[i]] <- datacomplete %>%
    jump_to(table$links[i]) %>%
    read_html() %>%
    html_nodes("form li , #region-main h4")
}
rm(i)
```


```r
#function
splitAt <- function(x, pos) split(x, cumsum(seq_along(x) %in% pos))
```


```r
listdataframe <- linksdata
#remove unnecessary objects
rm(data, datacomplete, fiftydrugs, login, linksdata)
```

##Rewrite linksdata into linksdataframe

```r
#searches through the drug page, and selects the relevant parts
for (i in 1:length(table$links)){
subset <- listdataframe[[i]] %>%
rvest::html_attr("class") %>%
  is.na
listdataframe[[i]] <- listdataframe[[i]][subset] 
#looks at the dom type (e.g li or h4)
examplelist <- listdataframe[[i]] %>%
rvest::html_name()
#see what's left
exampletext <- listdataframe[[i]] %>%
  html_text()
#seperate into sections by h4.
listdataframe[[i]] <- splitAt(exampletext, which(examplelist == "h4"))
names(listdataframe[[i]]) <- c("Example(s) of drugs:", "Mechanism of action:", "Indication(s):", "Side effects:", "Important pharmacokinetics / pharmacodynamics:", "Patient information:", "Other information:")
#remove first item of each.
#should swap below for a match against the actual titles
listdataframe[[i]][[1]] <- list(listdataframe[[i]][[1]][-1])
listdataframe[[i]][[2]] <- list(listdataframe[[i]][[2]][-1])
listdataframe[[i]][[3]] <- list(listdataframe[[i]][[3]][-1])
listdataframe[[i]][[4]] <- list(listdataframe[[i]][[4]][-1])
listdataframe[[i]][[5]] <- list(listdataframe[[i]][[5]][-1])
listdataframe[[i]][[6]] <- list(listdataframe[[i]][[6]][-1])
listdataframe[[i]][[7]] <- list(listdataframe[[i]][[7]][-1])
}
rm(i, examplelist, exampletext, subset, splitAt)
```

##Split into dataframe

```r
dataframe <- data_frame(listdataframe)

clearit <- function(x) {
unlist(x, recursive = FALSE) %>%
.[[1]] %>%
as_data_frame()
}

example <- clearit(dataframe[1,1])
for (i in 2:length(dataframe$listdataframe)){
  example <- rbind(example, clearit(dataframe[i,1]))
}

dataframe <- example
rm(example, i, clearit, listdataframe)
```

https://github.com/rstudio/webinars/blob/master/32-Web-Scraping/navigation-and-authentication.md

##Add moodle data to individual drug page data

```r
totaldataframe <- cbind(table, dataframe)
head(totaldataframe)
```


```
##            class                                              drug
## 1 Haematological                              Anti-Platelet Drugs 
## 2 Haematological                              Anti-Platelet Drugs 
## 3 Haematological  Recombinant Tissue Plasminogen Activator (rtPA) 
## 4 Haematological                                         Heparins 
## 5 Haematological                                         Heparins 
## 6 Haematological                            Vitamin K Antagonists 
##                                                        links
## 1 https://moodle.gla.ac.uk/mod/data/view.php?d=424&rid=29277
## 2 https://moodle.gla.ac.uk/mod/data/view.php?d=424&rid=29278
## 3 https://moodle.gla.ac.uk/mod/data/view.php?d=424&rid=29279
## 4 https://moodle.gla.ac.uk/mod/data/view.php?d=424&rid=29280
## 5 https://moodle.gla.ac.uk/mod/data/view.php?d=424&rid=29281
## 6 https://moodle.gla.ac.uk/mod/data/view.php?d=424&rid=29282
##             Example(s) of drugs:
## 1 Acetylsalicylic acid (Aspirin)
## 2                    Clopidogrel
## 3        Tenecteplase, Alteplase
## 4         Unfractionated Heparin
## 5   Low Molecular Weight Heparin
## 6                       Warfarin
##                                                                                                                                                                                                                                                                                                                                  Mechanism of action:
## 1 Irreversible inactivation of cyclooxygenase (COX) enzyme., This reduces platelet thromboxane (TXA2) production and endothelial prostaglandin (PGI2) production., Reduced platelet thromboxane production reduces platelet aggregation and thrombus formation, Reduced prostaglandin synthesis decreases nociceptive sensitisation and inflammation.
## 2                                                                                                                                                          Irreversibly blocks the ADP-receptor on platelet cell membranes., Consequently inhibits formation of GPIIb/IIIa complex, required for platelet aggregation., Decreased thrombus formation.
## 3                                                                                                                                                                                                                        Recombinant form of tissue plasminogen activator, Catalyses conversion of plasminogen to plasmin, Promotes fibrin clot lysis
## 4                                                                                                                                                      Enhances activity of antithrombin III., Antithrombin III inhibits thrombin., Heparins also inhibit multiple other factors of the coagulation cascade., This produces its anticoagulant effect.
## 5                                                                                                                                                      Enhances activity of antithrombin III., Antithrombin III inhibits thrombin., Heparins also inhibit multiple other factors of the coagulation cascade., This produces its anticoagulant effect.
## 6                                                                                                                                                                  Inhibits vitamin K epoxide reductase., Prevents recycling of vitamin K to reduced form after carboxylation of coagulation factors II, VII, IX and X., Prevents thrombus formation.
##                                                                                                                                                           Indication(s):
## 1                                                                                                                 Secondary prevention of thrombotic events, Pain relief
## 2                                                                                                                              Secondary prevention of thrombotic events
## 3                                           Acute ischaemic stroke within 4.5 hours of onset, Myocardial infarction within 12 hours of onset, Massive pulmonary embolism
## 4 Treatment and prophylaxis of thromboembolic diseases, including induction of vitamin K antagonists., Renal dialysis (haemodialysis), Acute Coronary Syndrome treatment
## 5 Treatment and prophylaxis of thromboembolic diseases, including induction of vitamin K antagonists., Renal dialysis (haemodialysis), Acute Coronary Syndrome treatment
## 6                                                                Treatment of venous thromboembolism, Thromboprophylaxis in: AF / metallic heart valves / cardiomyopathy
##                                                                                                                                                                              Side effects:
## 1                                                                                       Bleeding (<1% Patients), Peptic ulceration, Angiooedema, Bronchospasm, Reye’s syndrome (very rare)
## 2                                                                                                             Bleeding (1-10% of Patients), Abdominal pain / diarrhoea (1-10% of Patients)
## 3                                                                                                                                           Bleeding, Allergic reaction / angiooedema (1%)
## 4                                                                                 Bleeding (Major haemorrhage risk can be as high as 3.5%), Heparin-induced thrombocytopenia, Osteoporosis
## 5 Bleeding (Major haemorrhage risk can be as high as 3.5%), Heparin-induced thrombocytopenia (Less risk than unfractionated heparin), Osteoporosis (Less risk than unfractionated heparin)
## 6                                                                                                           Bleeding (risk increases with increasing INR), Warfarin necrosis, Osteoporosis
##                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Important pharmacokinetics / pharmacodynamics:
## 1                                                                                                                                                                                                                                                                                                                                                                                                                                                Half life becomes longer with very large doses (pharmacokinetics may be non-linear in overdose)
## 2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         Avoid in liver failure
## 3                                                                                                                                                                                                                                                                                                                                                                Bolus-infusion regimen is used for alteplase , Tenecteplase is given as a single bolus, Pharmacodynamic interactions with other blood thinners (antiplatelets / anticoagulants)
## 4 Administered by continuous intravenous infusion or subcutaneous injection, Complex kinetics  - non-linear relationship between dose / half-life and effect – needs TDM, Effect monitored using activated partial thromboplastin time (aPTT), Anticoagulant effect can be reversed with protamine., Unfractionated heparin has a shorter duration of action than LMW Heparin., Used in preference to LMW Heparin, in selected patients, due to the shorter duration of action and reversability with protamine (for example, Peri-operatively.)
## 5                                                                                                           Subcutaneous injection, More predictable dose-response relationship than Unfractionated Heparin., 2-4 times longer plasma half-life than Unfractionated Heparin, Clearance is mostly via a renal pathway, thus the half-life can be prolonged in patients with renal failure, so dose adjustment may be needed., Regular coagulation monitoring is not required., Less readily reversed with protamine, than Unfractionated Heparin.
## 6                                                                                                                                                                                                                                                                     Numerous drug interactions / food interactions, Reversal by giving vitamin K, Polymorphisms in key metabolising enzymes (VKORC1 and CYP2C9), Needs therapeutic drug monitoring and monitored loading regimen, Monitored with INR and dose adjusted according to indication
##                                                                                                                                                                    Patient information:
## 1                                 Avoid over the counter preparations that contain aspirin., Some patients may be advised to take a Proton Pump Inhibitor alongside long-term aspirin. 
## 2 Patients may be advised to stop clopidogrel before surgical procedures., Patients should not stop clopidogrel without consulting their doctor if they have an arterial stent in-situ.
## 3                         When using thrombolytic drugs, patients should be made aware of the risk-benefit ratio, which should include reference to the rate of bleeding complications.
## 4                                                                                                                                   Risk of bleeding, Regular blood monitoring required
## 5                                               Risk of bleeding, Requires injection, Will need blood testing in prolonged therapy (Full Blood Count, to monitor for thrombocytopenia).
## 6       Need for compliance / attendance at visits for monitoring, Care needed with alcohol, Must inform doctor before starting new drugs – avoid over the counter aspirin preparations
##   Other information:
## 1                   
## 2                   
## 3                   
## 4                   
## 5                   
## 6
```

##Export the data

```r
Datestamp <- Sys.Date()

dataframeName <- str_c("archive/", Datestamp) %>%
str_replace_all(" ", "") %>%
str_c("drugs.Rda")
save(totaldataframe, file=dataframeName)

save(totaldataframe, file="drugs.Rda")

jsonName <- str_c("archive/", str_replace_all(Datestamp, " ", ""), "drugs.json")
totaldataframe %>%
  jsonlite::toJSON() %>%
  write(file = jsonName)

totaldataframe %>%
  jsonlite::toJSON() %>%
  write(file="drugs.json")
```
