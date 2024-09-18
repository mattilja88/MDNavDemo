import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Appbar } from 'react-native-paper';

export default function MyAppbar({ navigation, back }) {
    return (
        <Appbar.Header>
            {back &&
                (<Appbar.BackAction onPress={navigation.goBack} />)
            }
            <Appbar.Content title="MD Nav Demo" />
            {!back && (
                <Appbar.Action
                    icon="arrow-right"
                    onPress={() => navigation.navigate('Second')}
                />)
            }

        </Appbar.Header>
    );
}