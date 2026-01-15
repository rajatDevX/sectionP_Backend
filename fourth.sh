#!/bin/bash
file=file2.txt

if [ -f "$file" ]
then
    echo "file exists"
else
    echo "file not found"
fi