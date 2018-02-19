#!/bin/bash

./node_modules/.bin/babel-node bin/process-svgs.js

./node_modules/.bin/rimraf dist
mkdir dist
./node_modules/.bin/babel-node bin/build-icons-json.js
./node_modules/.bin/babel-node bin/build-sprite.js

./node_modules/.bin/rimraf dist/icons
mkdir dist/icons
./node_modules/.bin/babel-node bin/build-svgs.js

./node_modules/.bin/webpack --output-filename feather.js
./node_modules/.bin/webpack --output-filename feather.min.js -p
