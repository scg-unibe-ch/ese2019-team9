# ESE-Project 2019

## Initial Setup

1. Install [Node.js](https://nodejs.org/en/) (must be done already, as it is a part of prerequisite!)
1. `cd` into this backend folder with your shell (note: if you're on Windows, you can for example use [Git Bash](https://git-scm.com/download/win) as a shell)
1. run `npm install`
1. Change the constants defined in `nodemon.json` to constants that match your need (eg. Change fileserver, change JWT private key etc. pp.)
1. Run `npm run dev` to start the server. The command line output should say something like `listening at http://localhost:3000/`


## Adding a New Endpoint or Controller
To add a new endpoint that logically belongs to an existing controller, you simply have to add a new route to that controller in the controller file in the route folder for (for example `api/routes/category.js`) and the controller function (for example in `api/controllers/category`)

If you need to define a new controller, there are a few things you need to do:
1. create a new file `<mycontroller>.controller.ts` in the `api/controllers` folder. Check out an existing controller to see what to do in that file
1. go to the `app.js` file and require the new route and use the routes.
    ```js 
    const someNewRoute = require('./api/routes/<mycontroller>');
    app.use('/<path>', someNewRouter);
    ```

If you need to create a new middleware you should 
1. create it in the `/api/mware` folder. Take a look at an existing example to see what to do there
1. Add it into the route in the `api/routes/<desired route>`, where you want the middle-ware to be loaded first. For example
    ```js
    router.get('/', <newMiddleware>, Controller.handlerFunction);
    ```


## Tests 
To run our tests run the test script (The backend must be running for that process)
```sh
$ npm run test
```