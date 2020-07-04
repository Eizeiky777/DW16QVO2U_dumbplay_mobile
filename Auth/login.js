import React, { Component } from 'react';
import { 
TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import {  Button, Text } from 'native-base';


export default function Login({ register, tabs }) {
    const [valueMail, onChangeMail] = React.useState('Email');
    const [valuePass, onChangePass] = React.useState('Password');

    return (
        <View style={styles.container}>
            <View><Text style={styles.loggedIn}>LOGIN</Text></View>
            <TextInput
            style={styles.input}
            onChangeText={text => onChangeMail(text)}
            value={valueMail}
            />
            <TextInput
            style={styles.input}
            onChangeText={text => onChangePass(text)}
            value={valuePass}
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={tabs}
            >
                <Text style={{textAlign: 'center', paddingTop: 5, color: 'white', fontSize: 20}}>Submit</Text>
            </TouchableOpacity>
            <Button transparent onPress={register}>
                <Text style={{fontSize: 12}}>
                    <Text style={{color: 'white'}}>don't have an account ?</Text>
                    <Text style={{color: '#B1B1B1'}}> click here</Text>
                </Text>
            </Button>
        </View>
    );
}

////////////////////////////////////////////////////////// STYLE //////////////
const styles = StyleSheet.create({
    loggedIn: {
        padding: 10, 
        color: 'white', 
        fontSize: 25,
    },
    container: {
        width: 350,
        height: 300,
        backgroundColor: '#3a3a3a',
        alignItems: 'center',
        borderRadius: 10,
        paddingTop: 15,
    },
    input: { 
        width: 250,
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        margin: 10,
        paddingLeft: 5,
        backgroundColor: 'white'
        
    },
    btn: {
        width: 250,
        height: 40,
        marginTop: 10,
        backgroundColor: '#EE4622',
        borderRadius: 5
    }


});
