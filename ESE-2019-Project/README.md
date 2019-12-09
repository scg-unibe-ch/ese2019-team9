# ESE-Project 2019

Here you will find the installation process of all required packages, programs and frameworks and a guide on how to get the application ruuning for the first time.

# Installation 

### Initial Installation

- Install both [Node.js] and NPM. (NPM is installed automatically with latest versions of Node.js)
- Install [Angular CLI] globally on your computer.
- Clone this repository to your local machine and delete the .git folder.


### Backend setup

Navigate to the backend folder and run `npm install`. Note that you need to change endpoints in the frontend services from [themoln.herokuapp.com] to the localhost, where the server runs. You'll find a more detailed how-to in the [Frontend README]
 ```sh
 $ cd backend/
 $ npm install
 ```

 ### Frontend setup

 Navigate to the frontend folder, run `npm install` and install [Compodoc]
 ```sh
 $ cd backend/
 $ npm install
 $ npm i -g @compodoc/compodoc
 ```

 ### Run your application

Now that everything is installed, it's time to run the page on your local machine.
First, navigate to the backend folder to compile the TypeScript code to JavaScript. Then start the backend server.

```sh
$ cd backend
$ npm run tsc
$ node build/server.js
```

Second, navigate to the frontend folder to start a dev server.

```sh
$ cd frontend
$ ng serve
```

You can now visit the page in your local browser using the following URL: `http://localhost:4200/`


[Node.js]: <https://nodejs.org/en/>
[Angular CLI]: <https://cli.angular.io/>
[themoln.herokuapp.com]: <themoln.herokuapp.com>
[Frontend README]: <./frontend/README.md>
[Compodoc]: <https://compodoc.app/>