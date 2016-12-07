import React,{Component,PropTypes} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Device from './Device'
import Icon from 'react-native-vector-icons/Ionicons';

export default class TabBar extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const tabs = this.props.tabData  ? this.props.tabData.length :  this.props.children.length;
    var tabWidth = Device.width / tabs;
    return(
      <View style={styles.tabs,{width : Device.width}}>
        {this.props.tabs.map((tab,i) => {
          const activeStyle = (this.props.activeTab === i) ? { color : this.props.activeColor} : {color : this.props.inactiveColor};
          return(
            <TouchableOpacity style={styles.tab,{width : tabWidth}} onPress={()=>this.props.goToPage(i)}>
              {this.props.showIcon
                ?
                <Icon style=[{this.props.iconStyle ? this.props.iconStyle :  this.defaultProps.iconStyle},activeStyle] size={this.props.iconSize ?  this.props.iconSize : this.defaultProps.iconSize}
                  name={tab.icon}/>
                  :
                  null}
                  {this.props.showText
                    ?
                    <Text style=[{this.props.textStyle ? this.props.textStyle : this.defaultProps.textStyle},activeStyle]>{tab.title}</Text>
                    :
                    null
                  }
                </TouchableOpacity>
              );
            })
          }
        </View>
      );
    }

    static propTypes = {
      showIcon : PropTypes.bool,
      showText : PropTypes.bool,
      tabs : PropTypes.array,//[{title : 'hello', icon : ''}]
      iconStyle : PropTypes.object,
      textStyle : PropTypes.object,
      iconSize : PropTypes.number,
      activeColor : PropTypes.string.isRequired,
      inactiveColor : PropTypes.string.isRequired,
      activeTab : PropTypes.number,
      goToPage : PropTypes.func.isRequired
    }

    static defaultProps = {
      showIcon : false,
      showText : true,
      tabs : [{title : "Tab1"},{title:"Tab2"},{title:"Tab3"}],
      iconStyle : { color :  "#212121"},
      textStyle : {color : "#212121",fontSize : 16}
      iconSize : 48,
      activeColor : "#293e6a",
      inactiveColor : "#212121",
      activeTab : 0
    }
  }

 const styles = StyleSheet.create({
   tabs : {
     height: 56,
     flexDirection : 'row',
     alignItems : 'stretch',
     justifyContent : 'space-around'
   }
   tab : {
      width : 48,
      height : 48,
      flexDirection : 'column',
      justifyContent:'center',
      alignItems:'center'
   }
 });
