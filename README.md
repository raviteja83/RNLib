# RNLib

# Installation :

 Add `"RNLib":"git+https://github.com/raviteja83/RNLib.git"`  as dependency to your `package.json`

# Usage :
**For using Button**
 `import {Button} from 'RNLib'`

 `<Button raised round>Text Here!</Button>`
  **Button - Props**
   <Table>
   <tr>
   <td><b>prop name</b></td>
   <td><b>prop type</b></td>
   <td><b>prop default</b></td>
   <td><b>prop description</b></td>
   </tr>
   <tr>
     <td>style</td>
     <td>object</td>
     <td>{
    minWidth : 100,
    height: 48,
    backgroundColor  : '#337ab7',
    justifyContent: 'center',
    margin :8
    }</td>
     <td>button style properties</td>
    </tr>
    <tr>
    <td>textStyle</td>
    <td>object</td>
    <td>{
    color : '#fff',
    fontSize : 16,
    textAlign : 'center',
    padding : 8
    }</td>
    <td>text style properties</td>
    </tr>
    <tr>
    <td>isLoading</td>
    <td>bool</td>
    <td>false</td>
    <td>used to toggle progress and text.setting this to true shows progress</td>
    </tr>
    <tr>
    <td>progressColor</td>
    <td>string</td>
    <td>'#fff'</td>
    <td>sets the color of progress bar when shown</td>
    </tr>
    <tr>
    <td>round</td>
    <td>bool</td>
    <td>false</td>
    <td>sets the button with rounded corners.default radius 8</td>
    </tr>
     <tr>
    <td>radius</td>
    <td>number</td>
    <td>8</td>
    <td>sets the radius of the button when round is set to true</td>
    </tr>
    <tr>
    <td>raised</td>
    <td>bool</td>
    <td>false</td>
    <td>sets elevation to the button to show as a raised button</td>
    </tr>
    <tr>
    <td>disabled</td>
    <td>bool</td>
    <td>false</td>
    <td>removes touch events and sets the background to '#888'</td>
    </tr>
     <tr>
    <td>disabledStyle</td>
    <td>object</td>
    <td>{backgroundColor:'#888'}</td>
    <td>style the button when disabled</td>
    </tr>
     <tr>
    <td>iconRight</td>
    <td>string</td>
    <td>empty</td>
    <td>when set to a valid icon name,it is shown to the right of the text</td>
    </tr>
     <tr>
    <td>iconLeft</td>
    <td>string</td>
    <td>empty</td>
    <td>when set to a valid icon name,it is shown to the left of the text</td>
    </tr>
    <tr>
    <td>iconStyle</td>
    <td>object</td>
    <td>{
    alignSelf:'center',
    color:'#fff',
    marginLeft : 8,
    marginRight : 8
    }</td>
    <td>icon style properties when right or left icon is shown</td>
    </tr>
     <tr>
    <td>iconType</td>
    <td>string</td>
    <td>'Ionicons'</td>
    <td>The font of the icon to be used eg: FontAwesome,Ionicons,EvilIcons etc.all icons supported by `react-native-vector-icons`</td>
    </tr>
     <tr>
    <td>onPress</td>
    <td>function</td>
    <td>nothing</td>
    <td>function callback on press of the button</td>
    </tr>
     <tr>
    <td>onLongPress</td>
    <td>function</td>
    <td>nothing</td>
    <td>function callback on long press of the button</td>
    </tr>
     <tr>
    <td>onPressIn</td>
    <td>function</td>
    <td>nothing</td>
    <td>function callback on press in of the button</td>
    </tr>
     <tr>
    <td>onPressOut</td>
    <td>function</td>
    <td>nothing</td>
    <td>function callback on press out of the button</td>
    </tr>
     <tr>
    <td>background</td>
    <td>any.,preferably color string</td>
    <td>native feedback background</td>
    <td>to set the background of the button</td>
    </tr>
    </Table>
  **For using Notification**
    in your index.android.js and index.ios.js
   `import {Notification}  from 'RNLib';

    <Container>
      <Content>
      </Content>
      <Notification fcm_token={pass a function which receives token as parameter}
        fcm_action={pass a function which receives and handles notification click}/>
    </Container>`
 
