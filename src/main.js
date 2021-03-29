// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase/app'

Vue.config.productionTip = false

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDhTKErAWOxKraShU7PI6DYEBEgMsVM6vA",
    authDomain: "vuexslack-4cdab.firebaseapp.com",
    projectId: "vuexslack-4cdab",
    storageBucket: "vuexslack-4cdab.appspot.com",
    messagingSenderId: "464820119468",
    appId: "1:464820119468:web:d156f0ba0f0a5ba528bc09",
    measurementId: "G-V6MWKDHGRY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  window.firebase = firebase

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
