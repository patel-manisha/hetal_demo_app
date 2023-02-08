import react, { useState,useEffect } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const GridFlatListDemo = (props) => {
    const checkarray = [
        {id: 'a', value: 'A'},
        {id: 'b', value: 'B'},
        {id: 'c', value: 'C'},
        {id: 'd', value: 'D'},
        {id: 'e', value: 'E'},
        {id: 'f', value: 'F'},
        {id: 'g', value: 'G'},
        {id: 'h', value: 'H'},
        {id: 'i', value: 'I'},
        {id: 'j', value: 'J'},
        {id: 'k', value: 'K'},
        {id: 'l', value: 'L'},
      ];
     const numColumns = 3;
   //   const size = Dimensions.get('window').width/numColumns;
      const styles = StyleSheet.create({
        itemContainer: {
          width: 120,
          height: 120,
    
        },
        item: {
          flex: 1,
          margin: 10,
          backgroundColor: 'lightblue',
          justifyContent:'center',
          padding:20,
          fontSize:50,
          height:23,
          alignItems:'center',
          marginLeft:20,
        
        }
      });
      useEffect(()=>{
        fetch('https://api.publicapis.org/entries')
        .then(response => response.json())
        .then(json => {
            const entriesData=json.entries;
           // setListItems(entriesData)
            console.log("json data::",entriesData)
          //return json.movies;
        })
        .catch(error => {
          console.error(error);
        });
      },[])
    
        return (
            <SafeAreaView>
            <FlatList
            data={checkarray}
            renderItem={({item}) => (
              <TouchableOpacity onPress={()=>{
                         props.navigation.navigate('designDemo');
              }} style={styles.itemContainer}>
                <Text style={styles.item}>{item.value}</Text>
              </TouchableOpacity>
            )}
          keyExtractor={item => item.id}
           numColumns={numColumns} />
    
      </SafeAreaView>
        )

        
}
const styles = StyleSheet.create({
  itemcontainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  item:
  {
    marginTop: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
  },

});
  
export default GridFlatListDemo;