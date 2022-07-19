
import { lightGray, quaternary, white } from "../../components/constants/colors";

export default function getStyles() {
    return {
        row: {
            display: 'flex',
            flexDirection: 'row'
        },
        column: {
            display: 'flex',
            flexDirection: 'column'
        },
        screen: {
            flex: 1,
            width: '100%',
            padding: 10,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: white
        },
        logo: {
        },
        userInfo: {
            width: '100%'
        },
        userRow: {
            flexDirection: 'column',
            padding: 20,
            marginBottom: 10,
            backgroundColor: lightGray
        },
        wrapText: {
            flexShrink: 1 
        },
        userKey: {
            fontSize: 15,
            marginBottom: 5,
            color: quaternary
        },
        userValue: {
            fontSize: 20,
        },
        btnContainer: {
            marginBottom: 40,
            width: '60%',
            alignItems: 'center'
        }
    };
};
