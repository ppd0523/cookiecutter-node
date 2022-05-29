# Cookiecutter HTML5 boilder-plate

Node setting with Webpack5, Babel7


## Package
* webpack
* typescript
* babel
* jest
* sass

## Project files
```bash
.
├── LICENSE
├── README.md
├── babel.config.js
├── package.json
├── src
│   ├── base.html
│   └── index.js
├── tests
│   └── sample.spec.js
├── tsconfig.json
└── webpack.config.js

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
$ yarn

# Testing
$ npm test
$ yarn test

# Hosting
$ npm run start     # on 127.0.0.1:3000
$ yarn start

# Build
$ npm run build
$ yarn build --env development
$ yarn build --env production
```
