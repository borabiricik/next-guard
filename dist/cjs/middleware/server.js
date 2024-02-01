"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextGuard = void 0;
var NextGuard = function () {
    var httpHandler = function () { };
    return {
        handlers: { GET: httpHandler, POST: httpHandler },
    };
};
exports.NextGuard = NextGuard;
//# sourceMappingURL=server.js.map