import React from 'react';
import {
  StyleSheet
} from 'react-native';
import Header from './src/components/header';
import Routes from './src/components/routes';

export default function Main(){
  return(
    <>
      <Header />
      <Routes />
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});