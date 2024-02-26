import { ChangePasswordUseCase } from "../../../domain/useCase/changePasswordUseCase";

export class ChangePasswordViewModel {
    private changePasswordUseCase = new ChangePasswordUseCase();

    async changePassword(email: string, newPassword: string) {
        return this.changePasswordUseCase.execute(email, newPassword);
    }
}
