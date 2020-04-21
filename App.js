import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import Main from './PNG/components/Main';
import  ThemesComponent  from "./PNG/components/themesComponent";
import AddNewItem from './PNG/components/FooterComponent';
import { Root } from "native-base";
// import { Font, AppLoading } from "expo";
import * as Font from 'expo-font'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ loading: false });
  }

  render(){
    // if (this.state.loading) {
  return (
   
    <View style={styles.container}>
    <Main /> 
    {/* <Text>test me</Text> */}
    {/* <AddNewItem /> */}
    {/* <ThemesComponent /> */}
    </View>
  );
    }
  }
// }

const styles=StyleSheet.create({
  container:{
    flex:1,
    // marginTop:40
  },
})
