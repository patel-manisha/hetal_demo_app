/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';

import 
{
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


const DesignDemo = (props) => {



  return (
<SafeAreaView style={{flex:1}}>
{/* view 1 */}

  {/*  */}
            
<View  style={{flex:0.5,}}> 
{/* child 1 */}
<View style={{flex:0.4,backgroundColor:'#00ffff',alignItems:'center'}}>
  <TouchableOpacity onPress={()=>{
props.navigation.navigate('profilescreen');
  }} style={{height:20,width:200,backgroundColor:'pink'}}></TouchableOpacity>
  </View>

  {/* child 2 */}
<View style={{flex:1,backgroundColor:'blue',flexDirection:'row'}}>
  {/* Sub Child 1 */}
<View style={{backgroundColor:'#ffe4c4',height:50,width:50,
alignSelf:'center',marginLeft:10}}>
  
</View>
  {/* Sub Child 2 */}
<View style={{marginHorizontal:10, backgroundColor:'#000000',
flex:1,height:100,alignSelf:'center'}}></View>
{/* Sub Child 3 */}
<View style={{backgroundColor:'#5f9ea0',height:50,width:50,alignSelf:'center',marginRight:10}}></View>
  </View>
  {/* child 3 */}
<View style={{flex:0.4,backgroundColor:'red',alignItems:'center',justifyContent:'flex-end'}}>
<View style={{backgroundColor:'#ffe4c9',height:50,width:100,alignSelf:'center',marginLeft:10}}></View>
</View>
</View>
{/* view 2 */}

<View style={{flex:0.5,backgroundColor:'orange',flexDirection:'row',marginTop:10}}>
  {/* child 1 */}
<View style={{flex:1,backgroundColor:'#ffe3c6',marginLeft:10}}>
{/* subchild 1 */}
<View style={{flex:1, backgroundColor:'pink',}}></View>
{/* subchild 2 */}
<View style={{flex:1, backgroundColor:'red',marginVertical:10}}>
</View>
{/* subchild 3 */}
<View style={{flex:1, backgroundColor:'green',}}>
</View>
  </View>
  {/* child 2 */}
  <View style={{height:100,alignSelf:'center', width:200,backgroundColor:'#ffe3c6',marginLeft:10}}></View>
 {/* child 3 */}
 <View style={{flex:1,backgroundColor:'#ffe3c6',marginLeft:10}}>

  {/* subchild 1 */}
<View style={{flex:1, backgroundColor:'pink',}}></View>
{/* subchild 2 */}
<View style={{flex:1, backgroundColor:'red',marginVertical:10}}></View>
{/* subchild 3 */}
<View style={{flex:1, backgroundColor:'green',}}></View>
 </View>
 </View>
</SafeAreaView>
  );
};


export default DesignDemo;
