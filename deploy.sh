#!/usr/bin/env bash

rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "deploy" &&
git branch -M main &&
git remote add origin git@github.com:EvaLLLLL/moneybag-website.git &&
git push -u origin main -f
cd -
