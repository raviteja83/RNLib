import React,{Component,PropTypes} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Device from './Device'
import Icon from 'react-native-vector-icons/Entypo';

export default class TabBar extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const tabs = this.props.tabs.length;
    var tabWidth = Device.width / tabs;
    return(
      <View style={[styles.tabs,{width : Device.width}]}>
        {this.props.tabs.map((tab,i) => {
          const activeStyle = (this.props.activeTab === i) ? { color : this.props.activeColor} : {color : this.props.inactiveColor};
          return(
            <TouchableOpacity key={i} style={{width : tabWidth,}} onPress={()=>this.props.goToPage(i)}>
               <View style={styles.tab}>
              {this.props.showIcon
                ?
                <Icon
                  color={this.props.activeTab === i ? this.props.activeColor : this.props.inactiveColor}
                  size={this.props.iconSize}
                  name={tab.icon}/>
                  :
                  null}
                  {this.props.showText
                    ?
                    <Text style={[this.props.textStyle,activeStyle]}>{tab.title}</Text>
                    :
                    null
                  }
                </View>
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
      activeColor : PropTypes.string,
      inactiveColor : PropTypes.string,
      activeTab : PropTypes.number,
      goToPage : PropTypes.func.isRequired
    }

    static defaultProps = {
      showIcon : false,
      showText : true,
      tabs : [{title : "Tab1"},{title:"Tab2"},{title:"Tab3"}],
      iconStyle : { color :  "#212121"},
      textStyle : {color : "#212121",fontSize : 12,textAlign:'center'},
      iconSize : 36,
      activeColor : "#293e6a",
      inactiveColor : "#212121",
      activeTab : 0
    }
  }

 const styles = StyleSheet.create({
   tabs : {
     flexDirection : 'row',
     justifyContent : 'space-around',
     alignItems:'center',
     backgroundColor:'#fff',
     elevation : 2
   },
   tab :{
     flex :1,
     alignItems:'center',
     justifyContent:'center',
     padding:8,
     borderRightWidth : 2,
     borderRightColor : '#fff'
   }
 });
