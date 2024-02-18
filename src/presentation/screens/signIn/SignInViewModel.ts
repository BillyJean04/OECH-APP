import { SignInUseCase } from "../../../domain/useCase/signInUseCase";
import { GetExistedPasswordUseCase } from "../../../domain/useCase/getExistedPasswordUseCase";

export class SignInViewModel {
    private signInUseCase = new SignInUseCase();
    private getExistedPasswordUseCase = new GetExistedPasswordUseCase();

    async signIn(email: string, password: string, rememberPassword: boolean) {
        return this.signInUseCase.execute(email, password, rememberPassword);
    }

    async getExistedPassword() {
        return this.getExistedPasswordUseCase.execute();
    }
}
