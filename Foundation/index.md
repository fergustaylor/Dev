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
library(kableExtra)
```

Load in Tables
==============

``` r
pdf <- "2017_Recruitment_Stats_and_Facts.pdf"
data <- extract_tables(pdf, output = "data.frame", header = TRUE)
```

Index
=====

<table class="table table-striped table-hover table-condensed table-responsive" style="margin-left: auto; margin-right: auto;">
<thead>
<tr>
<th style="text-align:left;">
Table
</th>
<th style="text-align:left;">
Title
</th>
<th style="text-align:right;">
Page
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left;">
1.1
</td>
<td style="text-align:left;">
AFP Fill Rates
</td>
<td style="text-align:right;">
6
</td>
</tr>
<tr>
<td style="text-align:left;">
1.2
</td>
<td style="text-align:left;">
Local AFP Applications and FP Preferences by Medical School
</td>
<td style="text-align:right;">
7
</td>
</tr>
<tr>
<td style="text-align:left;">
2.1
</td>
<td style="text-align:left;">
Applications to FP
</td>
<td style="text-align:right;">
8
</td>
</tr>
<tr>
<td style="text-align:left;">
2.2
</td>
<td style="text-align:left;">
Applicant profile comparison 2016 and 2017
</td>
<td style="text-align:right;">
8
</td>
</tr>
<tr>
<td style="text-align:left;">
2.3
</td>
<td style="text-align:left;">
Reserve List Applicants by Medical School
</td>
<td style="text-align:right;">
9
</td>
</tr>
<tr>
<td style="text-align:left;">
2.4
</td>
<td style="text-align:left;">
Special Circumstances Granted by Criterion
</td>
<td style="text-align:right;">
9
</td>
</tr>
</tbody>
</table>
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
  kable() %>%
  kable_styling(bootstrap_options = c("striped", "hover", "condensed", "responsive"))
example1
```

<table class="table table-striped table-hover table-condensed table-responsive" style="margin-left: auto; margin-right: auto;">
<thead>
<tr>
<th style="text-align:left;">
Number Applied to Local AUoA
</th>
<th style="text-align:left;">
% Applied to Local AUoA
</th>
<th style="text-align:left;">
Number Preferenced Home UoA
</th>
<th style="text-align:left;">
% Preferenced Home UoA
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left;">
30
</td>
<td style="text-align:left;">
75%
</td>
<td style="text-align:left;">
215
</td>
<td style="text-align:left;">
78%
</td>
</tr>
</tbody>
</table>
Table 2.7: Local Applications by Medical School
===============================================

<table class="table table-striped table-hover table-condensed table-responsive" style="margin-left: auto; margin-right: auto;">
<thead>
<tr>
<th style="text-align:left;">
Number Applied
</th>
<th style="text-align:left;">
Number who Preferenced Home UoA
</th>
<th style="text-align:left;">
% who Preferenced Home UoA
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left;">
275
</td>
<td style="text-align:left;">
215
</td>
<td style="text-align:left;">
78%
</td>
</tr>
</tbody>
</table>
Table 2.8: FP Programme Preferences
===================================

<table class="table table-striped table-hover table-condensed table-responsive" style="margin-left: auto; margin-right: auto;">
<thead>
<tr>
<th style="text-align:left;">
Number of Applicants who Preferenced UoA First
</th>
<th style="text-align:left;">
Number of Applicants who Preferenced UoA Second
</th>
<th style="text-align:left;">
Number of Applicants who Preferenced UoA Third
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left;">
865
</td>
<td style="text-align:left;">
331
</td>
<td style="text-align:left;">
233
</td>
</tr>
</tbody>
</table>
Table 2.9: FP Total Scores by Medical School
============================================

<table class="table table-striped table-hover table-condensed table-responsive" style="margin-left: auto; margin-right: auto;">
<thead>
<tr>
<th style="text-align:left;">
FP 2016: SJT + EPM (deciles) (Max. score: 100)
</th>
<th style="text-align:left;">
FP 2017: SJT + EPM (deciles) (Max. score: 100)
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left;">
79.68 6.12 95.15 65.54
</td>
<td style="text-align:left;">
78.20 5.31 88.06 63.59
</td>
</tr>
</tbody>
</table>
Table 2.10: Application Results by Medical School
=================================================

