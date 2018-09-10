import React from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    callData: [],
  };

  componentDidMount () {
    axios
      .get (
        'https://data.cityofnewyork.us/api/views/kku6-nxdu/rows.json?accessType=DOWNLOAD'
      )
      .then (res => {
        const callData = res.data.data;
        console.log (callData);
        this.setState ({callData});
      });
  }

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.callData}
          renderItem={({item}) => <Text>{item}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
