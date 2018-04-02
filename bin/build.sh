#!/bin/bash

# Process SVG files
./node_modules/.bin/babel-node bin/process-svgs.js

# Create dist directory
./node_modules/.bin/rimraf dist
mkdir dist

# Build icons.json
./node_modules/.bin/babel-node bin/build-icons-json.js

# Build SVG sprite
./node_modules/.bin/babel-node bin/build-sprite.js

# Create dist/icons directory
./node_modules/.bin/rimraf dist/icons
mkdir dist/icons

# Build SVG icons
./node_modules/.bin/babel-node bin/build-svgs.js

# Build JavaScript library
./node_modules/.bin/webpack --output-filename feather.js
./node_modules/.bin/webpack --output-filename feather.min.js -p
