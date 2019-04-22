import React, { Component } from 'react'
import {
  AppRegistry,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  FlatList, 
  Dimensions, 
  Modal,
  TouchableHighlight, Alert } from 'react-native';
  
import GallerySwiper from 'react-native-gallery-swiper';

export default class LotsOfGreetings extends Component {
  constructor(props) {
    super(props)
    this.state = { modalVisible: false, imageIndex: 0 }
  }

  setModalVisible = index => {
    index === 'exit'
      ? this.setState({ modalVisible: !this.state.modalVisible })
      : this.setState({
          modalVisible: !this.state.modalVisible,
          imageIndex: index,
        })
  }

  render() {
    const data = this.props.images
    const numColumns = 3
    const size = Dimensions.get('window').width / numColumns

    const styles = StyleSheet.create({
      itemContainer: {
        width: size,
        height: size,
      },
      textItemContainer: {
        position: 'absolute',
        display: 'flex',
        bottom: 0,
        color: 'white',
        right: size / 3,
      },
      item: {
        flex: 1,
        margin: 3,
      },
    })



    
    return (
      <>
        <ScrollView style={{ flex: 1 }}>
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <TouchableHighlight
                style={styles.button}
                onPress={() => this.setModalVisible(index)}
              >
                <View style={[styles.itemContainer]}>
                  <ImageBackground
                    style={[styles.item]}
                    source={{ uri: item.uri }}
                  />
                  <Text style={styles.textItemContainer}>Georgel</Text>
                </View>
              </TouchableHighlight>
            )}
            keyExtractor={item => item.id}
            numColumns={numColumns}
          />
        </ScrollView>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible('exit')}
        >
          <ScrollView style={{marginTop: 22}}>
            <TouchableHighlight onPress={() => this.setModalVisible('exit')}>
              <Text style={{ flex: 1 }}> Press this bar to Hide Modal</Text>
            </TouchableHighlight>
            <GallerySwiper
              style={{ flex: 1 }}
              images={data}
              initialNumToRender={9}
              initialPage={this.state.imageIndex}
              sensitiveScroll={false}
            />
            <Image
              source={{
                uri: 'https://facebook.github.io/react-native/img/favicon.png',
                width: 64,
                height: 64,
              }}
            />
          </ScrollView>
        </Modal>
      </>
    )
  }
}


//skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);