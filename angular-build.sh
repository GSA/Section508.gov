#!/bin/bash
set -euo pipefail

# Cloud.gov Pages supplies the branch used for the ART preview URL.
: "${BRANCH:?BRANCH must be set for the Cloud.gov Pages Angular build}"

echo "Starting Angular Build"
if [[ "$BRANCH" == "main" ]]; then
  configuration=production
  url='https://www.section508.gov/art/'
else
  configuration=dev
  baseurl='https://federalist-7a132a2e-6307-4cd0-9f82-e30e871d214a.sites.pages.cloud.gov/preview/gsa/section508.gov/'
  url="${baseurl}${BRANCH}/art/"
fi

echo "Base href -> $url"
ng build --configuration "$configuration" --base-href="$url"
echo "Angular build completed!"
