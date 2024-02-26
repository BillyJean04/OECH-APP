import { Session } from "@supabase/supabase-js";

export interface RemoteRepository {
    signUp(fullName: string, phoneNumber: string, emailAddress: string, password: string): Promise<void>;
    signIn(emailAddress: string, password: string): Promise<Session | null>;
    sendOtpCode(email: string): Promise<void>;
    otpVerification(email: string, code: string): Promise<void>;
    changePassword(email: string, newPassword: string): Promise<void>;
}
