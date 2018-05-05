path <- "~/Dropbox/Dev/Local Elections/"
path2 <- c("Counties_and_Unitary_Authorities_December_2015_Full_Clipped_Boundaries_in_England_and_Wales", "Counties_and_Unitary_Authorities_December_2015_Full_Extent_Boundaries_in_England_and_Wales", "Counties_and_Unitary_Authorities_December_2015_Generalised_Clipped_Boundaries_in_England_and_Wales", "Counties_and_Unitary_Authorities_December_2015_Super_Generalised_Clipped_Boundaries_in_England_and_Wales", "Counties_and_Unitary_Authorities_December_2015_Ultra_Generalised_Clipped_Boundaries_in_England_and_Wales")

str_c(path, path2)

str_c("shapefile", 1:5) 

readfun <- function(x, y, path2) {
  x <- rgdal::readOGR(y, path2)
}

mapply(readfun, str_c("shapefile", 1:5), str_c(path, path2), path2)