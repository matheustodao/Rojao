import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import {Feather} from '@expo/vector-icons'
import { Audio } from 'expo-av'

import styles from './styles';


export default function AppRojao(){


    async function playSound(){
    

        try {
            const soundObject = new Audio.Sound()
            await soundObject.loadAsync(require('./assets/audiorojao.mp3'))
            await soundObject.playAsync()
        } catch (error) {
            console.log('ERRO')
        }   
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button}
                onPress={playSound}
            >

                <Feather name="volume-2" size={60} style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}