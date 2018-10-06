Ebola Humanitarian Data Exchange
================

Working on Ebola data from the Humanitarian Data Exchange.

Working on these [datasets](https://data.humdata.org/ebola)

``` r
library(tidyverse)
library(readxl)
library(leaflet)
```

``` r
#https://data.humdata.org/dataset/ebola-cases-2014
data <- read_csv("ebola_data_db_format.csv")
data2 <- read_xls("ebola-cases-and-deaths-who-gar-sitrep.xls")
data3 <- read_xlsx("ebola_data_db_format.xlsx")
```

``` r
unique(data3$Indicator)
```

    ##  [1] "Cumulative number of confirmed, probable and suspected Ebola cases"                         
    ##  [2] "Cumulative number of confirmed Ebola cases"                                                 
    ##  [3] "Cumulative number of probable Ebola cases"                                                  
    ##  [4] "Cumulative number of suspected Ebola cases"                                                 
    ##  [5] "Cumulative number of confirmed, probable and suspected Ebola deaths"                        
    ##  [6] "Cumulative number of confirmed Ebola deaths"                                                
    ##  [7] "Cumulative number of probable Ebola deaths"                                                 
    ##  [8] "Cumulative number of suspected Ebola deaths"                                                
    ##  [9] "Number of confirmed Ebola cases in the last 21 days"                                        
    ## [10] "Number of confirmed, probable and suspected Ebola cases in the last 21 days"                
    ## [11] "Number of probable Ebola cases in the last 21 days"                                         
    ## [12] "Number of confirmed Ebola cases in the last 7 days"                                         
    ## [13] "Number of probable Ebola cases in the last 7 days"                                          
    ## [14] "Number of suspected Ebola cases in the last 7 days"                                         
    ## [15] "Number of confirmed, probable and suspected Ebola cases in the last 7 days"                 
    ## [16] "Proportion of confirmed Ebola cases that are from the last 7 days"                          
    ## [17] "Proportion of probable Ebola cases that are from the last 7 days"                           
    ## [18] "Proportion of suspected Ebola cases that are from the last 7 days"                          
    ## [19] "Proportion of confirmed, probable and suspected Ebola cases that are from the last 7 days"  
    ## [20] "Number of suspected Ebola cases in the last 21 days"                                        
    ## [21] "Proportion of confirmed Ebola cases that are from the last 21 days"                         
    ## [22] "Proportion of probable Ebola cases that are from the last 21 days"                          
    ## [23] "Proportion of suspected Ebola cases that are from the last 21 days"                         
    ## [24] "Proportion of confirmed, probable and suspected Ebola cases that are from the last 21 days" 
    ## [25] "Case fatality rate (CFR) of confirmed Ebola cases"                                          
    ## [26] "Case fatality rate (CFR) of probable Ebola cases"                                           
    ## [27] "Case fatality rate (CFR) of suspected Ebola cases"                                          
    ## [28] "Case fatality rate (CFR) of confirmed, probable and suspected Ebola cases"                  
    ## [29] "Number of confirmed Ebola deaths in the last 21 days"                                       
    ## [30] "Number of probable Ebola deaths in the last 21 days"                                        
    ## [31] "Number of suspected Ebola deaths in the last 21 days"                                       
    ## [32] "Number of confirmed, probable and suspected Ebola deaths in the last 21 days"               
    ## [33] "Proportion of confirmed Ebola deaths that are from the last 21 days"                        
    ## [34] "Proportion of probable Ebola deaths that are from the last 21 days"                         
    ## [35] "Proportion of suspected Ebola deaths that are from the last 21 days"                        
    ## [36] "Proportion of confirmed, probable and suspected Ebola deaths that are from the last 21 days"

Using the [hdxr package](https://callumgwtaylor.github.io/hdxr/) to load in Ebola data. Based on this [article](https://callumgwtaylor.github.io/blog/2017/07/03/cholera-in-yemen/) by Callum Taylor.
