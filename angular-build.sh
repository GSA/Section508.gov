#!/bin/bash
# angular build script for ART

url = 'https://federalist-7a132a2e-6307-4cd0-9f82-e30e871d214a.sites.pages.cloud.gov/preview/gsa/section508.gov/'; 
echo 'Demo url -->' $url${BRANCH}; 
[ ${BRANCH} = 'main' ] && echo $url${BRANCH};  
[ ${BRANCH} != 'main' ] && echo $url${BRANCH};
