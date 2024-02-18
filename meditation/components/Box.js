// Learned at https://www.youtube.com/watch?v=Nqej8c2qjv8&list=PLC3y8-rFHvwhiQJD1di4eRVN30WWCXkg1&index=26

import React from 'react';
import {View, Text, StyleSheet } from 'react-native';


export default function Box({ children, style }) {
    return (
        <View style={[styles.box,style]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    box: {
        backgroundColor: "#fff",
        padding: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold", 
        textAlign: "center",
        color: "white",
    },
});