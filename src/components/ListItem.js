import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import * as actions from "../actions";
import { connect } from "react-redux";

class ListItem extends Component {
  renderDescription() {
    const { id, description } = this.props.library.item;

    if( this.props.expanded ){
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

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryID === ownProps.library.item.id

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
