import React, { Component } from 'react';
import { 
TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import {  Button, Text } from 'native-base';



export default function Register({ navigation}) {
    const [valueMail, onChangeMail] = React.useState('Email');
    const [valuePass, onChangePass] = React.useState('Password');
    const [valueName, onChangeName] = React.useState('FullName');
    const [valueGender, onChangeGender] = React.useState('Gender');
    const [valuePhone, onChangePhone] = React.useState('Phone');
    const [valueAddress, onChangeAddress] = React.useState('Address');

    return (
        <View style={styles.containRegister}>
            <View style={styles.container}>
                <View><Text style={styles.loggedIn}>REGISTER</Text></View>
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
                <TextInput
                style={styles.input}
                onChangeText={text => onChangeName(text)}
                value={valueName}
                />
                <TextInput
                style={styles.input}
                onChangeText={text => onChangeGender(text)}
                value={valueGender}
                />
                <TextInput
                style={styles.input}
                onChangeText={text => onChangePhone(text)}
                value={valuePhone}
                />
                <TextInput
                style={styles.input}
                onChangeText={text => onChangeAddress(text)}
                value={valueAddress}
                />
                <TouchableOpacity
                    style={styles.btn}
                >
                    <Text style={{textAlign: 'center', paddingTop: 5, color: 'white', fontSize: 20}}>Submit</Text>
                </TouchableOpacity>
                <Button transparent onPress={() => navigation.navigate('App')}>
                    <Text style={{fontSize: 12}}>
                        <Text style={{color: 'white'}}>have an account ?</Text>
                        <Text style={{color: '#B1B1B1'}}> click here</Text>
                    </Text>
                </Button>
            </View>
        </View>
    );
}

////////////////////////////////////////////////////////// STYLE //////////////
const styles = StyleSheet.create({
    containRegister: {
        backgroundColor: 'black',
        height: '100%',
        flex: 1,
        alignItems: "center",
        paddingTop: 40
    },
    loggedIn: {
        padding: 10, 
        color: 'white', 
        fontSize: 25,
    },
    container: {
        width: 350,
        height: 600,
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
