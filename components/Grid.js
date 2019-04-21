import React, {Component} from 'react';
import {AppRegistry, ScrollView, FlatList, View, Dimensions, StyleSheet, Image, ImageBackground, TouchableOpacity,Text} from 'react-native';


export class Row extends Component {
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
            {id: 'a', value: 'A', uri:"https://www.shoutmeloud.com/wp-content/uploads/2013/01/Free-stock-image.jpg"},
            {id: 'b', value: 'B', uri:"https://www.shoutmeloud.com/wp-content/uploads/2013/01/Free-stock-image.jpg"},
            {id: 'c', value: 'C', uri:"https://www.shoutmeloud.com/wp-content/uploads/2013/01/Free-stock-image.jpg"},
            {id: 'd', value: 'D', uri:"https://www.shoutmeloud.com/wp-content/uploads/2013/01/Free-stock-image.jpg"},
            {id: 'e', value: 'E', uri:"https://www.shoutmeloud.com/wp-content/uploads/2013/01/Free-stock-image.jpg"},
            {id: 'f', value: 'F', uri:"https://www.shoutmeloud.com/wp-content/uploads/2013/01/Free-stock-image.jpg"},
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
        );

    }
}

export default class Grid extends Component {
    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <Row/>
                <Row/>
            </ScrollView>
        );
    }
}

// skip these lines if using Create React Native App
AppRegistry.registerComponent(
    'AwesomeProject',
    () => Grid);