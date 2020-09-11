This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# [Click Here for Demo](https://challenge-27088.web.app)

## Available Scripts

In the project directory, you have to run both frontend and backend:

## Run below command for running frontend

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Run below command for running backend

### `firebase emulators:start`

After this you will get a backend URL like this `http://localhost:5001/challenge-27088/us-central1/api`

## Firebase pre-requisite

Add your own firebase.js file in src directory with your own unique keys export auth and firestore from here 

### `npm install -g firebase-tools`

Install firebase-tools globally to access your firebase projects

### `firebase login`

You will see a popup from firebase, and login with your credentials

## Backend configuration pre-requisite

### `firebase init`

Select functions -> JavaScript click Enter

## Follow below process to deploy backend

### `firebase deploy --only functions`

Running this command will return an URL of deployed backend app in firebase
**Note: You might get errror while running this, you have to switch from `Firebase Spark to Firebase Blaze`**

## Follow below process to deploy frontend

### `firebase init`

Select Hosting click Enter

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `firebase deploy`

This will return an https url of the deployed application

### `firebase deploy --only hosting`

If application was deployed once, only change the hosting than starting the deploymet from scratch

## Overview:

This application is Amazon clone with many more functionality on the way coming up. At present the application has a integration with Stripe payment gateway for database we are using Firebase for authentication and data store. 
product.json has a list of category wise product you can find detailed products and unique routings mentioned for all products.

### Dummy Card Details:

`Card No - 4242 4242 4242 4242`
`Expiry - 04/24`
`CVV - 242`
`ZIP - 42424`