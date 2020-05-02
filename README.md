# Welcome to SmartIce

[![NODE](https://img.shields.io/badge/Node-12-brightgreen?style=flat-square)](https://nodejs.org/dist/latest-v12.x/docs/api/)
[![NPM](https://img.shields.io/badge/NPM-6-critical?styles=flat-square)](https://docs.npmjs.com/)
[![EXPRESS](https://img.shields.io/badge/Express-4.17-lightgrey?style=flat-square)](https://expressjs.com/en/starter/installing.html)
[![ANGULAR](https://img.shields.io/badge/Angular-8-red?style=flat-square)](https://angular.io/docs)
[![IONIC](https://img.shields.io/badge/Ionic-5-blue?style=flat-square)](https://ionicframework.com/docs/components)
[![ARDUINO](https://img.shields.io/badge/Arduino-1.8-green?styles=flat-square)](https://www.arduino.cc/reference/en/#functions)

## Installation
> Be in the root folder of the application

```bash
 npm install
 ionic serve --host=0.0.0.0  --port=8100
```
After that, open http://localhost:8100 in browser.

> To Emulate in Android Studio or Generate APK

* Configuration
    - Install grade <https://gradle.org/install/>
    - Android Studio <https://developer.android.com/studio>
    - Configured SDK Manager
    - Configured AVD Manager
    - Set ANDROID_HOME and gradle enviroment variables
        -export ANDROID_HOME=/<directory>/Android/Sdk
        -export PATH=$PATH:/opt/gradle/<gradle-version>/bin

* Emulate in Android Studio
```bash
    ionic cordova build android 
```
* Generate APK
```bash
    ionic cordova emulate android
```

> Heroku app URL
https://stark-taiga-93289.herokuapp.com/