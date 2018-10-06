Timeline
================

Based on the work of [Ben Keen](http://benalexkeen.com/creating-a-timeline-graphic-using-r-and-ggplot2/).

``` r
library(tidyverse)
library(ggplot2)
library(scales)
library(lubridate)
```

``` r
timeline <- read.csv('timeline.csv', header=FALSE)
otherevent <- read.csv('otherevent.csv', header=FALSE)
otherevent$V2 <- c("otherevent")
otherevent$V3 <- c("otherevent")
  
df <- rbind(timeline, otherevent)
rm(timeline, otherevent)

df <- df %>%
  rename(date = "V1") %>%
  rename(status = "V3") %>%
  rename(title = "V2")

#remove the first and third events
df <- df[-1,]
df <- df[-2,]
```

``` r
status_levels <- c("Other Event Meetings")
status_colors <- c("#0B93B8")

df$date <- as.Date(df$date, "%d/%m/%Y")
```

``` r
positions <- c(0.5, -0.5, 1.0, -1.0, 1.5, -1.5)
directions <- c(1, -1)

line_pos <- data.frame(
    "date"=unique(df$date),
    "position"=rep(positions, length.out=length(unique(df$date))),
    "direction"=rep(directions, length.out=length(unique(df$date)))
)

df <- merge(x=df, y=line_pos, by="date", all = TRUE)
df <- df[with(df, order(date, status)), ]

head(df)
```

    ##         date      title     status position direction
    ## 1 2017-03-02      Event     class2      0.5         1
    ## 2 2017-03-07 otherevent otherevent     -1.0        -1
    ## 3 2017-04-04 otherevent otherevent      1.5         1
    ## 4 2017-04-21    Event 3     class3     -0.5        -1
    ## 5 2017-04-25 otherevent otherevent     -1.5        -1
    ## 6 2017-04-26    Event 4     class2      1.0         1

``` r
text_offset <- 0.05

df$month_count <- ave(df$date==df$date, df$date, FUN=cumsum)
df$text_position <- (df$month_count * text_offset * df$direction) + df$position
head(df)
```

    ##         date      title     status position direction month_count
    ## 1 2017-03-02      Event     class2      0.5         1           1
    ## 2 2017-03-07 otherevent otherevent     -1.0        -1           1
    ## 3 2017-04-04 otherevent otherevent      1.5         1           1
    ## 4 2017-04-21    Event 3     class3     -0.5        -1           1
    ## 5 2017-04-25 otherevent otherevent     -1.5        -1           1
    ## 6 2017-04-26    Event 4     class2      1.0         1           1
    ##   text_position
    ## 1          0.55
    ## 2         -1.05
    ## 3          1.55
    ## 4         -0.55
    ## 5         -1.55
    ## 6          1.05

``` r
#add 60 days either direction
month_date_range <- seq(min(df$date) - days(60), max(df$date) + days(60), by='month')

month_format <- format(month_date_range, '%b')
month_df <- data.frame(month_date_range, month_format)
```

``` r
year_date_range <- seq(min(df$date) - days(60), max(df$date) + days(60), by='month')

year_date_range <- as.Date(
    intersect(
        ceiling_date(year_date_range, unit="year"),
        floor_date(year_date_range, unit="year")
    ),  origin = "1970-01-01"
)
year_format <- format(year_date_range, '%Y')
year_df <- data.frame(year_date_range, year_format)
```

``` r
subset <- df %>%
  filter(status != "otherevent")

welfsubset <- df %>%
  filter(status == "otherevent")
```

``` r
redsubset <- subset %>%
  filter(status == "event")

restsubset <- subset %>%
  filter(status != "event")
```

``` r
timeline_plot2 <- ggplot(df, aes(x=date,y=0, col="otherevent", label=title)) +
  labs(col="") +
  scale_color_manual(values=status_colors, labels=status_levels) +
  theme_classic() +
# Plot horizontal black line for timeline
  geom_hline(yintercept=0, color = "black", size=0.3) +
# Plot vertical segment lines for milestones
  geom_segment(data=subset, aes(y=position,yend=0,xend=date), color='black', size=0.2) +
# Plot scatter points at zero and date
  geom_point(data= welfsubset, aes(y=0), size=3) +
# Don't show axes, appropriately position legend
  theme(axis.line.y=element_blank(),
                 axis.text.y=element_blank(),
                 axis.title.x=element_blank(),
                 axis.title.y=element_blank(),
                 axis.ticks.y=element_blank(),
                 axis.text.x =element_blank(),
                 axis.ticks.x =element_blank(),
                 axis.line.x =element_blank(),
        legend.position = "bottom"
                ) +
# Show text for each month
  geom_text(data=month_df, aes(x=month_date_range, y=-0.1, label=month_format), size=2.5, vjust=0.5, color='black', angle=90) +
# Show year text
  geom_text(data=year_df, aes(x=year_date_range, y=-0.3, label=year_format, fontface="bold"), size=2.5, color='black') +
#red milestones
  geom_text(data=redsubset, aes(y=text_position,label=title), colour = "#FF0000", size=2.5) +
#rest of milestones
  geom_text(data=restsubset, aes(y=text_position,label=title), colour = "#34495E", size=2.5) +
  annotate("rect", xmin = date("2018-08-27"), xmax = max(month_date_range) + days(60), ymin = 0, ymax = 1.5, alpha = 0.2) +
#add new year
  geom_text(aes(x = date("2018-09-25"), y = 0.8, label = "New Period"), colour = "#34495E", size = 2)
print(timeline_plot2)
```

![](example_files/figure-markdown_github/unnamed-chunk-10-1.png)
