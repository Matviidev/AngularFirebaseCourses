// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  useEmulators: true,
  firebase: {
    apiKey: "AIzaSyANP_JZva28wdv_6QaH2ETDt7etnoghgp8",
    authDomain: "fir-course-b595a.firebaseapp.com",
    projectId: "fir-course-b595a",
    storageBucket: "fir-course-b595a.firebasestorage.app",
    messagingSenderId: "601250983688",
    appId: "1:601250983688:web:cba12b71a85d9ca1edc6bd",
  },
  api: {},
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import "zone.js/plugins/zone-error"; // Included with Angular CLI.
