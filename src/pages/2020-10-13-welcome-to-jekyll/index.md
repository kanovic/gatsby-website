---
path: "/welcome-to-jekyll/"
date: "2020-10-13"
title: "Welcome to Jekyll! ???"
author: "Koenraad"
---

Doing research on the available solutions on which you can start your own blog, [Jekyll](https://jekyllrb.com/) was the right one for me. Allthough I never worked with Ruby and 'gems' before I was in need of some new internet technology stuff and the [documentation](https://jekyllrb.com/docs/home) on Jekyll is pretty good to follow along. The problem started a bit later after I decided to use this awesome plain and minimal community theme [whiteglass](https://github.com/yous/whiteglass) by [Yous](https://github.com/yous).

The [repository](https://github.com/yous/whiteglass) is nicely setup with a GitHub Actions workflow included to automate the build and deployment of your Jekyll site on GitHub pages. But GitHub pages only supports a small set of themes and plugins. Unfortunatly the chosen theme whiteglass and the catagories/tags plugin is not supported.

Googling the workaround for using an unsupported community theme I came across this 'jekyll-remote-theme' [repository](https://github.com/benbalter/jekyll-remote-theme). It has some easy steps to enable the deployment to GitHub pages:

1. Add the dependency to your Gemfile

   ```ruby
   gem "jekyll-remote-theme"
   ```

2. Enable the plugin and set desired theme in your `_config.yml`

   ```yml
   plugins:
     - jekyll-remote-theme
   ```

   and

   ```yml
   remote_theme: yous/whiteglass
   ```

3. Install the new dependency

   ```Ruby
   bundle install
   ```

4. Remove any workflows, in my case the GitHub pages workflow in `.github` folder at root.

5. Push!

When you push the changes made to the `Gemfile` and your `_config.yml` to the branch you set up for GitHub pages to build from, the enviroment will build and publish your Jekyll site with community theme without problems!

The used categories plugin on your new blog site still does not work. If this is not mandatory for your needs, skip the next part you are done. If you want the full functionality of the theme with it's plugin, we need to let another service build and deploy the Jekyll site and theme. The creator of the theme recommends [Travis CI](https://travis-ci.com/).

At Travis CI you can sign up with your GitHub account, and give Travis CI access to your repositories.
To let Travis CI deploy to your private or public repositories, you need to generate a new 'repo' (private) or 'public_repo' (public) [access token](https://github.com/settings/tokens) depending on your repository. Then to let Travis CI build and deploy the site, follow these steps:

1. Create a new Enviroment Variable at your Travis CI repository settings `GITHUB_TOKEN` and paste the value of your GitHub token.

2. Copy `.travis.yml` and its content created by Yous to your local repository:

   ```yaml
   language: ruby
   cache: bundler
   rvm:
     - 2.7.1
   addons:
   apt:
     packages:
       - openjdk-8-jre
   before_install:
     - gem update --system
     - gem install bundler
     - nvm install node
   install:
     - bundle install --jobs=3 --retry=3
     - pip install --user html5validator
     - npm install -g pa11y-ci
   script:
     - bundle exec jekyll clean && bundle exec jekyll build
     - html5validator --Werror --also-check-css --also-check-svg --root _site/
     - |
       (bundle exec jekyll server -d _tmp_site & echo $! >&3) 3>jekyll.pid | grep -q 'Server running' && \
       pa11y-ci --sitemap http://localhost:4000/whiteglass/sitemap.xml && \
       kill -9 "$(cat jekyll.pid)" && \
       rm -f jekyll.pid
   branches:
   only:
     - master
   deploy:
   provider: pages
   skip_cleanup: true
   github_token: $GITHUB_TOKEN # Set in the settings page of your repository, as a secure variable
   keep_history: true
   local_dir: _site
   target_branch: gh-pages
   on:
     branch: master
   ```

   Change the sitemap url in the script section as follows: `http://localhost:4000/[base url]/sitemap.xml`

3. Push your local repository to GitHub, it will trigger the Travis CI build and deployment

After the deployment via Travis CI you now have a working theme with functionality including the plugins. In the header of this blog post, the category '[webdevelopment](/categories/webdevelopment)' is now visible. Each category used in blogs now has its own lists of blog posts at `/categories/[category]`!
