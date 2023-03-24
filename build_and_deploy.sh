#!/bin/bash

# remove old build
echo "Removing old build"
rm -rf ./build

# Pull master branch
echo "Pulling latest updates"
git pull origin master

# npm build and deploy
echo "Deploying..."
npm run deploy -- -m "Deploy React app to GitHub Pages"

