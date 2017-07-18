// @flow
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type ComponentAProps = {};

const ComponentA = (props: ComponentAProps) => {
    return (
        <View style={styles.container}>
            <Text>ComponentA</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default ComponentA;
