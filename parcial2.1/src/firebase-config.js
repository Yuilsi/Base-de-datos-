/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
    apiKey: "AIzaSyCRgRTs5qdZTHS3rXqK8KgcXrJqTAihcq4",
    authDomain: "parcial2-559c9.firebaseapp.com",
    databaseURL: "https://parcial2-559c9-default-rtdb.firebaseio.com",
    projectId: "parcial2-559c9",
    storageBucket: "parcial2-559c9.appspot.com",
    messagingSenderId: "159773221466",
    appId: "1:159773221466:web:cfcad9f1c5fcfa91beee63",
    measurementId: "G-7582XK2HQS"
};

export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
        throw new Error('No Firebase configuration object provided.' + '\n' +
            'Add your web app\'s configuration object to firebase-config.js');
    } else {
        return config;
    }
}