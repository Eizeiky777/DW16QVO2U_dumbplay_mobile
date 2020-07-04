import React, { Component } from "react";
import MusicList from './musicList';

import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { 
Container, Header, Title, Thumbnail,
Content, Button, Icon, Left, 
Right, Body, Text
} from "native-base";


export default class Test extends Component {
render() {
        return (
        <Container style={{backgroundColor: "#161616"}}>
            <Header transparent>
            <Left>
                <Image source={require('./data/3Logo/DUMBSOUND.png')} />
            </Left>
            <Right>
                <Button dark style={styles.btnLoginAndRegister} >
                    <Text style={{fontSize: 12, textAlign: 'center'}}>     Login</Text>
                </Button>
                <Button warning style={styles.btnLoginAndRegister}>
                    <Text style={{fontSize: 12, textAlign: 'center'}}>  Register</Text>
                </Button>
            </Right>
            </Header>
            <Content padder>
                <Image source={require('./data/3Logo/COVER.png')} />
            </Content>
            
            <MusicList />
                
        </Container>
        );
    }   
}

const styles = StyleSheet.create({
    btnLoginAndRegister: {
            width: 110,
            height: 40,
            color: 'white',
            borderRadius: 7,
            marginRight: 5,
            alignItems: 'center'
        }
}) 