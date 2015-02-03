# Mobile Applicant Portal

This repo contains the mobile applicant portal client application.  This application is a hybrid HTML5, CSS, Javascript application that can be deployed as a native device app.  The application is built with [AngularJS](https://angularjs.org/) and the [Ionic Framework](ionicframework.com), but requires [Apache Cordova](http://cordova.apache.org/) for native app creation.

At present, this application needs only to be cloned and then served up locally to run once all the dependencies are installed.

## Install Dependencies

NOTE: you may need to run the following commands as ```sudo``` if they fail with permission issues.

* Install the latest version of [NodeJS](http://nodejs.org/) in order to have access to its package manager.
* Use npm to install necessary packages using the command below:
```bash
npm install -g cordova ionic karma karma-cli gulp bower ios-deploy
```
* Use bower to install the angular-data plugin using the command below:
```bash
bower install angular-cache --save-dev
```
* Set up for testing with Karma using the command below:
```bash
npm install --save-dev karma karma-mocha karma-chai karma-phantomjs-launcher
```

## Running the App

Running the app (for now) is easy.  Run the commands below from within the application directory:

```bash
ionic serve
```

You should then see a browser window opened up to localhost:8100 with the app running.  For best results, install [Chrome Canary](https://www.google.com/chrome/browser/canary.html) and use the device emulation features within the Developer Tools.

## Creating Native Apps

You will need the following:

* Download the standalone [Android SDK tools](https://developer.android.com/sdk/installing/index.html)
* Download and install [Xcode](https://developer.apple.com/xcode/downloads/).

For iOS apps, you'll have to join the [Apple iOS Developer Program](https://developer.apple.com/programs/ios/) and manage your provisioning certificates.

To create an app to a provisioned device, simply hook it up to your computer with a USB cable and then run:

```bash
ionic run ios
```
