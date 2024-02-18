import { IsAlreadySeenOnBoardingUseCase } from "../../../domain/useCase/isAlreadySeenOnBoardingUseCase";
import { SetIsAlreadySeenOnBoardingUseCase } from "../../../domain/useCase/setIsAlreadySeenOnBoardingUseCase";

export class OnboardingViewModel {
    private isAlreadySeenOnBoardingUseCase = new IsAlreadySeenOnBoardingUseCase();
    private setIsAlreadySeenOnBoardingUseCase = new SetIsAlreadySeenOnBoardingUseCase();

    async isAlreadySeenOnBoarding() {
        return this.isAlreadySeenOnBoardingUseCase.execute();
    }

    async setIsAlreadySeenOnBoarding() {
        return this.setIsAlreadySeenOnBoardingUseCase.execute();
    }
}
