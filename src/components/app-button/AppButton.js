import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import getStyles from './AppButton.style';


const AppButton = (props) => {

    const { title, onPress } = props;

    const styles = StyleSheet.create(getStyles());

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default AppButton;
