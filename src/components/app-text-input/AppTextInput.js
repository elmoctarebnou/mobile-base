import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { primary } from '../constants/colors';

import getStyles from './AppTextInput.style';

const AppTextInput = (props) => {

    const styles = StyleSheet.create(getStyles());

    const { leftIcon, ...otherProps } = props;

    return (
        <View style={styles.container}>
            {leftIcon && (
                <MaterialCommunityIcons
                name={leftIcon}
                size={20}
                color={primary}
                style={styles.icon}
                />
            )}
            <TextInput
                style={styles.input}
                placeholderTextColor={primary}
                {...otherProps}
            />
        </View>
    );
};

export default AppTextInput;