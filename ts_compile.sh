#!/bin/bash

if [ ! -d build ]; then
    echo "création du répertoire script"
    mkdir build
fi

tsc
echo "compilation terminer"