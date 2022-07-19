import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Context as AuthContext } from '../../context/AuthContext';

import AppButton from '../../components/appButton/AppButton';
import { homeData } from '../../assets/test-data/home-data';

import { USDFormat } from '../../utils/format';

import getStyles from './Home.styles';
import { lightGray, white } from '../../components/constants/colors';
import { StatusBar } from 'expo-status-bar';



const Home = ({navigation}) => {

    const [householdData, setHouseholdData] = useState(homeData);

    const styles = StyleSheet.create(getStyles());

    const onPressAccount = (account, idx) => {
        console.log({ idx})
        navigation.navigate('Account', {
            accountId: idx, accountData: account
        })
    }

    const getGrowIcon = (value) => {
        if (value > 0.001) {
            return (
                <AntDesign name="arrowup" size={24} color="green" />
            )
        }
        else if (value < 0.001 && value > -0.001 ) {
            return null
        }
        else {
            return (
                <AntDesign name="arrowdown" size={24} color="red" />
            )
        }
    }

    const renderHeader = () => {
        if (householdData) {
            const name = householdData['data']['name'];
            const totalValue = householdData['value'];
            const dayChange = householdData['day_change'];
            const pctChange = householdData['pct_change'];
            return (
                <View style={styles.header}>
                    <Text style={styles.clientName}>
                        {name}
                    </Text>
                    <View
                        style={[
                            styles.householdMetrics,
                            {
                                shadowOffset: { width: 0, height: 1 },
                                shadowOpacity: 0.5,
                                shadowRadius: 5,  
                                elevation: 50
                            }
                        ]}
                    >
                        <Text style={styles.infoText}>Total Assets</Text>
                        <Text style={styles.totalValue}>
                            {USDFormat.format(totalValue)}
                        </Text>
                        <Text style={[styles.infoText, { marginTop: 10 }]}>
                            Today's Changes
                        </Text>
                        <View style={styles.todayChanges}>
                            <View style={styles.todayMetrics}>
                                {getGrowIcon(dayChange)}
                                <Text style={styles.dayChange}>
                                    {USDFormat.format(dayChange)}
                                </Text>
                            </View>
                            <View style={styles.todayMetrics}>
                                {getGrowIcon(pctChange * 100)}
                                <Text style={styles.pctChange}>
                                    {`${(pctChange * 100).toFixed(3)} %`}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            )
        }
    }

    const renderAccountRow = (accountData, idx) => {
        if (accountData) {
            const {
                name,
                registration_type,
                value,
            } = accountData
            return (
                <View style={[styles.account]}>
                    <View style={styles.accountInfo}>
                        <View style={styles.wrapText}>
                            <Text style={styles.accountName}>
                                {name}
                            </Text>
                        </View>
                        <View style={styles.wrapText}>
                            <Text style={styles.accountType}>
                                {registration_type}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.accountMetrics}>
                        <Text style={styles.accountValue}>
                            {USDFormat.format(value)}
                        </Text>
                    </View>
                    <AntDesign name="right" size={15} color="black" />
                </View>
            )
        }
    }

    const renderAccounts = () => {
        if (householdData) {
            const accounts = householdData['accounts'];
            return (
                <ScrollView style={styles.accounts}>
                    {accounts.map((account, idx) => {
                        return (
                            <TouchableOpacity
                                key={idx}
                                onPress={() => onPressAccount(account, idx)}
                            >
                                {renderAccountRow(account)}
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            )
        }
    }

    return (
        <View style={styles.screen}>
            {renderHeader()}
            <View style={[styles.main, {flex: 1}]}>
                <Text style={styles.accountsTitle}>Accounts</Text>
                {renderAccounts()}
            </View>
        </View>
    );
};

export default Home;
