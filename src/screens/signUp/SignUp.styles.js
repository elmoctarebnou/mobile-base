import { error, quaternary, tomato, white } from "../../components/constants/colors";

export default function getStyles() {
    return {
        safeAreaContainer: {
            flex: 1,
            backgroundColor: white
        },
        container: {
            flex: 1,
            alignItems: 'center'
        },
        title: {
            fontSize: 20,
            color: quaternary,
            fontWeight: '500',
            marginVertical: 15
        },
        footerButtonContainer: {
            marginVertical: 15,
            justifyContent: 'center',
            alignItems: 'center'
        },
        forgotPasswordButtonText: {
            color: tomato,
            fontSize: 18,
            fontWeight: '600'
        },
    };
}
