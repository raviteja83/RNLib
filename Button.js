import React,{Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  ActivityIndicator
} from 'react-native';


class Button extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const buttonStyle =  this.props.style ? this.props.style : styles.button;
    const round = this.props.radius ? { borderRadius : this.props.radius} : styles.round;
    const disabled = this.props.disabled ? this.props.disabledStyle ? this.props.disabledStyle : styles.disabled  : {};
    return(
      <TouchableHighlight
        style={[buttonStyle,round,disabled]} onPress={this.props.onPress}>
        {this.props.progress ?
           <View style={styles.progress}>
             <ActivityIndicator animating={true} color={this.props.progressColor ? this.props.progressColor : '#fff'}/>
           </View>
           :
          <Text style={this.props.textStyle ? this.props.textStyle : styles.defaultTextStyle}>{this.props.text}</Text>
        }
      </TouchableHighlight>
    );
  }

  static propTypes ={
    style : React.PropTypes.object,
    textStyle : React.PropTypes.object,
    text: React.PropTypes.string.isRequired,
    progress : React.PropTypes.bool,
    progressColor : React.PropTypes.string,
    radius : React.PropTypes.number,
    disabled : React.PropTypes.bool,
    disabledStyle : React.PropTypes.object,
    onPress : React.PropTypes.func.isRequired
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
