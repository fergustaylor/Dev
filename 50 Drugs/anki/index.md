Anki Flashcards
================

``` r
library(tidyverse)

load("/Users/fergustaylor/Desktop/Repos/Dev/50 Drugs/drugs.Rda")

unlistingfunct <- function(x) {
  x %>%
  unlist %>%
  str_c(collapse= ", ")
}

##totaldataframe$'Example(s) of drugs:' <- lapply(totaldataframe$'Example(s) of drugs:', unlistingfunct) %>%
##  unlist
totaldataframe <- totaldataframe %>%
  mutate('Example(s) of drugs:' = stri_join_list(totaldataframe$'Example(s) of drugs:', sep = ", ", collapse = NULL))

totaldataframe$'Mechanism of action:'[totaldataframe$'Mechanism of action:' =="character(0)"] <- "NA"
totaldataframe$'Mechanism of action:' <- lapply(totaldataframe$'Mechanism of action:', unlistingfunct) %>%
  unlist

totaldataframe$'Indication(s):' <- lapply(totaldataframe$'Indication(s):', unlistingfunct) %>%
  unlist

totaldataframe$'Side effects:'[totaldataframe$'Side effects:' =="character(0)"] <- "NA"
totaldataframe$'Side effects:' <- lapply(totaldataframe$'Side effects:', unlistingfunct) %>%
  unlist

totaldataframe$'Important pharmacokinetics / pharmacodynamics:'[totaldataframe$'Important pharmacokinetics / pharmacodynamics:' =="character(0)"] <- "NA"
totaldataframe$'Important pharmacokinetics / pharmacodynamics:' <- lapply(totaldataframe$'Important pharmacokinetics / pharmacodynamics:', unlistingfunct) %>%
  unlist
totaldataframe$'Patient information:' <- lapply(totaldataframe$'Patient information:' , unlistingfunct) %>%
  unlist

totaldataframe$'Other information:' [totaldataframe$'Other information:'  =="character(0)"] <- "NA"
totaldataframe$'Other information:' <- lapply(totaldataframe$'Other information:', unlistingfunct) %>%
  unlist

#Ignoring link
totaldataframe[c(1:2,4:10)] %>%
  mutate("tags" = str_c(class, " top50 drugs")) %>%
  write.csv(file = "anki.csv",row.names=FALSE, fileEncoding = 'UTF-8')
```

Anki then required I set up an appropriate card type.

I was able to import the csv.

I then added some styling information.

And was able to export the resultant flashcards as an .apkg.
