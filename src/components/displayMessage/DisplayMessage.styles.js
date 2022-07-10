import { error } from "../../components/constants/colors";

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
        errorMessage: {
            backgroundColor: error,
            padding: 15,
            borderRadius: 25,
            width: '80%',
        }
    };
};
