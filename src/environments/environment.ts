// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {
  apiKey: "AIzaSyDvD-kR9t8CwVD5xz7z8zPf50OimMvNTPo",
  authDomain: "panic-button-database.firebaseapp.com",
  databaseURL: "https://panic-button-database-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "panic-button-database",
  storageBucket: "panic-button-database.firebasestorage.app",
  messagingSenderId: "447258507352",
  appId: "1:447258507352:web:46549677f9bef2caffb22d",
  measurementId: "G-DGWXF2M8P9"
};

export const environment = {
  production: false,
  firebaseConfig :firebaseConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
