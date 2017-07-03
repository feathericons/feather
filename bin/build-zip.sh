#!/usr/bin/env bash

# find and store current version number
version=$(grep '"version"' package.json | cut -d '"' -f4)

# compress 'icons' directory into feather-[version].zip
zip -r feather.zip ./icons/
