#!/bin/bash

echo $1
#sed -i .bkp 's/stroke-width="2"/stroke-width="1"/g' $1
inkscape $1 --verb=EditSelectAll --verb=SelectionUnGroup --verb=StrokeToPath --verb=FileSave --verb=FileQuit
find . -name "*.bkp" -type f -delete
