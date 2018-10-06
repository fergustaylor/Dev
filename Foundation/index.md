Foundation
================

Working on FPO data, as published in the [UK Foundation Programme](http://www.foundationprogramme.nhs.uk/content/reports), "Recruitment Stats and Facts, Interim Report April 2017".

To do this I've used a new package - [Tabulizer.](https://github.com/ropensci/tabulizer)

This was probably one of the hardest set-ups I've had to do. After downloading several different versions of Java, I had some luck with this [set-up guide.](https://zhiyzuo.github.io/installation-rJava/)

I would say it's been worth the effort however.

Load in Libraries
=================

``` r
library(tabulizer)
library(tidyverse)
```

Load in Tables
==============

``` r
pdf <- "2017_Recruitment_Stats_and_Facts.pdf"
data <- extract_tables(pdf, output = "data.frame", header = TRUE)
```

Index
=====

    ##   Table                                                       Title Page
    ## 1   1.1                                              AFP Fill Rates    6
    ## 2   1.2 Local AFP Applications and FP Preferences by Medical School    7
    ## 3   2.1                                          Applications to FP    8
    ## 4   2.2                  Applicant profile comparison 2016 and 2017    8
    ## 5   2.3                   Reserve List Applicants by Medical School    9
    ## 6   2.4                  Special Circumstances Granted by Criterion    9

Table: 1.2: Local AFP Applications and FP Preferences by Medical School
=======================================================================

``` r
example1 <- data[[4]] %>%
  filter(X == "University of Glasgow") %>%
  select(-X) %>%
  rename("Number Applied to Local AUoA" = Number) %>%
  rename("% Applied to Local AUoA" = X.1) %>%
  rename("Number Preferenced Home UoA" = Number.1) %>%
  rename("% Preferenced Home UoA" = X.) %>%
  print()
```

    ##   Number Applied to Local AUoA % Applied to Local AUoA
    ## 1                           30                     75%
    ##   Number Preferenced Home UoA % Preferenced Home UoA
    ## 1                         215                    78%

Table 2.7: Local Applications by Medical School
===============================================

    ##   Number Applied Number who Preferenced Home UoA
    ## 1            275                             215
    ##   % who Preferenced Home UoA
    ## 1                        78%

Table 2.8: FP Programme Preferences
===================================

    ##   Number of Applicants who Preferenced UoA First
    ## 1                                            865
    ##   Number of Applicants who Preferenced UoA Second
    ## 1                                             331
    ##   Number of Applicants who Preferenced UoA Third
    ## 1                                            233

Table 2.9: FP Total Scores by Medical School
============================================

    ##   FP 2016: SJT + EPM (deciles) (Max. score: 100)
    ## 1                         79.68 6.12 95.15 65.54
    ##   FP 2017: SJT + EPM (deciles) (Max. score: 100)
    ## 1                         78.20 5.31 88.06 63.59

Table 2.10: Application Results by Medical School
=================================================

    ##   Number Applied Number Applied to FP (excl. AFP Offers)
    ## 1            275                                     256
    ##   Percentage of Total Applicants in FP Allocation
    ## 1                                             93%
    ##   Allocated to Primary List Percentage Allocated to Primary List
    ## 1                       254                                  99%

Table 2.11: Preference Allocation Results Information by Medical School
=======================================================================

    ##   Number Allocated to First Preference % Allocated to First Preference
    ## 1                                  215                             85%
    ##   Number Allocated to Top 5 Preference
    ## 1                                  244
    ##   Percentage Allocated to Top 5 Preference
    ## 1                                      96%
    ##   Percentage Allocated Lower than Top 5 Preference
    ## 1                                               4%

Table 2.12: FP Application Results by Foundation School
=======================================================

    ##   Places 1st pref apps % 1st pref apps Non-1st pref spaces
    ## 1    792           785             99%                   7
    ##   No. allocated via spec circs % allocated via spec circs
    ## 1                           11                         1%
    ##   No. allocated to 1st pref No. allocated to top 5 prefs
    ## 1                       740                          778
    ##   % allocated to 1st pref % allocated to top 5 prefs Lowest pref allocated
    ## 1                     93%                        98%                    11
    ##   Lowest allocated score (excluding s/c) Lowest s/c allocated score
    ## 1                                  70.74                      70.53

Table 2.13: SJT scores by medical school (max. score = 50). SJT scores were scaled according to the distribution of EPM decile scores
=====================================================================================================================================

    ##   FP 2014: SJT Score (only) FP 2015: SJT Score (only)
    ## 1    38.93 3.82 47.22 26.08    38.56 3.31 48.25 25.17
    ##   FP 2016: SJT Score (only) FP 2017: SJT Score (only)
    ## 1    39.59 4.36 49.15 26.92  39.77 3.70 48.017 26.142

Table 3.3: Applications by Medical School
=========================================

    ##   Number Applied for AFP Number Offered AFP % Offered AFP
    ## 1                     40                 25           63%
    ##   Number Accepted Offer % Accepted Offer
    ## 1                    19              76%
