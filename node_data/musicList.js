// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { Container } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import musicIMG from './data/1MusicAlbum/musicIMG';


const MusicList = () => {
    // const [ inc , setInc ] = useState(0);

    // const title = "Dumbways Batch 16";
    // const person = {
    //     name: "Johan"
    // }

    const cars = [
        'BMW',
        'Porsche',
        'Jaguar',
        'BMW',
        'Porsche',
        'Jaguar',
        'BMW',
        'Porsche',
        'Jaguar',
        'BMW',
        'Porsche',
        'Jaguar',
        'BMW',
        'Porsche',
        'Jaguar',
        'BMW',
        'Porsche',
        'Jaguar'
    ]

    return (
            <Container>

                    {/* {musicIMG.url.map((item, index) => {
                        return <Text key={index}> {item.url}  </Text>
                    })} */}

                        <Grid>
                            <Row>
                            {musicIMG.url.map((item, index) => {
                                return <Image source={{uri: item.url }} key={index} />;
                        })}
                            </Row>
                        </Grid>
            </Container>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'grey'
    },
    textInc: {
        fontSize: 50,
        color: 'red'
    },
    top: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    middle: {
        flex: 1,
        backgroundColor: 'green'
    },
    bottom: {
        flex: 1,
        backgroundColor: 'blue'
    }
})

export default MusicList;