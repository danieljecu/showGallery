import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

import Grid from './components/Grid'
import ModalExample from './components/ModalExample'
import AssetExample from './components/AssetExample';
import LotsOfGreetings from './components/Lotsofgreetings';

export default class App extends Component {
  render() {
    return (
      
      <ScrollView>
      <Grid>
      </Grid>

     
      {/* <AssetExample></AssetExample> */}

      <ModalExample ></ModalExample>

      <LotsOfGreetings 
      images= {["https://facebook.github.io/react-native/img/favicon.png","https://facebook.github.io/react-native/img/favicon.png"]}>
      
      </LotsOfGreetings>
      
  </ScrollView>
  

      );}

}

