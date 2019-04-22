import React, {Component} from 'react';
import {Modal, Image,ScrollView,Text, TouchableHighlight, View, Alert} from 'react-native';

import { StyleSheet } from 'react-native';
import GallerySwiper from "react-native-gallery-swiper";


export default class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22 , backgroundColor: 'blue'}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          
            <ScrollView style={{backgroundColor:'black'}} >
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>          
              <Text style={{flex:1}}> Press this bar to Hide Modal</Text>
              </TouchableHighlight>
              <GallerySwiper style={{flex:1}}
            images={[

              {uri: "https://facebook.github.io/react-native/img/favicon.png", dimensions:{ width: 64, height: 64}},
                { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg",
                    // Optional: Adding a dimensions or height and
                    // width field with the actual width and height
                    // for REMOTE IMAGES will help improve performance.
                    dimensions: { width: 1080, height: 1920 } },
                { uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg",
                    dimensions: { width: 1080, height: 1920 } },
                { uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg",
                    dimensions: { width: 1080, height: 1920 } },
            
            ]}
            // Change this to render how many items before it.
            initialNumToRender={1}

           
                sensitiveScroll={false} /> 

            </ScrollView>
      
        </Modal>


        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <>
          <Text>Set modal visible</Text>
           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
          </>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});