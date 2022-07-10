import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import getStyles from './Accounts.styles.js';

const Accounts = (props) => {

    const styles = StyleSheet.create(getStyles());


    return (
        <View style={styles.column}>
            <Text>Accounts</Text>
        </View>
    )
};
export default Accounts;
