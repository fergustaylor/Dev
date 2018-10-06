
<!-- basic.md is generated from basic.Rmd. Please edit that file -->
gganimate <img src="man/figures/logo.png" align="right" />
==========================================================

`gganimate`

``` r
library(ggplot2)
library(gganimate)

ggplot(mtcars, aes(factor(cyl), mpg)) + 
  geom_boxplot() + 
  # Here comes the gganimate code
  transition_states(
    gear,
    transition_length = 2,
    state_length = 1
  ) +
  enter_fade() + 
  exit_shrink() +
  ease_aes('sine-in-out')
#> Warning in file.create(to[okay]): cannot create file 'man/figures/README-
#> unnamed-chunk-2-1.gif', reason 'No such file or directory'
```

![](man/figures/README-unnamed-chunk-2-1.gif)

``` r
# install.packages('devtools')
devtools::install_github('thomasp85/gganimate')
```

Github syntax <https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf> <https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet> <https://guides.github.com/features/mastering-markdown/> <https://help.github.com/articles/basic-writing-and-formatting-syntax/>
