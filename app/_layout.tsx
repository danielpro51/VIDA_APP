import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Routes from './src/components/routes';

export default function Main(){
  return(
    <View style={styles.container}>
      <Routes />
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});