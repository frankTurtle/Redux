import React, { Component } from "react";
import { View, Text } from "react-native";
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component {
  render() {
    console.log(this.props);

    return (
      <View>
        <Text>{this.props.library.item.title}</Text>
      </View>
    );
  }
}

export default connect( null, actions)(ListItem);
