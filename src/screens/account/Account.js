import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import CustomTabBar from '../../components/customTabBar/CutomTabBar.js';

import { USDFormat } from '../../utils/format.js';
import { lightBlue, primary } from '../../components/constants/colors.js';
import { transactions } from '../../assets/test-data/transaction';

import getStyles from './Account.styles.js';



export default function Account(props) {

    const { route } = props;
    const { accountId, accountData } = route.params;

    const styles = StyleSheet.create(getStyles());

    const getGrowthIcon = (value) => {
        if (value > 0) {
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

    const renderAccountInfo = () => {
        if (accountData) {
            const number = accountData['account_number'];
            const name = accountData['name'];
            const type = accountData['registration_type'];
            const totalValue = accountData['value'];
            const dayChange = accountData['value_change'];
            const pctChange = accountData['percent_change'];
            return (
                <View style={[styles.accountInfo, {flex: 1.7}]}>
                    <View style={styles.accountTitle}>
                        <View style={styles.wrapText}>
                            <Text style={styles.accountName}>
                                {name}
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.wrapText}>
                                <Text style={styles.accountType}>
                                    {type}-
                                </Text>
                            </View>
                            <View style={styles.wrapText}>
                                <Text style={styles.accountNumber}>
                                    {number}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <Text style={[styles.infoText, { marginTop: 10 }]}>
                        Total Value
                    </Text>
                    <View style={styles.wrapText}>
                        <Text style={styles.totalValue}>
                            {USDFormat.format(totalValue)}
                        </Text>
                    </View>
                    <View style={styles.accountMetrics}>
                        <Text style={[styles.infoText, { marginTop: 10 }]}>
                            Today's Changes
                        </Text>
                        <View style={styles.todayChanges}>
                            <View style={styles.todayMetrics}>
                                {getGrowthIcon(dayChange)}
                                <Text style={styles.dayChange}>
                                    {USDFormat.format(dayChange)}
                                </Text>
                            </View>
                            <View style={styles.todayMetrics}>
                                {getGrowthIcon(pctChange * 100)}
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

    const AccountHoldings = () => {
        const holdings = accountData && accountData['details']['holdings']
            ? accountData['details']['holdings'].sort(
                (a, b) => b['value'] - a['value'])
            :   null

        const renderHoldingRow = (holding, idx) => {
            if (holding) {
                const {
                    product_name,
                    ticker,
                    value,
                } = holding;
                return (
                    <ScrollView
                        key={idx}
                        style={styles.holdingRow}
                        contentContainerStyle={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <View style={styles.holdingInfo}>
                            <View style={styles.wrapText}>
                                <Text style={styles.holdingName}>
                                    {product_name}
                                </Text>
                            </View>
                            <View style={styles.wrapText}>
                                <Text style={styles.holdingTicker}>
                                    {ticker}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.holdingMetrics}>
                            <Text style={styles.holdingValue}>
                                {USDFormat.format(value)}
                            </Text>
                        </View>
                    </ScrollView>
                )
            }
        }

        return (
            <ScrollView style={[styles.holdings, {flex: 1}]}>
                {holdings.map((holding, idx) => {
                    return renderHoldingRow(holding, idx)
                })}
            </ScrollView>
        )
    }

    const AccountTransactions = (props) => {

        const renderTransactionRow = (transaction, idx) => {
            if (transaction) {
                const {
                    ticker,
                    date,
                    type,
                    shares,
                    price,
                    value,
                } = transaction;
                return (
                    <ScrollView
                        key={idx}
                        style={styles.transactionRow}
                        contentContainerStyle={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <View style={styles.transactionInfo}>
                            <View style={styles.wrapText}>
                                <Text style={styles.transactionTicker}>
                                    {ticker}
                                </Text>
                            </View>
                            <View style={styles.wrapText}>
                                <Text style={styles.transactionDate}>
                                    {date}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.transactionDetail}>
                            <View style={styles.wrapText}>
                                <Text style={styles.transactionType}>
                                    {type}
                                </Text>
                            </View>
                            <View style={styles.wrapText}>
                                <Text style={styles.transactionValue}>
                                    {USDFormat.format(value)}
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                )
            }

        }
        return (
            <ScrollView style={[styles.transactions, {flex: 1}]}>
                {transactions.sort((a, b) => new Date(b['date']) - new Date(a['date'])).map((transaction, idx) => {
                    return renderTransactionRow(transaction, idx)
                })}
            </ScrollView>
        )
    }

    const renderTabBar = () => {
        const routes = [
            { key: 'holdings', title: 'Holdings' },
            { key: 'transactions', title: 'Transactions' },
        ];
        const scene = {
            holdings: AccountHoldings,
            transactions: AccountTransactions,
        };
        return (
            <View style={[styles.main, {flex: 4}]}>
                <View style={[styles.customTabBar, {flex: 1}]}>
                    <CustomTabBar
                        routes={routes}
                        scene={scene}
                        styleProps={{}}
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={[styles.accountScreen, {flex: 1}]}>
            {renderAccountInfo()}
            {renderTabBar()}
        </View>
    )
}

