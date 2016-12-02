import React,{Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  ActivityIndicator,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Button extends Component{
  constructor(props){
    super(props);
  }

  renderChildren(){
    if(this.props.isLoading){
      return (
        <View style={styles.progress}>
          <ActivityIndicator animating={true} color={this.props.progressColor ? this.props.progressColor : '#fff'}/>
        </View>
      );
    }
    return (
      <View style={{justifyContent:'center',flexDirection:row}}>
        {this.props.iconLeft  ? <Icon size={24} name="rocket"/> : null}
        <Text style={this.props.textStyle ? this.props.textStyle : styles.defaultTextStyle}>
          {this.props.children}
        </Text>
        {this.props.iconRight  ? <Icon size={24} name="rocket"/> : null}
      </View>
    );
  }

  render(){
    const buttonStyle =  this.props.style ? this.props.style : styles.button;
    const round = this.props.round ? (this.props.radius  ? { borderRadius : this.props.radius} : styles.round ) : {};
    const disabled = this.props.disabled ? (this.props.disabledStyle ? this.props.disabledStyle : styles.disabled ) : {};
    const raised = this.props.raised ? styles.raised : {};
    let touchableProps = this.props.disabled || this.props.isLoading ? {} : {
      onPress: this.props.onPress,
      onPressIn: this.props.onPressIn,
      onPressOut: this.props.onPressOut,
      onLongPress: this.props.onLongPress
    };
    if(Platform.os === 'android'){
      touchableProps = Object.assign(touchableProps, {
        background: this.props.background || TouchableNativeFeedback.SelectableBackground()
      });
      return(
        <TouchableNativeFeedback {...touchableProps}
          style={[buttonStyle,round,disabled,raised]}>
          {this.renderChildren()}
        </TouchableNativeFeedback>
      );
    }
    return (
      <TouchableOpacity {...touchableProps}
        style={[buttonStyle,round,disabled,raised]}>
        {this.renderChildren()}
      </TouchableOpacity>
    );
  }

  static propTypes = {
    style : React.PropTypes.object,
    textStyle : React.PropTypes.object,
    iconStyle:  React.PropTypes.object,
    isLoading : React.PropTypes.bool,
    progressColor : React.PropTypes.string,
    round: React.PropTypes.bool,
    raised : React.PropTypes.bool,
    iconRight : React.PropTypes.bool,
    iconLeft : React.PropTypes.bool,
    icon : React.PropTypes.string,
    radius : React.PropTypes.number,
    disabled : React.PropTypes.bool,
    disabledStyle : React.PropTypes.object,
    onPress : React.PropTypes.func.isRequired,
    onLongPress: React.PropTypes.func,
    onPressIn: React.PropTypes.func,
    onPressOut: React.PropTypes.func,
    background: (TouchableNativeFeedback.propTypes) ? TouchableNativeFeedback.propTypes.background : React.PropTypes.any,
  }
}

const styles = StyleSheet.create({
  button : {
    minWidth : 100,
    height: 46,
    backgroundColor  : '#337ab7',
    justifyContent: 'center',
    margin :8
  },
  round : {
    borderRadius : 8
  },
  progress :{
    padding : 8,
    alignSelf:'center'
  },
  disabled : {
    backgroundColor : '#888'
  },
  defaultTextStyle :{
    color : '#fff',
    fontSize : 16,
    textAlign : 'center',
    padding : 8
  },
  raised: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: {height: 1, width: 1},
        shadowOpacity: 1,
        shadowRadius: 1
      },
      android: {
        elevation: 2
      }
    })
  }

});
