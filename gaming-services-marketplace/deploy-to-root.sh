#!/bin/bash

# Build the Next.js app
npm run export

# Copy the built files to root for GitHub Pages
cp -r out/* .

# Add .nojekyll to prevent Jekyll processing
touch .nojekyll

echo "Deployment files copied to root directory"
echo "Now commit and push these changes to deploy to GitHub Pages"
