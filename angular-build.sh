#!/bin/bash
# angular build script for ART

baseurl='https://federalist-7a132a2e-6307-4cd0-9f82-e30e871d214a.sites.pages.cloud.gov/preview/gsa/section508.gov/'; 
url=$baseurl${BRANCH}
echo 'Demo url -->' $url; 
[ ${BRANCH} = 'main' ] && echo 'Section508';  
[ ${BRANCH} != 'main' ] && echo $url;
