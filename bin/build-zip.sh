#!/usr/bin/env bash

# find and store current version number
version=$(grep '"version"' package.json | cut -d '"' -f4)

# compress 'icons' directory and 'all-icons.svg' into feather-[version].zip
zip -r feather.zip all-icons.svg ./icons/
