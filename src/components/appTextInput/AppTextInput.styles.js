import { tertiary } from "../constants/colors";
export default function getStyles() {
    return {
        container: {
            backgroundColor: '#f9f9f9',
            borderRadius: 25,
            flexDirection: 'row',
            padding: 15,
            marginVertical: 10
        },
        icon: {
            marginRight: 10
        },
        input: {
            width: '80%',
            fontSize: 18,
            color: '#101010'
        }
    };
}
