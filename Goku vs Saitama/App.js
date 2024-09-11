import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

// Code example by Dr. Fuentes; May 21, 2023

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={{ uri: 'https://hdqwalls.com/wallpapers/son-goku-dragon-ball-super-12k-qe.jpg' }}
            style={styles.image}
          />
          <Text style={styles.text}>Son Goku  vs  Saitama</Text>
        </View>

        <View style={styles.container}>
          <Image
            source={{ uri: 'https://vignette.wikia.nocookie.net/legendsofthemultiuniverse/images/0/07/Saitama_serious_profile.png/revision/latest?cb=20170121004535' }} // Replace with your own image URL
            style={styles.image}
          />
          <Text style={styles.text}></Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});