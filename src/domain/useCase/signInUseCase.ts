import { RemoteRepository } from "../repository/RemoteRepository";
import { RemoteRepositoryImpl } from "../../data/RemoteDataSource/RemoteRepositoryImpl";
import { LocalRepositoryImpl } from "../../data/LocalDataSource/LocalRepositoryImpl";

export class SignInUseCase {
    private remoteRepository: RemoteRepository = new RemoteRepositoryImpl();
    private localRepository: LocalRepositoryImpl = new LocalRepositoryImpl();

    async execute(email: string, password: string, rememberPassword: boolean) {
        if (rememberPassword) {
            await this.localRepository.hashAndSavePassword(password);
        }

        return this.remoteRepository.signIn(email, password);
    }
}
