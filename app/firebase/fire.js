import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD8tzAvTAYOe3LVTdttpMplaicqpey4JEg",
    authDomain: "app-billetera-eb114.firebaseapp.com",
    projectId: "app-billetera-eb114",
    storageBucket: "app-billetera-eb114.appspot.com",
    messagingSenderId: "815769878124",
    appId: "1:815769878124:web:66115c34897ceda39d2249"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;