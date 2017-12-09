import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import * as actions from "../actions";
import { connect } from "react-redux";

class ListItem extends Component {
  renderDescription() {
    const { id, description } = this.props.library.item;

    if( id === this.props.selectedLibraryID ){
      return(
        <Text>{description}</Text>
      );
    }
  }

  render() {
    const { id, title } = this.props.library.item;

    return (
      <TouchableWithoutFeedback onPress={ () => this.props.selectLibrary(id)}>
        <View>
          <Text>{title}</Text>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => {
  return { selectedLibraryID: state.selectedLibraryID };
};

export default connect(mapStateToProps, actions)(ListItem);
