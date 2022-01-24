import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import getStyles from './Signup.style';

const styles = StyleSheet.create(getStyles());

const Signup = () => {
    return (
        <View style={styles.container}>
            <Text>Signup Screen</Text>
        </View>
    )
}

export default Signup