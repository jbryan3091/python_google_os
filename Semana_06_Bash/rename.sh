#!/bin/bash

for file in *.HTM; do
  name=$(basename "$file" .HTM)
  mv "$file" "$name.html" #echo to verify changes previous to make it
done
