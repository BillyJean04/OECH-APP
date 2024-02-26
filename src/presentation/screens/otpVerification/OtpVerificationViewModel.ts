import { OtpVerificationUseCase } from "../../../domain/useCase/otpVerificationUseCase";

export class OtpVerificationViewModel {
    private otpVerificationUseCase = new OtpVerificationUseCase();

    async otpVerification(email: string, code: string) {
        return this.otpVerificationUseCase.execute(email, code);
    }
}
