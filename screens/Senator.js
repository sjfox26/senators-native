import React, { Component } from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import Button from '../components/Button';

class Senator extends Component {

  render() {
    return (
      <TouchableOpacity onPress={() => { this.props.openDetails(this.props)} }>
        <View style={styles.flatview}>
          <Text style={styles.name}>{this.props.lastname}</Text>
          <Text style={styles.bday}>{this.props.birthday}</Text>
          <Button onPress={() => Linking.openURL(this.props.link)}>
            Visit website!
          </Button>
          </View>
      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
  flatview: {
    width: '92%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    flex: 1,
    fontSize: 18
  },
  bday: {
    flex: 1,
    color: 'red'
  }

});

export default Senator;