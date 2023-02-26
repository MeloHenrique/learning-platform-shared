import {IUserRef} from "./userRef";

export class RegisterApprove {
    userRef: IUserRef;
    role: number;
    approved: boolean;

    constructor(userRef: IUserRef, role: number, approved: boolean ) {
        this.userRef = userRef;
        this.role = role;
        this.approved = approved;
    }
}
