import firebase from "./fire";

export default class FirebaseUtil {
    signIn(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    };
    signUp(email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    };
    signOut() {
        return firebase.auth().signOut();
    };
}