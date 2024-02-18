import { RemoteRepository } from "../../domain/repository/RemoteRepository";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient, Session } from "@supabase/supabase-js";
import { UnexpectedError } from "../../domain/errors/UnexpectedError";
import { sha512 } from "js-sha512";

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
            password: sha512(password),
        });

        const { error: PostgresError } = await this.supabase.from("users").insert({
            full_name: fullName,
            phone_number: phoneNumber,
            email_address: emailAddress,
            password: sha512(password),
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
            password: sha512(password),
        });

        if (error) {
            throw new UnexpectedError();
        }

        return session;
    }
}
