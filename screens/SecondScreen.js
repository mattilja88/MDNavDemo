import React, { useEffect } from 'react';
import { BackHandler, StyleSheet, Text, View } from 'react-native';

export default function SecondScreen() {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', close);
    return () => backHandler.remove();
  }, []);

  const close = () => {
    navigation.goBack();
    return true;
  };

  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
    </View>
  );
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
