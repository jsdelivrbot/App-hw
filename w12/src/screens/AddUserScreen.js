import React, { Component } from 'react';
import { View, ActivityIndicator, AsyncStorage, Text, Image } from 'react-native';
import * as firebase from 'firebase';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { Facebook } from 'expo';

import Spinner from '../components/Spinner';

class AddUserScreen extends Component{
    state = {
        email : null,
        password : null,
        username : null,
        phone : null,
        city : null,
        gender : 'male',
        error : '',
        token: null,
        status: 'Not Login...',
        loading: false,
        showSpinner: false
    }
}

onSaveInfo = async () => {
    this.setState({ saving: true });
    const { currentUser } = firebase.auth();
    const { email, phone, username, city, gender } = this.state;
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    await dbUserid.set({ email, username, city, gender });
    this.setState({ saving: false });
  }

onCreateUser = async () => {
    const { email, password } = this.state;
    try {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
      showSpinner: true
    });
    const { email, phone, username, city, gender, birthday } = this.state;
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const { currentUser } = firebase.auth();
      let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
      await dbUserid.set({ email, phone, username, city, gender });
      this.setState({ showSpinner: false });
      this.props.navigation.navigate('UserStack');
    } catch (err) {
      this.setState({
        email: '',
        password: '',
        error: err.message,
        loading: false,
      });
    }
  }

renderButton() {
    if (this.state.saving) {
      return <ActivityIndicator size='large' />;
    }

    return (
      <Button
        style={{ marginTop: 10 }}
        title='Add User'
        onPress={this.onCreateUser}
      />
    );
  }

render() {
    console.log(this.state);
    return (
      <View style={styles.formStyle}>
        <FormLabel>Email</FormLabel>
        <FormInput
          placeholder='user@email.com'
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='email-address'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
            secureTextEntry
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
        />
        <FormLabel>Username</FormLabel>
        <FormInput
          autoCorrect={false}
          placeholder='John Doe'
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
        />
        <FormLabel>Phone</FormLabel>
        <FormInput
          autoCorrect={false}
          placeholder='555-555-5555'
          value={this.state.phone}
          onChangeText={phone => this.setState({ phone })}
        />
        <FormLabel>City</FormLabel>
        <FormInput
          autoCorrect={false}
          placeholder='Taipei city'
          value={this.state.city}
          onChangeText={city => this.setState({ city })}
        />
        <Picker
          selectedValue={this.state.gender}
          onValueChange={gender => this.setState({ gender })}
        >
          <Picker.Item label="Mail" value="mail" />
          <Picker.Item label="Femail" value="femail" />
        </Picker>
        {this.renderButton()}
      </View>
    );
  }
}

const styles = {
  formStyle: {
    marginTop: 50
  }
};

export default AddUserScreen;