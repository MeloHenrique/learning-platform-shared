"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterApprove = void 0;
var RegisterApprove = /** @class */ (function () {
    function RegisterApprove(userId, userEmail, role, approved) {
        this.userId = userId;
        this.userEmail = userEmail;
        this.role = role;
        this.approved = approved;
    }
    return RegisterApprove;
}());
exports.RegisterApprove = RegisterApprove;
