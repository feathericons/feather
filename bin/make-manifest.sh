#!/usr/bin/env bash

cd ./icons

n=$(ls -1 | wc -l)
m=0

echo "["
for i in $(ls -1 *.svg | cut -d '.' -f 1 )
do
    m=$((m + 1))
    echo -n "  "\"$i\"
    [ "$m" == $n ] && echo "" || echo ","
done
echo "]"
