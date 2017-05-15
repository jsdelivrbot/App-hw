import React, { Component } from 'react';
import * as firebase from 'firebase';
import { LoginStack } from './Router';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDX2pGnJahECgy6osASpTbOQxUwx_VkXSg",
      authDomain: "appdb-4b441.firebaseapp.com",
      databaseURL: "https://appdb-4b441.firebaseio.com",
      projectId: "appdb-4b441",
      storageBucket: "appdb-4b441.appspot.com",
      messagingSenderId: "795498192365"
    });
  }

  render() {
    return (
      <LoginStack />
    );
  }
}


export default App;
