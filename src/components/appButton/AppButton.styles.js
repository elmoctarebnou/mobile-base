import { lightBlue, primary, secondary } from "../constants/colors";

export default function getStyles() {
    return {
        button: {
            marginVertical: 10,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 15,
            width: '90%',
            backgroundColor: primary
        },
        buttonText: {
            color: 'white',
            fontSize: 18,
            fontWeight: '600',
            textTransform: 'uppercase'
        }
    };
}
