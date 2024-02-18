export interface LocalRepository {
    isAlreadySeenOnBoarding(): Promise<boolean>;
    setIsAlreadySeenOnBoarding(): Promise<boolean>;
    hashAndSavePassword(password: string): Promise<void>;
    getHashedPassword(): Promise<string | null>;
}
