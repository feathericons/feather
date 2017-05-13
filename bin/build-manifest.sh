#!/usr/bin/env bash

cd ./icons

numFiles=$(ls -1 *.svg | wc -l)
count=0

echo [
for icon in $(ls *.svg)
do
    count=$((count + 1))
    echo -n "  "\"${icon%.svg}\"
    (($count == $numFiles)) && echo "" || echo ,
done
echo ]
