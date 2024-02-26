import { SignInUseCase } from "../../../domain/useCase/signInUseCase";

export class SignInViewModel {
    private signInUseCase = new SignInUseCase();

    async signIn(email: string, password: string, rememberPassword: boolean) {
        return this.signInUseCase.execute(email, password, rememberPassword);
    }
}
