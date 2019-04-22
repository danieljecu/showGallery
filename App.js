import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';

import Grid from './components/Grid'
import ModalExample from './components/ModalExample'

import LotsOfGreetings from './components/Lotsofgreetings';

export default class App extends Component {
    render() {
        return (

            <ScrollView style={{marginTop: 22}}>
               
            <LotsOfGreetings   images=  {[
                    {id: 'a', value: 'A', uri: "https://facebook.github.io/react-native/img/favicon.png", dimensions:{ width: 64, height: 64}},
                    {id: 'b', value: 'B', uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg",
                        dimensions: { width: 1080, height: 1920 } },
                    {id: 'c', value: 'C', uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg",
                        dimensions: { width: 1080, height: 1920 } },
                    {id: 'd', value: 'D', uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg",
                        dimensions: { width: 1080, height: 1920 } },
                
                    {id: 'e', value: 'E', uri:"https://www.shoutmeloud.com/wp-content/uploads/2013/01/Free-stock-image.jpg",dimensions: { width: 1080, height: 1920 }},
                    {id: 'f', value: 'F', uri:"https://www.shoutmeloud.com/wp-content/uploads/2013/01/Free-stock-image.jpg",dimensions: { width: 1080, height: 1920 }},

                    {id: 'g', value: 'G', uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg",
                    dimensions: { width: 1080, height: 1920 } },
                {id: 'h', value: 'H', uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg",
                    dimensions: { width: 1080, height: 1920 } },
                {id: 'i', value: 'I', uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg",
                    dimensions: { width: 1080, height: 1920 } },
                {id: 'j', value: 'J', uri: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg",
                    dimensions: { width: 1920, height: 1080 } },
                ]}
            
                />

                {/* <Grid/>
                <ModalExample/> */}
                        
            </ScrollView>
     
        
        );
    }

}