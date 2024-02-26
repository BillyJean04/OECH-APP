import { RemoteRepository } from "../../domain/repository/RemoteRepository";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient, Session } from "@supabase/supabase-js";
import { UnexpectedError } from "../../domain/errors/UnexpectedError";

export class RemoteRepositoryImpl implements RemoteRepository {
    private supabaseUrl = "https://rtihkrdbkhmgzdyafyvq.supabase.co";
    private supabaseAnonKey =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0aWhrcmRia2htZ3pkeWFmeXZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4MTQ3MzUsImV4cCI6MjAyMzM5MDczNX0.5YZMOb_4g29ISE97PUMre3crvnoc9WMvbrZJrzuEi6I";
    supabase = createClient(this.supabaseUrl, this.supabaseAnonKey, {
        auth: {
            storage: AsyncStorage,
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: false,
        },
    });

    async signUp(fullName: string, phoneNumber: string, emailAddress: string, password: string): Promise<void> {
        const {
            data: { session },
            error: AuthError,
        } = await this.supabase.auth.signUp({
            email: emailAddress,
            password: password,
        });

        const { error: PostgresError } = await this.supabase.from("users").insert({
            full_name: fullName,
            phone_number: phoneNumber,
            email_address: emailAddress,
            password: password,
        });

        if (PostgresError || AuthError) {
            throw new UnexpectedError();
        }
    }
    async signIn(emailAddress: string, password: string): Promise<Session | null> {
        const {
            data: { session },
            error,
        } = await this.supabase.auth.signInWithPassword({
            email: emailAddress,
            password: password,
        });

        if (error) {
            throw new UnexpectedError();
        }

        return session;
    }

    async sendOtpCode(email: string) {
        const { error } = await this.supabase.auth.resetPasswordForEmail(email);

        console.log(error);
        if (error) {
            throw new UnexpectedError();
        }
    }

    async otpVerification(email: string, code: string) {
        const {
            data: { session },
            error,
        } = await this.supabase.auth.verifyOtp({
            email,
            token: code,
            type: "email",
        });

        if (error) {
            throw new UnexpectedError();
        }
    }

    async changePassword(email: string, newPassword: string) {
        const { error } = await this.supabase.auth.updateUser({
            password: newPassword,
        });

        const { error: PostgresError } = await this.supabase
            .from("users")
            .update({ password: newPassword })
            .eq("email_address", email);

        if (error) {
            throw new UnexpectedError();
        }
    }
}
