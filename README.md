# Cookiecutter NodeJS package

Node setting with Webpack5, Babel7


## Package
* webpack5
* babel7
    * babel-loader
    * style-loader
    * css-loader
* jest

## Project files
```bash
{{cookiecutter.project_slug}}
├── LICENSE
├── README.md
├── babel.config.js            # babel config
├── dist/                      # build output
├── package.json
├── src/                       # build input
│   ├── base.html
│   └── index.js
├── tests/                     # test
│   └── sample.spec.js
└── webpack.config.js          # webpack config

```

## Dependency
* python3
* pip3
* cookiecutter - https://github.com/cookiecutter/cookiecutter
* npm
* node


## Prerequirement
```bash
# Install python, cookiecutter
$ sudo apt install python3.8       # Any python3.x
$ sudo apt install python3-pip
$ pip3 install cookiecutter --user

# Install nvm, node
```

## Quick start
```bash
# Project create by cookiecutter
$ cookiecutter https://github.com/ppd0523/cookiecutter-node.git
# or cookiecutter gh:ppd0523/cookiecutter-node

# After craeted
$ npm i

# Testing
$ npm test

# Hosting
$ npm run serve     # on 127.0.0.1:8080

# Build by production
$ npm run deploy

$ npx webpack --env mode=development
$ npx webpack --env mode=production
```
