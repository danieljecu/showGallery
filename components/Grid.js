import React, {Component} from 'react';
import {AppRegistry, ScrollView, FlatList, View, Dimensions, StyleSheet, Image, ImageBackground, TouchableOpacity,Text} from 'react-native';

class ModalExample extends Component {
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

export default class Grid extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
      }

      onPress = () => {
        this.setState({
          count: this.state.count+1
        })
      }
    render() {

        const data = [
            {id: 'a', value: 'A', uri: "https://facebook.github.io/react-native/img/favicon.png", dimensions:{ width: 64, height: 64}},
            {id: 'b', value: 'B', uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg",
                dimensions: { width: 1080, height: 1920 } },
            {id: 'c', value: 'C', uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg",
                dimensions: { width: 1080, height: 1920 } },
            {id: 'd', value: 'D', uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg",
                dimensions: { width: 1080, height: 1920 } },
        
            {id: 'e', value: 'E', uri:"https://www.shoutmeloud.com/wp-content/uploads/2013/01/Free-stock-image.jpg",dimensions: { width: 1080, height: 1920 }},
            {id: 'f', value: 'F', uri:"https://www.shoutmeloud.com/wp-content/uploads/2013/01/Free-stock-image.jpg",dimensions: { width: 1080, height: 1920 }},
        ];
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
                renderItem={({item}) => (
                    
                    
                    <TouchableOpacity
                            style={styles.button}
                            onPress={this.onPress}
                        >
                    
                    <View style={[styles.itemContainer]}>
                        <ImageBackground style={styles.item} source={{uri:item.uri}}/>
                    </View>

                    <Text >{ this.state.count !== 0 ? this.state.count: null } </Text>

                    </TouchableOpacity>
                    
                )}
                keyExtractor={item => item.id}
                numColumns={numColumns}/>

        <ModalExample images = {this.props.images}> </ModalExample>

        </ScrollView>

        );

    }
}

// skip these lines if using Create React Native App
AppRegistry.registerComponent(
    'AwesomeProject',
    () => Grid);