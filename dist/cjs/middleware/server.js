"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextGuard = void 0;
var NextGuard = function (config) {
    if (typeof config === 'function') {
        config = config();
    }
    return config;
};
exports.NextGuard = NextGuard;
//# sourceMappingURL=server.js.map