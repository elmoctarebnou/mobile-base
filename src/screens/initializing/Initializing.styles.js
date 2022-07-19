
import { white } from "../../components/constants/colors";

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
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
};
