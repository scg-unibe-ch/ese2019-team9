## Initial Setup

1. Install [Node.js](https://nodejs.org/en/) (must be done already, as it is a part of prerequisite!)
1. `cd` into this frontend folder with your terminal or command prompt
1. Run `npm install` which will install all the required dependencies
1. When successful, run `ionic serve` - this will open the application in your default web browser. The app will automatically reload if you change any of the source files.
1. Alternatively, you can run `ionic serve --lab` for a mobile view of your app. The app will automatically reload if you change any of the source files.

This project is generated with [Ionic CLI](https://ionicframework.com) version 4. Refere their website for commands to generate components, services, pipes easily.


## Further development 

The inline code documentation should be enough to help you get started.
Take a look at [the Ionic documentations](https://ionicframework.com/docs/) on how to create new components, services etc. pp.

## Build

To build the mobile app follow the getting started tutorial on [Capacitor for Ionic](https://capacitor.ionicframework.com/docs/getting-started/). You can then build the app with
```sh 
ionic capacitor run <android/ios>
```

To build the website, build it with ionic and copy the files on to a webserver that serves the files
To build the website run
```sh
$ ionic build
```
## Documentation
If you want to compile the newest documentation of the project run
```sh
$ npm run compodoc 
```
in the front end folder. Then a new window should be opened in the browser with the compodoc documentation.
After running the `npm run compodoc` command the first time you should have a `documentation` folder in the frontend folder. If you don't want to recompile the documentation yyou can open the `index.html` file from the `documentation` folder with your favorite browser.

## Change the endpoints to a localhost server

The frontend tries to connect to a [live server](themoln.herokuapp.com) per default. If you want it to connect to the localhost you have to change the
`apiBaseUrl` or the `endpoint` variables which are found on top of each of the services in `/src/app/core/services` to the new url. 
For example change 
```js
  apiBaseUrl = 'https://moln-api.herokuapp.com/user';
```
to 
```js
  apiBaseUrl = 'localhost:3000/user';
```