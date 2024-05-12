import { boot } from "quasar/wrappers";

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"; // eslint-disable-line

const firebaseConfig = {
    apiKey: "AIzaSyA8FCjPdMZB2qjAvC4_bVUKtv4Qty1Y3CQ",
    authDomain: "exxenklon.firebaseapp.com",
    projectId: "exxenklon",
    storageBucket: "exxenklon.appspot.com",
    messagingSenderId: "691146027480",
    appId: "1:691146027480:web:88e734a8e1955cd8e442ad",
    measurementId: "G-HPF82P655T"
};

const fapp = initializeApp(firebaseConfig);

const db = getFirestore(fapp);

export default boot(async ({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$db = db;
  // ^ ^ ^ this will allow you to use this.$db (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$Firebaseapp = fapp;
  // ^ ^ ^ this will allow you to use this.$Firebaseapp (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});
export { fapp };
