import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';


export default class ThemesComponent extends React.Component {
  constructor(){
    super();
    this.state={
      names:["../../assets/themes/theme1.jpg","../../assets/themes/theme2.jpg","../../assets/themes/theme3.jpg"],
      values:["theme1","theme2","theme3"]
    }
  }
  render(){ 
            const names=["../../assets/themes/theme1.jpg","../../assets/themes/theme2.jpg","../../assets/themes/theme3.jpg"]
    const slides =this.state.values.map((item,i)=>{
      <p>{item}</p>
      })
    return (
    <View style={styles.container}>
     
      
     <Text>
     {slides}
     test
        </Text>
    </View>
  );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});




