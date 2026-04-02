source "https://rubygems.org"
ruby '>= 4.0.2'

gem "jekyll", "~> 4.4.1"
gem "execjs", "2.7.0" # https://github.com/rails/execjs/issues/99
gem "autoprefixer-rails"
gem "webrick"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.15"
  gem 'jekyll-redirect-from'
  gem 'jekyll-paginate-v2', "3.0.0"
  gem 'jekyll-sitemap'
  gem 'jekyll-seo-tag'
end

gem "nokogiri", ">= 1.19.1"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:windows, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?

gem "html-proofer", "~> 5.1"
