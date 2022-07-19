import React, { useContext } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    useWindowDimensions
} from 'react-native';

import { Context as AuthContext } from '../../context/AuthContext';

import AppButton from '../../components/appButton/AppButton';

import getStyles from './Profile.styles.js';
import awalogo from '../../assets/awalogo.png';
import { ScrollView } from 'react-native-gesture-handler';
import { formatText } from '../../utils/format';

const Profile = (props) => {

    const styles = StyleSheet.create(getStyles());
    const { width, height } = useWindowDimensions();

    const { state, signOut } = useContext(AuthContext);

    const info = {
        'first_name': 'Joe',
        'last_name': 'Pinder',
        'email': 'joe@gmail.com',
        'phone': '542-515-5151' 
    }

    const renderUserInfoRow = (key, idx) => {
        return (
            <View key={idx} style={styles.userRow}>
                <View style={styles.wrapText}>
                    <Text style={styles.userKey}>
                        {formatText(key)}
                    </Text>
                </View>
                <View style={styles.wrapText}>
                    <Text style={styles.userValue}>{info[key]}</Text>
                </View>
            </View>
        )
    }

    const renderUserInfo = () => {
        const keysOrder = ['first_name', 'last_name', 'email', 'phone']
        return (
            <ScrollView style={styles.userInfo}>
                {keysOrder.map((key, i) => {
                    return renderUserInfoRow(key, i)
                })}
            </ScrollView>
        )
    }

    return (
        <View style={styles.screen}>
            <Image
                source={awalogo}
                style={[
                    styles.logo,
                    {
                        width: width * .8,
                        height: height / 4,
                        resizeMode: 'center'
                    }
                ]}
            />
            {renderUserInfo()}
            <View style={styles.btnContainer}>
                <AppButton
                    title="Sign Out"
                    onPress={signOut}
                />
            </View>
        </View>
    )
};
export default Profile;
