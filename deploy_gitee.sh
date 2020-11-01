#!/usr/bin/env bash

rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "deploy" &&
git remote add origin git@gitee.com:Eva_L/moneybag-website.git &&
git push -u origin master -f
cd -
