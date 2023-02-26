import { IUserRef } from "./userRef";
export declare class RegisterApprove {
    userRef: IUserRef;
    role: number;
    approved: boolean;
    constructor(userRef: IUserRef, role: number, approved: boolean);
}
