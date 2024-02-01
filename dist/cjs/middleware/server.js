"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextGuard = void 0;
var NextGuard = function (config) {
    var _a = config.cookieName, cookieName = _a === void 0 ? 'next-guard-cookie' : _a;
    return Response.json({ cookieName: cookieName });
};
exports.NextGuard = NextGuard;
//# sourceMappingURL=server.js.map