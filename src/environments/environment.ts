// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDTOZGsjYrP2c3nYNNVJzgYxhHRU9TjOHs",
    authDomain: "searchimages-ac3c9.firebaseapp.com",
    databaseURL: "https://searchimages-ac3c9-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "searchimages-ac3c9",
    storageBucket: "searchimages-ac3c9.appspot.com",
    messagingSenderId: "3125304105",
    appId: "1:3125304105:web:84361f223d614a5078b538",
    measurementId: "G-SXN04C6S88"
  }

  // api: 'https://www.flickr.com/services/rest/?method=flickr.photos.search&',
  // key: '3dc048ec502c7ab65ec70b90d2442d73',
  // dataBase: 'https://searchimages-ac3c9-default-rtdb.europe-west1.firebasedatabase.app/photos'
  // secret: '40c50bde815bc6ac'
};

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
