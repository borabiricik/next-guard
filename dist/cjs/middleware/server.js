"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextGuard = void 0;
var server_1 = require("next/server");
var NextGuard = function (config) {
    var httpHandler = function (req) {
        console.log({ req: req, config: config });
        return {
            handlers: {
                GET: httpHandler,
                POST: httpHandler,
            },
        };
    };
    return server_1.NextResponse.json(httpHandler);
};
exports.NextGuard = NextGuard;
//# sourceMappingURL=server.js.map