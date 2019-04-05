import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

import SenatorDetailScreen from './SenatorDetailScreen';
import Senator from './Senator';

class SenatorsListScreen extends Component {
  static navigationOptions = {
    title: 'Senators List',
  };

  state = { senators: [], loading: true };

  componentDidMount() {
    axios.get('https://www.govtrack.us/api/v2/role?current=true&role_type=senator')
      .then(response => this.setState({ senators: response.data.objects, loading: false }));
  }

  openDetails = (senator) => {
    console.log('Open Details!');
    this.props.navigation.navigate('SenatorDetailScreen', { firstName: senator.firstname, lastName: senator.lastname, senatorBday: senator.birthday, link: senator.link });
  }

  render() {
    if (this.state.loading) {
      return (<Text>Loading your Senators...</Text>);
    }

    return (
      <View style={styles.container} >
        <Text style={styles.h2text}>
          U.S. Senators...
        </Text>
        <FlatList
          data={this.state.senators}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
            <Senator openDetails={this.openDetails} {...item.person} />
          }
          keyExtractor={item => item.person.bioguideid}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: "100%"
  },
  h2text: {
    marginTop: 10,
    fontSize: 36,
    fontWeight: 'bold',
  },

});

export default SenatorsListScreen;