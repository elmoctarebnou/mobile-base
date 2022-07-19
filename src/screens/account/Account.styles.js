import { statusBarHeight } from '../../utils/osStatusBar';
import { lightBlue, lightGray, primary, quaternary, white } from "../../components/constants/colors";

export default function getStyles() {
    return {
        row: {
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent:'space-around'
        },
        column: {
            display: 'flex',
            flexDirection: 'column'
        },
        wrapText: {
            flexShrink: 1 
        },
        accountScreen: {
        },
        accountInfo: {
            width: '100%',
            padding: 10,
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: primary,
        },
        accountTitle: {
            flexDirection: 'column',
            alignItems: 'center',
        },
        accountName: {
            fontSize: 20,
            color: white,
            marginBottom: 5,
            fontWeight: 'bold'
        },
        accountType: {
            fontSize: 20,
            color: white,
            fontWeight: 'bold'
        },
        accountNumber: {
            fontSize: 20,
            color: white,
        },
        accountMetrics: {
        },
        totalValue: {
            color: white,
            fontSize: 30,
            marginTop: 5,
            fontWeight: 'bold' 
        },
        infoText: {
            color:  quaternary
        },
        accountMetrics: {
            flexDirection: 'column',
            alignItems: 'center'
        },
        todayChanges: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10
        },
        todayMetrics: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        dayChange: {
            color: white,
            marginRight: 15,
            fontSize: 15,
        },
        pctChange: {
            color: white,
            fontSize: 15,
        },
        main: {
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white'
        },
        customTabBar: {
            width: '100%'
        },
        holdings: {
            backgroundColor: white
        },
        holdingRow: {
            borderBottomColor: lightGray,
            borderBottomWidth: 4,
            paddingVertical: 10,
            paddingHorizontal: 10,
        },
        holdingInfo: {
            width: '60%',
        },
        holdingName: {
            fontSize: 17,
        },
        holdingTicker: {
            fontSize: 17,
            color: quaternary
        },
        holdingMetrics: {

        },
        holdingValue: {
            fontSize: 17,
        },
        transactions: {
            backgroundColor: white
        },
        transactionRow: {
            borderBottomColor: lightGray,
            borderBottomWidth: 4,
            paddingVertical: 10,
            paddingHorizontal: 10,
        },
        transactionInfo: {
            width: '60%',
        },
        transactionTicker: {
            fontSize: 17,
        },
        transactionDate: {
            fontSize: 17,
            color: quaternary
        },
        transactionDetail: {
            alignItems: 'flex-end'
        },
        transactionType: {
            fontSize: 17,
        },
        transactionValue: {
            fontSize: 17,
        },
    };
};
