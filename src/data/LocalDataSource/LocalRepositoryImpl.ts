import { LocalRepository } from "../../domain/repository/LocalRepository";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UnexpectedError } from "../../domain/errors/UnexpectedError";
import { sha512 } from "js-sha512";

export class LocalRepositoryImpl implements LocalRepository {
    async isAlreadySeenOnBoarding(): Promise<boolean> {
        try {
            return Boolean(await AsyncStorage.getItem("seenOnboarding"));
        } catch (error: unknown) {
            throw new UnexpectedError();
        }
    }

    async setIsAlreadySeenOnBoarding(): Promise<boolean> {
        try {
            await AsyncStorage.setItem("seenOnboarding", "false");
            return true;
        } catch (error: unknown) {
            throw new UnexpectedError();
        }
    }

    async hashAndSavePassword(password: string): Promise<void> {
        try {
            const hashedPassword = sha512(password);

            await AsyncStorage.setItem("password", hashedPassword);
        } catch (error) {
            throw new UnexpectedError();
        }
    }

    async getHashedPassword(): Promise<string | null> {
        try {
            return AsyncStorage.getItem("password");
        } catch (error) {
            throw new UnexpectedError();
        }
    }
}
