
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TextInput,
    ScrollView,
    TouchableOpacity,

} from 'react-native';
// import { Icon } from 'react-native-elements'
import { Container, Header,Icon, Body,Title,Right,justifyContent,Content,Segment, Button, Footer, FooterTab,Fab, Left, ActionSheet, Form, Item, Input, Label, DatePicker } from 'native-base';
import Note from './Note'
import AddNewItem from './FooterComponent';
import Modal from 'react-native-modal';


export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteArray: [],
            noteText: '',
            showPopup: false,
            dueDate: new Date(),
            active: false
        }
        this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
        alert(newDate);
        this.setState({dueDate:newDate});
    }
    render() {
        let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} keyval={val} val={val} deleteMethod={() => this.deleteMethod(key)} />
        })
        return (
            <View style={styles.container}>
                  <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          
          <Body style={styles.headerText}>
            <Title >To Do App</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
           <Button>
           {/* <Icon
  raised
  name='heartbeat'
  type='font-awesome'
  color='#f50'
  onPress={() => console.log('hello')} /> */}
           </Button>
            </Right></Header>
                {/* <View style={styles.header}>
                    <Text style={styles.headerText}>To Do App
                    </Text>
                    
                </View> */}
                 {/* <Segment>
              <Button first><Text>Pending</Text></Button>
              <Button last active><Text>Completed</Text></Button>
            </Segment> */}
                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>
                {/* <View style={styles.footer}>

                <TextInput
                    style={styles.textInput}
                    placeholder='>Notes'
                    onChangeText={(noteText)=>this.setState({noteText})}
                    value={this.state.noteText}
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'>

                </TextInput>
            </View> */}
                <TouchableOpacity onPress={this.showPopup.bind(this)} style={styles.addButton}>
                    <Text style={styles.addButtonText}>
                        +
                </Text>
                </TouchableOpacity>
                <Footer> 
                    <FooterTab> 
                        <Button>
                            <Icon name="checkmark-circle" />
                            <Text>Completed</Text>
                        </Button>
                        <Button>
                            <Icon name="aperture" />
                            <Text>Themes</Text>
                        </Button>  
                      
                         <Button active>

                        {/* <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{bottom: 60}}
            style={{ backgroundColor: '#5067FF'}}
            position="bottomLeft"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab> */}
          {/* <Fab containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}> */}
<Icon name="share" />
<Text>share</Text>
          {/* </Fab> */}
          {/* </Button> */}
                        </Button>
                        <Button>
                            <Icon name="person" />
                            <Text>person</Text>
                        </Button>
                     </FooterTab>
                </Footer> 
                <View>
                    <Modal isVisible={this.state.showPopup}>
                        <View style={styles.modelWindow}>
                            {/* <Text>Add Task</Text> */}
                            {/* <TextInput
                                style={styles.textInput}
                                placeholder='>Notes'
                                onChangeText={(noteText) => this.setState({ noteText })}
                                value={this.state.noteText}
                                placeholderTextColor='white'
                                underlineColorAndroid='transparent'>

                                
                            </TextInput> */}
                            <View style={styles.windowheader}>
                    <Text style={styles.headerText}>To Do Tasks</Text>
                </View>
                            <Form  style={styles.textInput}>
                                <Item floatingLabel>
                                    <Label>Note</Label>
                                    <Input onChangeText={(noteText) => this.setState({ noteText })}
                                value={this.state.noteText}/>
                                </Item>
                                    <DatePicker
                                        defaultDate={new Date()}
                                        minimumDate={new Date(2020, 1, 1)}
                                        maximumDate={new Date(2020, 12, 31)}
                                        locale={"en"}
                                        timeZoneOffsetInMinutes={undefined}
                                        modalTransparent={false}
                                        animationType={"fade"}
                                        androidMode={"default"}
                                        placeHolderText="Select date"
                                        textStyle={{ color: "green" }}
                                        placeHolderTextStyle={{ color: "#d3d3d3" }}
                                        onDateChange={this.setDate}
                                        disabled={false}
                                    />
                                </Form>
                            <Button onPress={this.addNote.bind(this)} >
                                <Text>Add Note</Text>
                            </Button>
                        </View>
                    </Modal>
                </View>
            </View>
        );
    }
    showPopup() {
        this.setState({
            showPopup: true
        })
    }
    addNote() {
        this.setState({
            showPopup: false
        })
        if (this.state.noteText) {
            var d = new Date();
            var due=this.state.dueDate;
            this.state.noteArray.push({
                'date': d.getFullYear() +
                    "/" + (d.getMonth() + 1 +
                        "/" + d.getDate()),
                'note': this.state.noteText,
                'dueDate':due.getFullYear() + "/"+(due.getMonth() + 1 +
                "/" + due.getDate())
            })
            this.setState({
                'noteArray': this.state.noteArray
            })
            this.setState({
                'notetext': this.state.noteText
            })
            this.setState({ noteText: '' });
        }
    }
    deleteMethod(key) {
        this.state.noteArray.splice(key, 1);
        this.setState({ noteArray: this.state.noteArray })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#5067FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#ddd'
    },
    windowheader:{
        backgroundColor: '#5067FF',
        alignItems: 'center',
        justifyContent: 'center',
       // borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        alignItems:'center',
        fontSize: 18,
        //padding: 26,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 2,
        //backgroundColor: '#252525',
        borderTopWidth: 2,
        // borderTopColor: '#ededed',
        marginBottom:10
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#5067FF',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    },
    modelWindow:{
         flex: 1 ,
         justifyContent: 'center',
         color:'#fff'
    }
});


