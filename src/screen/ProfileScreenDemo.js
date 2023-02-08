import React ,{useState,useEffect}from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {

  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  Switch,
  TouchableOpacity,
  
} from 'react-native';
import {
 
  isLogout,
  
} from '../service/asyncstoragenretrive';
const ProfileScreenDemo = (props) => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const onLogout=async()=>{
   await isLogout()
   props.navigation.navigate('SignedOutStack');
    
  }
  return (
    <SafeAreaView style={{flex:1}}>

      <View style={{flex:1,}}>
        <View style={{paddingHorizontal:10, flexDirection:'row',backgroundColor:'pink',height:50,alignItems:'center'}}>
          <TouchableOpacity onPress={()=>{
            props.navigation.goBack();
          }} style={{ height:40,width:40,alignItems:'center',justifyContent:'center',}}>
          <Icon name='chevron-back-outline' size={25} color={'black'}/>
          </TouchableOpacity>
        <View style={{flex:1,marginLeft:10,alignItems:'center',justifyContent:'center'}}>
        <Text style={styles.txtTitle}>{"Profile Screen"}</Text>
        </View>
        <Text onPress={onLogout} style={styles.txtTitle}>{"Logout"}</Text>
        </View>
        <View style={{flex:1,margin:20,}}>

       
        <View style={{alignItems:'center'}}>
       
      <Image
                      source={{uri:'https://cdn.pixabay.com/photo/2016/08/20/05/51/avatar-1606939_1280.png',
                      }}
                      resizeMode={'contain'}
                      //resizeMode={'contaißn'}
                      style={styles.profileIconStyle}
                    />
        </View>
     
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{fontSize:20,fontWeight:'bold',margin:10}}>Notification</Text>
    
    <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
                    </View>
           
    
      </View>
      </View>
    </SafeAreaView>
  );
};
export const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    height:50
  },
  profileIconStyle:{
    width:100,
    height:100,
    //justifyContent:'center',
    borderRadius:200/2,
    marginTop:10,
  
  },
  txtTitle:{
    fontSize:20,fontWeight:'bold',color:'blue'
  }
  
});

export default ProfileScreenDemo;
