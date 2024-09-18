import React, { useLayoutEffect, useState } from 'react'
import {StyleSheet, Text, TextInput, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function HomeScreen() {

    return (
        <View style = {styles.container}>
            <Text>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: "100%",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
})