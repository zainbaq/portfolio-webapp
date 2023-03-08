#!/bin/sh

# remove old build
rm -rf ./build

# Pull master branch
git pull origin master

# npm build and deploy
npm run deploy -- -m "Deploy React app to GitHub Pages"

