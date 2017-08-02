#!/bin/bash

echo $1
find . -name "*.DS_STORE" -type f -delete
inkscape $1 --verb=EditSelectAll --verb=SelectionUnGroup --verb=StrokeToPath --verb=FileSave --verb=FileQuit
find . -name "*.bkp" -type f -delete
