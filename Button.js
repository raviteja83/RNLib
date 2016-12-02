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
const isEqual = require('lodash.isequal');

class Button extends Component{
  constructor(props){
    super(props);
  }

  shouldComponentUpdate: function (nextProps, nextState) {
    if (!isEqual(nextProps, this.props)) {
      return true;
    }
    return false;
  }

  __renderChildren(){
    if(this.props.progress){
      return (
        <View style={styles.progress}>
          <ActivityIndicator animating={true} color={this.props.progressColor ? this.props.progressColor : '#fff'}/>
        </View>
      );
    }
    return (
      <Text style={this.props.textStyle ? this.props.textStyle : styles.defaultTextStyle}>{this.props.children}</Text>
    );
  }

  render(){
    const buttonStyle =  this.props.style ? this.props.style : styles.button;
    const round = this.props.radius ? { borderRadius : this.props.radius} : styles.round;
    const disabled = this.props.disabled ? (this.props.disabledStyle ? this.props.disabledStyle : styles.disabled ) : {};
    let touchableProps = this.props.disabled ? {} : {
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
          style={[buttonStyle,round,disabled]}>
          {this.__renderChildren}
        </TouchableNativeFeedback>
      );
    }else{
      <TouchableOpacity {...touchableProps}
        style={[buttonStyle,round,disabled]}>
        {this.__renderChildren}
      </TouchableOpacity>
    }
  }

  static propTypes ={
    style : React.PropTypes.object,
    textStyle : React.PropTypes.object,
    children: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array
    ]),
    progress : React.PropTypes.bool,
    progressColor : React.PropTypes.string,
    radius : React.PropTypes.number,
    disabled : React.PropTypes.bool,
    disabledStyle : React.PropTypes.object,
    onPress : React.PropTypes.func.isRequired,
    onLongPress: PropTypes.func,
    onPressIn: PropTypes.func,
    onPressOut: PropTypes.func,
    background: (TouchableNativeFeedback.propTypes) ? TouchableNativeFeedback.propTypes.background : PropTypes.any,
  }
}

const styles = StyleSheet.create({
  button : {
    minWidth : 100,
    height: 46,
    backgroundColor  : '#337ab7',
    justifyContent: 'center'
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
  }
});

export default Button;
