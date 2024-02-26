import { RemoteRepository } from "../repository/RemoteRepository";
import { RemoteRepositoryImpl } from "../../data/RemoteDataSource/RemoteRepositoryImpl";

export class ChangePasswordUseCase {
    private repository: RemoteRepository = new RemoteRepositoryImpl();

    async execute(email: string, newPassword: string) {
        return this.repository.changePassword(email, newPassword);
    }
}
