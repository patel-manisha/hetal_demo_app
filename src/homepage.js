import React from 'react';

import {
  
    SafeAreaView,
   Image,
    Text,
    View,
  } from 'react-native';
import images from './assets/images/images';

const HomePage = () => {
    return(<SafeAreaView style={{flex:1,}}>
       {/*View 1 */} 
       <Image style={{height:200,width:200,resizeMode:'stretch'}} 
                  source={images.net_img1}/>
        <View style={{flex:0.5,}}>
       
           {/* child 1 */}  
        <View style={{flex:0.5,backgroundColor:'orange',alignSelf:'center'}}>
             {/* Sub child 1 */}  
        <View style={{flex:0.3,backgroundColor:'red',height:50,width:50,
            alignSelf:'center',margin:10}}>
                <Image style={{height:40,width:40}} source={images.smilly}/>
                </View>
        {/* Sub child 2 */}  
       <View style={{flex:0.3,backgroundColor:'green',height:50,width:50,
            alignSelf:'center',margin:10}}>
                <Image style={{height:40,width:40}} source={images.smile_img2}/>
        </View>
        {/* Sub child 3 */}  
        
                 
        
         </View>
           {/* child 2 */}  
        <View style={{flex:0.5,backgroundColor:'white',flexDirection:'row',justifyContent:'space-between'}}>
{/* 1 */}
            <View style={{backgroundColor:'grey',flex:1}}>
<View style={{}}>
    <Text>1</Text>
    <Text>2</Text>
</View>
            </View>
            {/* 2 */}
            <View style={{backgroundColor:'green',flex:1}}>
            <View style={{flex:1}}>
    <Text>3</Text>
    <Text>4</Text>
</View>
            </View>
            {/* 3 */}
            <View style={{backgroundColor:'yellow',flex:1}}>
            <View style={{flex:1}}>
    <Text style={{flex:0.5,backgroundColor:'red'}}>5</Text>
    <Text style={{flex:0.5}}>6</Text>
</View>
            </View>
            {/* 4 */}
            <View style={{backgroundColor:'grey',flex:1}}>
            <View>
    <Text>7</Text>
    <Text>8</Text>
</View>
            </View>

            {/* Sub child 1 */}  
        {/* <View style={{backgroundColor:'red',height:100,width:100,
            alignSelf:'flex-start',flexDirection:'row'}}>
                <View style={{backgroundColor:'gray',height:100,width:100}}>

            </View>
                </View>

                <View style={{backgroundColor:'green',height:100,width:100,
            alignSelf:'flex-start',flexDirection:'row'}}>
                </View> */}
        {/* Sub child 2 */}  
       {/* <View style={{flex:0.5,backgroundColor:'green',height:50,width:50,
            alignSelf:'center'}}>
                
        </View> */}
    </View>
       </View>
       
    
        {/*View 2 */} 
        <View style={{flex:0.5,backgroundColor:'red'}}>
        
        </View>
    </SafeAreaView>)
}
export default HomePage;