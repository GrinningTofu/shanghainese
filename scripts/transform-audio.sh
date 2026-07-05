#!/usr/bin/env sh
set -eu

mkdir -p audio/transformed
mkdir -p audio/clean

for source in audio/*.m4a; do
  [ -f "$source" ] || continue
  name="$(basename "$source")"
  transformed="audio/transformed/$name"
  ffmpeg -y \
    -i "$source" \
    -map_metadata -1 \
    -af "asetrate=51156,aresample=44100,atempo=0.8621,highpass=f=95,lowpass=f=7200,bass=g=-2,treble=g=2.5,acompressor=threshold=-18dB:ratio=2.2:attack=8:release=120,loudnorm=I=-18:LRA=11:TP=-1.5,aresample=44100" \
    -c:a aac \
    -b:a 112k \
    "$transformed"

  ffmpeg -y \
    -i "$transformed" \
    -map_metadata -1 \
    -af "afftdn=nf=-25,highpass=f=120,lowpass=f=7000,acompressor=threshold=-20dB:ratio=2:attack=8:release=100,loudnorm=I=-18:LRA=10:TP=-1.5" \
    -c:a aac \
    -b:a 112k \
    "audio/clean/$name"
done
