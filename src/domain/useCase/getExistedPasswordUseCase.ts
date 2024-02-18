import { LocalRepository } from "../repository/LocalRepository";
import { LocalRepositoryImpl } from "../../data/LocalDataSource/LocalRepositoryImpl";

export class GetExistedPasswordUseCase {
    private localRepository: LocalRepository = new LocalRepositoryImpl();

    async execute() {
        return this.localRepository.getHashedPassword();
    }
}
