import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

import getStyles from './Initializing.styles.js';

const Initializing = (props) => {

    const styles = StyleSheet.create(getStyles());

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
        </View>
    );
};
export default Initializing;
