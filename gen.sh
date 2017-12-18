#!/bin/bash 
COUNTER=$1
while [  ${COUNTER} -le $2 ]; do
    echo "gopikaTwo[${COUNTER}] = '\\u0A95';"
    let COUNTER+=1
done
