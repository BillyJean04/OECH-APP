import { SendOtpCodeUseCase } from "../../../domain/useCase/sendOtpCodeUseCase";

export class ForgotPasswordViewModel {
    private sendOtpCodeUseCase = new SendOtpCodeUseCase();

    async sendOtpCode(email: string) {
        return this.sendOtpCodeUseCase.execute(email);
    }
}
