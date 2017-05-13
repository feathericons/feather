#!/usr/bin/env bash

./bin/make-manifest.sh > manifest.json
./bin/make-zip.sh
jekyll build
