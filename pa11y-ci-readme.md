Install pa11y-ci globally with `npm install -g pa11y-ci`
Run `pa11y-ci` in the root of the project (typically http://127.0.0.1:4200) to test all URLs in the sitemap.xml file.
Copy-paste cli command below to run pa11y-ci with the config file and sitemap URL; exludes online-training assets files from testing.
pa11y-ci --config .pa11yci --sitemap http://127.0.0.1:4000/sitemap.xml  --sitemap-exclude "/assets/online-training/.*"