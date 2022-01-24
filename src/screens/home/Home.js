import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import getStyles from './Home.style';

const styles = StyleSheet.create(getStyles());

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    )

}

export default Home