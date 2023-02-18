
export class RegisterApprove {
    userId: string;
    userEmail: string;
    role: number;
    approved: boolean;

    constructor(userId: string, userEmail: string, role: number, approved: boolean ) {
        this.userId = userId;
        this.userEmail = userEmail;
        this.role = role;
        this.approved = approved;
    }
}
