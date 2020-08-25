import React from "react";
import {View, Text, StyleSheet, ActivityIndicator} from "react-native";
import * as FirebaseCore from "expo-firebase-core";

export class LoadingScreen extends React.Component  {
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large"/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