<table class="table table-striped table-hover table-condensed table-responsive" style="margin-left: auto; margin-right: auto;">
<thead>
<tr>
<th style="text-align:left;">
Number Applied
</th>
<th style="text-align:left;">
Number Applied to FP (excl. AFP Offers)
</th>
<th style="text-align:left;">
Percentage of Total Applicants in FP Allocation
</th>
<th style="text-align:left;">
Allocated to Primary List
</th>
<th style="text-align:left;">
Percentage Allocated to Primary List
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left;">
275
</td>
<td style="text-align:left;">
256
</td>
<td style="text-align:left;">
93%
</td>
<td style="text-align:left;">
254
</td>
<td style="text-align:left;">
99%
</td>
</tr>
</tbody>
</table>
Table 2.11: Preference Allocation Results Information by Medical School
=======================================================================

<table class="table table-striped table-hover table-condensed table-responsive" style="margin-left: auto; margin-right: auto;">
<thead>
<tr>
<th style="text-align:left;">
Number Allocated to First Preference
</th>
<th style="text-align:left;">
% Allocated to First Preference
</th>
<th style="text-align:left;">
Number Allocated to Top 5 Preference
</th>
<th style="text-align:left;">
Percentage Allocated to Top 5 Preference
</th>
<th style="text-align:left;">
Percentage Allocated Lower than Top 5 Preference
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left;">
215
</td>
<td style="text-align:left;">
85%
</td>
<td style="text-align:left;">
244
</td>
<td style="text-align:left;">
96%
</td>
<td style="text-align:left;">
4%
</td>
</tr>
</tbody>
</table>
Table 2.12: FP Application Results by Foundation School
=======================================================

<table class="table table-striped table-hover table-condensed table-responsive" style="margin-left: auto; margin-right: auto;">
<thead>
<tr>
<th style="text-align:left;">
Places
</th>
<th style="text-align:left;">
1st pref apps
</th>
<th style="text-align:left;">
% 1st pref apps
</th>
<th style="text-align:left;">
Non-1st pref spaces
</th>
<th style="text-align:left;">
No. allocated via spec circs
</th>
<th style="text-align:left;">
% allocated via spec circs
</th>
<th style="text-align:left;">
No. allocated to 1st pref
</th>
<th style="text-align:left;">
No. allocated to top 5 prefs
</th>
<th style="text-align:left;">
% allocated to 1st pref
</th>
<th style="text-align:left;">
% allocated to top 5 prefs
</th>
<th style="text-align:left;">
Lowest pref allocated
</th>
<th style="text-align:left;">
Lowest allocated score (excluding s/c)
</th>
<th style="text-align:left;">
Lowest s/c allocated score
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left;">
792
</td>
<td style="text-align:left;">
785
</td>
<td style="text-align:left;">
99%
</td>
<td style="text-align:left;">
7
</td>
<td style="text-align:left;">
11
</td>
<td style="text-align:left;">
1%
</td>
<td style="text-align:left;">
740
</td>
<td style="text-align:left;">
778
</td>
<td style="text-align:left;">
93%
</td>
<td style="text-align:left;">
98%
</td>
<td style="text-align:left;">
11
</td>
<td style="text-align:left;">
70.74
</td>
<td style="text-align:left;">
70.53
</td>
</tr>
</tbody>
</table>
Table 2.13: SJT scores by medical school (max. score = 50). SJT scores were scaled according to the distribution of EPM decile scores
=====================================================================================================================================

<table class="table table-striped table-hover table-condensed table-responsive" style="margin-left: auto; margin-right: auto;">
<thead>
<tr>
<th style="text-align:left;">
FP 2014: SJT Score (only)
</th>
<th style="text-align:left;">
FP 2015: SJT Score (only)
</th>
<th style="text-align:left;">
FP 2016: SJT Score (only)
</th>
<th style="text-align:left;">
FP 2017: SJT Score (only)
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left;">
38.93 3.82 47.22 26.08
</td>
<td style="text-align:left;">
38.56 3.31 48.25 25.17
</td>
<td style="text-align:left;">
39.59 4.36 49.15 26.92
</td>
<td style="text-align:left;">
39.77 3.70 48.017 26.142
</td>
</tr>
</tbody>
</table>
Table 3.3: Applications by Medical School
=========================================

<table class="table table-striped table-hover table-condensed table-responsive" style="margin-left: auto; margin-right: auto;">
<thead>
<tr>
<th style="text-align:left;">
Number Applied for AFP
</th>
<th style="text-align:left;">
Number Offered AFP
</th>
<th style="text-align:left;">
% Offered AFP
</th>
<th style="text-align:left;">
Number Accepted Offer
</th>
<th style="text-align:left;">
% Accepted Offer
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left;">
40
</td>
<td style="text-align:left;">
25
</td>
<td style="text-align:left;">
63%
</td>
<td style="text-align:left;">
19
</td>
<td style="text-align:left;">
76%
</td>
</tr>
</tbody>
</table>
