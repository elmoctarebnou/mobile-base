import { statusBarHeight } from '../../utils/osStatusBar';
import { gray, green, lightGray, primary, quaternary, secondary, tertiary, white } from "../../components/constants/colors";

export default function getStyles() {
    return {
        screen: {
            flex: 1,
            backgroundColor: primary,
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        wrapText: {
            flex: 2,
            flexShrink: 1 
        },
        header: {
            width: '100%',
            height: statusBarHeight * 11,
            zIndex: 10,
            alignItems: 'center',
        },
        infoText: {
            color: quaternary 
        },
        clientName: {
            fontSize: 20,
            color: white,
            marginTop: statusBarHeight * 3
        },
        householdMetrics: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: white,
            borderRadius: 10,
            padding: 10,
            height: 145,
            position:'absolute', 
            top: statusBarHeight * 5,
            shadowColor: 'black',
            width: '80%'
        },
        totalValue: {
            fontSize: 30,
            marginTop: 5,
            fontWeight: 'bold' 
        },
        todayChanges: {
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'space-between',
        },
        todayMetrics: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        dayChange: {
            fontSize: 15,
            marginRight: 20
        },
        pctChange: {
            fontSize: 15,
        },
        main: {
            width: '100%',
            backgroundColor: white,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
        },
        accounts: {
            borderTopWidth: 1,
            borderTopColor: lightGray,
        },
        accountsTitle: {
            marginTop: statusBarHeight * 2,
            marginBottom: 15,
            fontSize: 25, 
            textAlign: 'center',
            fontWeight: 'bold'
        },
        account: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderBottomColor: lightGray,
            borderBottomWidth: 4,
        },
        accountInfo: {
            width: '55%'
        },
        accountName: {
            fontSize: 18,
        },
        accountType: {
            fontSize: 15,
            color: quaternary,
        },
        accountMetrics: {
            flex: 1,
            marginRight: 10
        },
        accountValue: {
            fontSize: 18,
            textAlign: 'right'
        },
    };
}