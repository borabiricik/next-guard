"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function NextGuard() {
    var httpHandler = function () { };
    return {
        handlers: { GET: httpHandler, POST: httpHandler },
    };
}
exports.default = NextGuard;
//# sourceMappingURL=server.js.map