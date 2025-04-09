#!/bin/bash

# This script uses:
#   - Inkscape to convert every icon from strokes to paths
#   - Fontcustom to convert all svg icons to TTF font
#   - GNU Parallel to speedup process
#   - Xvfb (X11 virtual frame buffer) to prevent show Inkscape window for
#     every icon. Its not necessary, but highly recommended
# First parameter is the output directory based on workdir wich should be ./../
#   ex.: (...)/bin/build-ttf.sh dist/font will generate TTF in (...)/dist/font
# Some times, this script logs some Glib or Inkscape related errors to console.
#   Its normal, simple ignore

WORKDIR="$(cd "$(dirname "$0")/../" && pwd)"
OUTDIR=$1
if [[ -z $OUTDIR ]]; then
  printf "Please, inform output directory as first argument\n"
  exit 1
fi
OUTDIR="$WORKDIR/$OUTDIR"

rm -rf $OUTDIR && mkdir -p $OUTDIR

if [[ -z $XVFB ]]; then
  OS=`uname -s`
  if [[ $OS == "Darwin" ]]; then
    XVFB="/usr/X11/bin/Xvfb"
  elif [[ $OS == "Linux" ]]; then
    XVFB=`which Xvfb`
  fi
fi

TEMPDIR=`mktemp -d -t feather.XXXXXXXXXX`
CMD="parallel --bar inkscape -f {}\
  --verb=EditSelectAll\
  --verb=StrokeToPath\
  --verb=FileSave\
  --verb=FileQuit\
  ::: $TEMPDIR/*.svg"

cp "$WORKDIR"/icons/* "$TEMPDIR"
printf "TTF font will be generated on $OUTDIR using temp folder $TEMPDIR\n"
if [[ -x $XVFB ]]; then
  $XVFB :2019 -screen 0 640x480x24 -nolisten tcp >> /dev/null 2>&1 &
  XVFBPID=$!
  DISPLAY=:2019 $CMD && kill -SIGTERM $XVFBPID
else
  $CMD
fi
fontcustom compile $TEMPDIR -n Feather -o "$OUTDIR" -F -h
rm -rf $TEMPDIR
