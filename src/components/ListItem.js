import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import * as actions from "../actions";
import { connect } from "react-redux";

class ListItem extends Component {
  render() {
    console.log(this.props);
    const { id, title } = this.props.library.item;

    return (
      <TouchableWithoutFeedback onPress={ () => this.props.selectLibrary(id)}>
        <View>
          <Text>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default connect(null, actions)(ListItem);
