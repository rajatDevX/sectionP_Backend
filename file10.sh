#!/bin/bash

for file in *.txt
do
  if [ -f "$file" ]
  then
    echo "$file exists"
  else
    echo "No text files found"
  fi
done
