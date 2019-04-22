import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, ScrollView, StyleSheet } from 'react-native';
import {FlatList, Dimensions, ImageBackground } from 'react-native';

import {Modal,  TouchableHighlight,  Alert} from 'react-native';
import GallerySwiper from "react-native-gallery-swiper";

export default class LotsOfGreetings extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0, modalVisible: false }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }
 
 render(){

        
        const data = this.props.images
        const numColumns = 3;
        const size = Dimensions.get("window").width / numColumns;
        const styles = StyleSheet.create({
            itemContainer: {
                width: size,
                height: size,
            },
            item: {
                flex: 1,
                margin: 3,
            }

        });


        return (
           
            <ScrollView style={{flex: 1}}> 

            <FlatList
                data={data}
                state={this.state}
                extraData={this.state}
                
                renderItem={({item}) => (
                  
                  <>
                  <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                      Alert.alert('Modal has been closed.');
                    }}>
                    
                      <ScrollView style={{}} >
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
                    dimensions: { width: 1080, height: 1920 } },
  
            ]}
            // Change this to render how many items before it.
            initialNumToRender={1}
            initialPage={1}

           
                sensitiveScroll={false} /> 
                      <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                    

                    </ScrollView>

                    </Modal>
                    
                  <TouchableHighlight
                    style={styles.button}
                    
                    onPress={this.onPress}

                    onPress={() => {
                      this.setModalVisible(true);
                    }}
                    >
                    <> 
                    <View style={[styles.itemContainer]}>
                        <ImageBackground style={styles.item} source={{uri:item.uri}}/>
                    </View>

                    <Text >{ this.state.count !== 0 ? this.state.count: null } </Text>

                  
                    <Text>Set modal visible + {this.state.modalVisible}</Text>
                    </>
                  </TouchableHighlight>
                    </>
                )}
                
                //selected={!!this.state.selected.get(item.id)}
                keyExtractor={item => item.id}
                numColumns={numColumns}
              />

        

            </ScrollView>
      
        );

      }
  }
    

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);
