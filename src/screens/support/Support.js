import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    useWindowDimensions
} from 'react-native';
import { FontAwesome5, Feather, AntDesign, Ionicons } from '@expo/vector-icons';

import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import { Avatar, Slide } from 'native-base';

import { homeData } from '../../assets/test-data/home-data';
import awagooglemap from '../../assets/awagooglemap.jpeg';

import getStyles from './Support.styles.js';
import { primary } from '../../components/constants/colors';
import { ScrollView } from 'react-native-gesture-handler';

const Support = (props) => {

    const [supportTeam, setSupport] = useState(homeData['data']);
    const [region, setRegion] = useState({
        "latitude": 41.718000,
        "longitude":-111.8357459195455,
        "latitudeDelta": 0.0019625268457446055,
        "longitudeDelta": 0.010959754296418828,
    })


    const styles = StyleSheet.create(getStyles());
    const { width, height } = useWindowDimensions();

    const renderTeamMember = (data, idx) => {
        const noDisplay = {
            'Employee': true,
            '': true,
            '-': true
        }
        console.log(data)
        if (data && !noDisplay[data['first_name']]) {
            return (
                <View style={styles.teamMember} key={idx}>
                    <Avatar
                        style={styles.avatar}
                        source={{ uri: data["src"] }}
                        size='20'
                    />
                    <Text style={styles.fullName}>
                        {`${data['first_name']} ${data['last_name']}`}
                    </Text>
                </View>
            )
        }
    }

    const renderTeam = () => {
        const roles = ['lead_planner', 'planner', 'rm', 'advisor', 'support',];
        if (supportTeam) {
            return (
                <View style={styles.serviceTeam}>
                    {roles.map((key, idx) => {
                        return renderTeamMember(supportTeam[key], idx)
                    })}
                </View>
            )
        }
    }

    const renderAddressMap = () => {
        return (
            <MapView
                region={region}      
                provider={PROVIDER_GOOGLE}
                style={{ width, height: height / 2}}
            >
                <Marker
                    coordinate={{
                        "latitude": 41.71952584131885,
                        "longitude":-111.8357459195455,
                    }}
                    title='Adams Wealth Advisors'
                />
            </MapView>
        )
    }
    const renderContactUs = () => {
        const contactUs = {
            'phone': '435-752-1702',
            'address': '701 S Main, Suite #400 Logan, UT 84321',
            'hours': 'Monday - Friday, 9AM - 4:30PM',
        };
        const iconName = {
            'phone': <FontAwesome5 name="phone-alt" color={primary} size={30} />,
            'address': <FontAwesome5 name="map-marker-alt" color={primary} size={30} />,
            'hours': <Ionicons name="time" color={primary} size={30}/>,
        }
        const keys = ['phone', 'address', 'hours'];
        return (
            <View style={styles.contactUs}>
                <View style={styles.wrapText}>
                    <Text style={styles.contactUsTitle}>
                        Please don’t hesitate to contact us with any questions or concerns.
                    </Text>
                </View>
                <ScrollView>
                    {keys.map((key, i) => {
                        return (
                            <View style={styles.contactUsRow} key={i}>
                                {iconName[key]}
                                <View style={styles.wrapText}>
                                    <Text style={styles.textValue}>
                                        {contactUs[key]}
                                    </Text>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        )
    }
    return (
        <View style={styles.screen}>
            {renderAddressMap()}
            <View style={[styles.support, {height: '100%'}]}>
                <Text style={styles.title}>Your Service Team</Text>
                {renderTeam()}
                {renderContactUs()}
            </View>
        </View>
    )
};
export default Support;
