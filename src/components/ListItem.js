import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ListItem extends Component {
    render() {
        console.log( this.props.library.item.title );

        return(
            <View>
                <Text>{this.props.library.item.title}</Text>
            </View>
        )
    }
}

export default ListItem;