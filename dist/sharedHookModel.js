"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedHookModel = void 0;
var SharedHookModel = /** @class */ (function () {
    function SharedHookModel(loading, error, data) {
        if (data === void 0) { data = undefined; }
        this.loading = loading;
        this.error = error;
        this.data = data;
    }
    return SharedHookModel;
}());
exports.SharedHookModel = SharedHookModel;
