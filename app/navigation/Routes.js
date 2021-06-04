import React,{useContext, useState, Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firebase from 'firebase';
import {AuthContext} from './AuthProvider';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

class Routes extends Component{

    state={
        loggedIn:null
    }
    // const {user, setUser} = useContext(AuthContext);
    // const [initializing, setInitializing] = useState(true);

    // const onAuthStateChanged = (user) => {
    //     setUser(user);
    //     if (initializing) setInitializing(false);
    // };

    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     return subscriber; // unsubscribe on unmount
    // }, []);

    // if (initializing) return null;
    componentDidMount(){
        var firebaseConfig = {
            apiKey: "AIzaSyCId3Iw-iFMcmK3FvrE2s_GKeyHDaTBYUQ",
            authDomain: "appbilletera-81db2.firebaseapp.com",
            projectId: "appbilletera-81db2",
            storageBucket: "appbilletera-81db2.appspot.com",
            messagingSenderId: "1065970794393",
            appId: "1:1065970794393:web:6ce31d30481d0a403e9d08",
            measurementId: "G-RV47Y2T7EL"
        };
          // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        //firebase.analytics();
        
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.setState({
                    loggedIn:true
                })
            }else{
                this.setState({
                    loggedIn:false
                })
            }
        })
    }
    render() {
        return (
            <NavigationContainer>
            {this.state.loggedIn ? <AppStack/> : <AuthStack/>}
            </NavigationContainer>
        );
    }
}

export default Routes;