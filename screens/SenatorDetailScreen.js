import React, { Component } from 'react';
import { Text, View  } from 'react-native';


class SenatorDetailScreen extends Component {

  static navigationOptions = () => ({
    title: "Senator Details",
  });

  render() {

    const { navigation } = this.props;
    const firstName = navigation.getParam('firstName', '');
    const lastName = navigation.getParam('lastName', '');
    const bday = navigation.getParam('senatorBday', 'no bday listed');
    const link = navigation.getParam('link', 'no link available');

    return (

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>


        <Text>Details Screen</Text>

        <Text>{firstName}</Text>
        <Text>{lastName}</Text>
        <Text>Birthday: {bday}</Text>
        <Text>{link}</Text>


        {/*
        Other Option (if you just passed in { senator: senator } as second arg to navigate function in openDetails of SenatorsListScreen):
        <Text>{this.props.navigation.state.params.senator.firstname}</Text>
        <Text>{this.props.navigation.state.params.senator.lastname}</Text>
        <Text>{this.props.navigation.state.params.senator.birthday}</Text>
        <Text>{this.props.navigation.state.params.senator.link}</Text>*/}
      </View>
    );
  }
}

export default SenatorDetailScreen;