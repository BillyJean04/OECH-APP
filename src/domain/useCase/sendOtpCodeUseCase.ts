import { RemoteRepository } from "../repository/RemoteRepository";
import { RemoteRepositoryImpl } from "../../data/RemoteDataSource/RemoteRepositoryImpl";

export class SendOtpCodeUseCase {
    private repository: RemoteRepository = new RemoteRepositoryImpl();

    async execute(email: string) {
        return this.repository.sendOtpCode(email);
    }
}
