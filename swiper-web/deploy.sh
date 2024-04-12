#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 删除 dist 目录
rm -rf dist

# 构建
npm run build

# cd 到构建输出的目录下 
cd dist

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:daluozha/gh-pages-template.git main:gh-pages

cd -