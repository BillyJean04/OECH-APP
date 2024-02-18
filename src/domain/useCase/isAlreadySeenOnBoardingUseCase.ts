import {LocalRepository} from "../repository/LocalRepository";
import {LocalRepositoryImpl} from "../../data/LocalDataSource/LocalRepositoryImpl";

export class IsAlreadySeenOnBoardingUseCase {
    private repository: LocalRepository = new LocalRepositoryImpl();

    async execute() {
        return this.repository.isAlreadySeenOnBoarding();
    }
}