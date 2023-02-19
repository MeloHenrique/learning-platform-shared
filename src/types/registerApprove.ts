
export class RegisterApprove {
    userId: string;
    role: number;
    approved: boolean;

    constructor(userId: string, role: number, approved: boolean ) {
        this.userId = userId;
        this.role = role;
        this.approved = approved;
    }
}
