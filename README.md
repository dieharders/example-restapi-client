# Angular6 Web Client

![Preview](https://github.com/dieharders/example-restapi-client/blob/master/preview-1.png)

## Live demo: https://example-restapi-client.firebaseapp.com/
This is an example of a front-end (Angular6) communicating with a back-end API to retrieve data locally stored on the back-end server. This data holds directory information on superheroes that can be edited or added to by the web client. Please treat this information with care! This is confidential information of Superheroes' real names and hobbies.

## 2-Part Project
This project works with another back-end project [example-restapi-server](https://github.com/dieharders/example-restapi-server)

## Angular Version

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project for development. The static files will be stored in the `dist/` directory.
Run `ng build --prod` for a production build.

## Live Deployment (Heroku)

This project is already setup for deployment to Heroku.
(Optional) You may choose to set an ENV variable for the host provider's (Heroku) port in `server.js`.

*Note, it is not necessary to `ng build --prod` your app since the `postinstall` script in `package.json` will tell Heroku to do this automatically upon each deployment to Heroku `git push heroku master`.

## Live Deployment (Firebase)

If you would like to instead deploy to Firebase Hosting, do the following...
- Build your app `ng build --prod` while in the root dir. This will create a `/dist/<your-app-name>` folder.
- Be sure to install the Firebase CLI if not already with `npm install -g firebase-tools`.
- Then login to Firebase with `firebase login`.
- Do `firebase init` in the top level directory of the angular app.
- Stick with default settings except for the following...
- Choose Firebase Hosting when asked to initialize features for the project.
- When asked to set the public directory, set it to `dist/<your-app-name>`. The app name must now be specified for Angular 6+ apps, otherwise use `dist`.
- Choose to configure as single-page app, yes.
- If asked to overwrite index.html, no.
