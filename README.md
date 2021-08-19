# Cookiecutter NodeJS package

Node setting with Webpack5


## Package with
* css-loader
* style-loader
* html-webpack-plugin
* mocha
* webpack

## Project files
```bash
{{cookiecutter.project_slug}}
├── LICENSE
├── README.md
├── dist                       # build output
├── package.json
├── src                        # build input
│   ├── base.html
│   └── index.js
├── tests                      # test
│   └── sample.spec.js
└── webpack.config.js 
```

## Dependency
* python3
* pip3
* cookiecutter - https://github.com/cookiecutter/cookiecutter
* npm
* nodejs


## Prerequirement
```bash
$ sudo apt install python3.8       # Any python3.x
$ sudo apt install python3-pip
$ pip3 install cookiecutter --user
```

## Quick start
```bash
# Project create
$ cookiecutter https://github.com/ppd0523/cookiecutter-node.git

# cookiecutter gh:ppd0523/cookiecutter-node

# After craeted
$ npm i

# Testing
$ npm test

# Hosting
$ npm run serve     # on 127.0.0.1:8080

# Build by production
$ npm run deploy
```
