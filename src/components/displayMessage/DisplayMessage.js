import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import getStyles from './DisplayMessage.styles.js';

const DisplayMessage = (props) => {
    
    const { message, type = 'error' } = props;

    const styles = StyleSheet.create(getStyles());

    const getClass = () => {
        if (type === 'error') return styles.errorMessage;
    }

    return (
        <View style={getClass()}>
            <Text>{message}</Text>
        </View>
    )
};
export default DisplayMessage;
