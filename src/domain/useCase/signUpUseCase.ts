import { RemoteRepository } from "../repository/RemoteRepository";
import { RemoteRepositoryImpl } from "../../data/RemoteDataSource/RemoteRepositoryImpl";

export class SignUpUseCase {
    private repository: RemoteRepository = new RemoteRepositoryImpl();

    async execute(fullName: string, phoneNumber: string, emailAddress: string, password: string) {
        return this.repository.signUp(fullName, phoneNumber, emailAddress, password);
    }
}
