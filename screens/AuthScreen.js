import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { Google } from 'expo';
import firebase from 'firebase';

import { Spinner } from '../components/common';
import LoginForm from '../components/LoginForm';

class AuthScreen extends Component {

    static navigationOptions = ({ navigate, navigation }) => ({
        title: "Auth",
        headerRight: <Button title="Sign Up" onPress={()=>{ navigation.navigate('SignUp'); }} />,
    });

    state = {
        signedIn: null,
        token: null,
        user: "",
    };

    componentDidMount() {
      this.checkFirebaseForExistingUser();
      this.checkGoogleForExistingUser();
    }


    checkFirebaseForExistingUser = () => {
      firebase.initializeApp({
        apiKey: "AIzaSyCi7OUzr9XSWi1FcfHI9rnQpy8aP1pOKls",
        authDomain: "nativepractice-14da2.firebaseapp.com",
        databaseURL: "https://nativepractice-14da2.firebaseio.com",
        projectId: "nativepractice-14da2",
        storageBucket: "nativepractice-14da2.appspot.com",
        messagingSenderId: "887866020556"
      });

      //DEV: comment out next line if you DO want Firebase user to be remembered via email/password login
      //firebase.auth().signOut();

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ signedIn: true });
        } else {
          this.setState({ signedIn: false });
        }
      });
    }

    checkGoogleForExistingUser = async () => {
      //DEV: comment out next few lines if you DON'T want google user to be remembered
      /*let token = await AsyncStorage.getItem('google_token');

      if (token) {
          this.setState({ signedIn: true });
      } else {
          this.setState({ signedIn: false });
      }*/
    }

    componentDidUpdate() {
        if (this.state.signedIn) {
            this.props.navigation.navigate('Senators');
        }
    }

    googleLogin = async () => {
        const clientId = '286548125503-s20coba1rtdbm90rgu87ctg98oj83tst.apps.googleusercontent.com';
        const { type, accessToken, user } = await Google.logInAsync({ clientId });

        if (type === 'success') {
            /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
            //console.log(user);
            //console.log(accessToken);

            await AsyncStorage.setItem('google_token', accessToken);

            this.setState({
                signedIn: true,
                token: accessToken,
                user: user

            })

        }

    }

    renderLoginForm() {
        switch (this.state.signedIn) {
            case true:
                return (<View></View>);
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
              <Button title="Sign in with Google" onPress={this.googleLogin}/>

              <Text> Or </Text>

              <View>
                <Text>Login with Email</Text>
                {this.renderLoginForm()}
              </View>

            </View>
        );
    }
}

export default AuthScreen;

