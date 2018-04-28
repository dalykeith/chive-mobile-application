# Chive Mobile Application - Front End

This project is a hybrid mobile application for both iOS and Android devices developed with Ionic 3 and the MEAN Stack. The app is a recipe book which allows users to store their recipes safely on their devices.

## Introduction
**Chive** is the end of year project developed by myself and [Keith Daly](https://github.com/dalykeith) for our third year of Software Development in GMIT. The app itself is a recipe collection app. The aim of this project was to use knowledge collected over our last three years in college and apply it to learning a suite of new technologies. Primarly the *MEAN stack*, comprised of **MongoDB, Express.js, Angular.js** and **Node.js**. There are two parts to **Chive**, the frontend mobile application developed in *Ionic* and the backend with a common *RESTful API*.


## Prerequisites 

*Assumes that NodeJS is installed on your system*

**Download NodeJS:**

https://nodejs.org/en/download/


## How to Run The Program

**1. Install the Ionic CLI and Cordova**
```bash
$ npm install -g ionic cordova
```

**2. Clone the Repository**
```bash
$ git clone https://github.com/mattshiel/chive-mobile-application.git
```
**3. Navigate into the Project Folder**

```bash
$ cd chive-mobile-application
```

**4. Install Packages**

```bash
$ npm install
```

**5. Serve the Application**

```bash
$ ionic serve
```
<br>
<br>
alternatively
<br>
<br>

**1. Ionic View**
```bash
If you own an Android device, navigate to the Google Play Store and download the Ionic View app.
```

**2. Run The App**
```bash
Enter in the app code 82d08f4d to preview Chive
```


**Note:**
> The backend and database are both hosted on Heroku, there is no need to run it locally. 
  
Previous users of Ionic may be wondering why we only mentioned Ionic View with Android.

Ionic View was recently **removed** from the App Store - here's why:

https://blog.ionicframework.com/update-on-ionic-view-for-ios/

---

[Video Demonstration](https://youtu.be/BlfHFeUla3U) of the App running on a mobile device and in browser

---

## Planning

When deciding which technologies to use for the frontend we were faced with two main decisions:

**C# and Xamarin:**

https://www.xamarin.com/

or 

**Ionic 3 and Angular**

https://ionicframework.com/

Ultimately we decided on Ionic, this made more sense as we both had prior experience developing with Ionic. Additionally Ionic 3 uses Angular 5, this ended up being a fantastic combination with the MEAN stack.


Weeks 1-3 were primarily spent on gathering data, creating a rough skeleton of our project and learning as much about these new technologies as we could. More about this can be found in the design document.

Weeks 4-5 involved designing and creating the backend of our app, then connecting it to the frontend locally.

Week 6 took our backend from our computers to being hosted on Heroku. Time was also spent learning about how to get the MongoDB on there. Ultimately we opted for a technology called MLab and managed to deployed it onto Heroku alongside the server and API.

Weeks 7~ In the final weeks of developing our application we worked on establishing a solid user interface for adding recipes.


