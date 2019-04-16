import React, { Component } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';



class Gallery extends Component {

render(){
  return(
<>
    {this.props.images.forEach(element => {
      var obj= {uri: element, width: 1200, height: 1200};
      return <Text>dsadsadsada</Text>//<Image source={obj} />
    })}
  </>);
}
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Gallery images = {this.props.images} />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);
