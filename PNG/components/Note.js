import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Icon,Button,Fab } from 'native-base';

export default class Note extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            active:false
        }

    }
    showActionIcons(){
        alert("inside method")
    this.setState({ active: !this.state.active })
    alert(this.state.active);
    }
render(){
    return (
        <View style={styles.note} key={this.props.keyval}>
            {/* <Text style={styles.noteText}>{this.props.val.date}</Text> */}
            <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteComplete}>
            {/* <Button rounded>
                <Icon name="checkmark"></Icon>
                </Button> */}
            </TouchableOpacity>
            <Text style={styles.noteText}>{this.props.val.note}</Text>
            <Text style={styles.noteText}>Due Date : {this.props.val.dueDate}</Text>
            {/* <TouchableOpacity onPress={this.props.deleteMethod} style={styles.fixedView}> */}
            {/* <Button rounded>
                <Icon name="close"></Icon>
</Button> */}
 <Fab
            active={this.state.active}
            direction="down"
            containerStyle={{bottom: 10}}
            style={{ backgroundColor: '#5067FF',marginTop:60}}
            position="topRight"
            onPress={this.showActionIcons.bind(this)}>
            <Icon name="more" />
            <Button style={styles.actionIcons}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab> 
            {/* </TouchableOpacity> */}
            </View>
    )
}
}
const styles = StyleSheet.create({
    note:{
        position:'relative',
        padding:20,
        paddingRight:100,
        borderBottomWidth:2,
        borderBottomColor:'#ededed',
    },
    noteText:{
        paddingLeft:20,
        borderLeftWidth:10,
        borderLeftColor:'green',
    },
    noteDelete:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
       // backgroundColor:'#5067FF',
        paddingRight:10,
        top:10,
        bottom:10,
        right:10,
    },
    noteComplete:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
       // backgroundColor:'#5067FF',
        //paddingRight:10,
        top:10,
        bottom:10,
        right:70,
    },
    fixedView : {
        position: 'absolute',
        left: 0,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'flex-end',
      },
    noteDeleteText:{
        color:'white'
    },
    actionIcons:{
        zIndex:10,
        backgroundColor:'#34A34F'
    }
})