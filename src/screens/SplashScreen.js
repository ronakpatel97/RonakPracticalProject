import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const SplashScreen = ({navigation }) => {

  useEffect(() => {
    /* 
    @Description : call setTimeout to navigation after sometime 
    (insted of setTimout we also wait for API Response if any api calling)
    @Params : NA
    @Author : Ronak Patel
    @Date : 19 Feb 2022
    */
    setTimeout(
      () => {
        navigation.navigate('Home');
      },
      2000
    )

  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" hidden={false} backgroundColor="#004c8c" translucent={false} />
      <Text style={styles.titleText}>Happy Shopping </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004c8c',
    justifyContent: 'center',
  },
  titleText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
  }
});

export default SplashScreen;