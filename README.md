# Des données pour l'autisme
## Installation
### Software dependencies
To make this project up and running, you need:

* **Node** 0.8.7
* **NPM** 1.1.32


### Dependencies
This project is build at the top of the pleasant [Node Package Manager](http://npmjs.org/). To download and set up the whole dependancies three, simply run from the project's root directory :

    $ npm install

### Configuration files
The default configuration is present into the *config/default.json*. Every modifications in this file will be commited. The *runtime.json* file is an auto-generated file that you shouldn't edit.

* **Development mode**: If you want to overide default values, you have to create a file named *config/development.json* and corresponding to your local configuration. This file will be ignored by git. 
* **Production mode**: if you want to overide default values, you have to edit the *config/production.json* file to fit with your production environment. This file will be ignored by git. 

### Environment variables
The following environment variables can be use with the highest priority :

* **PORT** defines the port to listen to (ex: *80*);
* **API_URL** defines the url to the API;
* **NODE_ENV** defines the runing mode (ex: *development*, *production*, etc);

### Common issues
* **Error: watch ENOSPC**: Do not run the application with DropBox on the same system.
Link: https://groups.google.com/forum/?fromgroups=#!topic/nodejs/LX7sz9f-fmY

## Create a mission
TODO - [See also...](https://github.com/jplusplus/desdonneespourlautisme)

## Licence
Copryright © [Journalism++](http://jplusplus.org) - All rights reserved