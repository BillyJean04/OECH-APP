import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export class SendPackageViewModel {
    generateTrackingAddress() {
        return `R-${uuidv4()}`;
    }
}
