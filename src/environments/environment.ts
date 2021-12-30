// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'https://identitytoolkit.googleapis.com/v1/',
  registerUrl: 'accounts:signUp?key=',
  loginUrl: 'accounts:signInWithPassword?key=',
  API_KEY: 'AIzaSyDR121oGzffqrz-S-KyTMihEObF1a2f1E8',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
