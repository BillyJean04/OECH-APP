import { RemoteRepository } from "../repository/RemoteRepository";
import { RemoteRepositoryImpl } from "../../data/RemoteDataSource/RemoteRepositoryImpl";

export class OtpVerificationUseCase {
    private repository: RemoteRepository = new RemoteRepositoryImpl();

    async execute(email: string, code: string) {
        return this.repository.otpVerification(email, code);
    }
}
