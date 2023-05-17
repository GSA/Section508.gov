#!/bin/bash
# angular build script for ART
#npm link @angular/cli;
baseurl='https://federalist-7a132a2e-6307-4cd0-9f82-e30e871d214a.sites.pages.cloud.gov/preview/gsa/section508.gov/'; 
url=$baseurl${BRANCH}"/art/"
echo 'Demo url -->' $url; 
[ ${BRANCH} = 'main' ] && ng build --configuration production --base-href=https://www.section508.gov/art/;  
[ ${BRANCH} != 'main' ] && ng build --configuration dev --base-href=$url;