import { SignUpUseCase } from "../../../domain/useCase/signUpUseCase";

export class SignUpViewModel {
    private signUpUseCase = new SignUpUseCase();

    async signUp(fullName: string, phoneNumber: string, emailAddress: string, password: string) {
        return this.signUpUseCase.execute(fullName, phoneNumber, emailAddress, password);
    }
}
