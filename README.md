# Progressive Web App Text Editor (JATE)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

An online text-editing program that feature JavaScript syntax highlighting, constructed with Workbox and Webpack so that end users can install it to their computer or mobile device, straight from their browser!

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Images](#images)

## Installation

In order to install JATE and run it on a server, you must first clone this git repository and navigate to its root directory (please ensure you have node.js and NPM installed on your machine). Once in this directory, simply typing ```npm install --include=dev``` will install the necessary dependencies to build and start the server.

## Usage

Once the necessary dependencies have been required using the method outlined above, typing ```npm start``` will build the server and run an instance of it on your local machine. If you'd like to make changes to the server, consider changing ```mode: 'production'``` to ```mode: 'development'``` in the ```webpack.config.js``` file within the 'clients' folder for easier iteration.

the ```.npmrc``` file included in the repository is provided for Heroku, in order to ensure that it installs the necessary devDependencies with node when the application is pushed to a live server, and in some instances may be unnecessary for you if you are not using the same service to host the server.

## Images

![Preview of the application running in the web browser.](./git_assets/preview.jpg)

## Deployment

The live application is deployed with Heroku at [the following link.](https://helpvisa-jate.herokuapp.com/)