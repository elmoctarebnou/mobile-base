
import { statusBarHeight } from "../../utils/osStatusBar";
import { lightBlue, lightGray, primary, quaternary, white } from "../../components/constants/colors";

export default function getStyles() {
    return {
        row: {
            flexDirection: 'row'
        },
        column: {
            flexDirection: 'column'
        },
        screen: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        wrapText: {
            flexShrink: 1 
        },
        support: {
            alignItems: 'center',
            position: 'absolute',
            top: statusBarHeight * 13,
            padding: 10,
            backgroundColor: white,
            width: '100%',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
        },
        title: {
            fontSize: 25,
            color: quaternary
        },
        serviceTeam: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
            justifyContent: 'space-around',
            marginTop: 20 
        },
        teamMember: {
            alignItems: 'center'
        },
        avatar: {
        },
        fullName: {
            marginTop: 5,
            fontSize: 20
        },
        contactUs: {
            flexDirection: 'column',
            width: '100%',
            marginTop: 30
        },
        contactUsTitle: {
            fontSize: 20,
            color: quaternary,
            marginBottom: 20,
            textAlign: 'center'
        },
        contactUsRow: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: lightGray,
            padding: 20,
            marginBottom: 10,
        },
        textValue: {
            marginLeft: 5
        }
    };
};
