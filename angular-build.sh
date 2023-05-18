#!/bin/bash
# angular build script for ART
#npm link @angular/cli;
echo "Starting Angular Build";
#Initializing he base url, which is the federalist demo link url without the brnach name at the end
baseurl='https://federalist-7a132a2e-6307-4cd0-9f82-e30e871d214a.sites.pages.cloud.gov/preview/gsa/section508.gov/'; 
# The actual url needed for will be the base url with the branch in which the code will be pushed. Since art code will be run in the art directory, we all append that directory
url=$baseurl${BRANCH}"/art/";
echo 'Base href -> ' $url; 
#if the code is push on the main branch
[ ${BRANCH} = 'main' ] && ng build --configuration production --base-href=https://www.section508.gov/art/;  
#if the code is pushed on any pther brnach, they will be using federalist cloud from url
[ ${BRANCH} != 'main' ] && ng build --configuration dev --base-href=$url;