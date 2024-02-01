"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextGuard = exports.Dummy = void 0;
var tslib_1 = require("tslib");
var Dummy_1 = require("./components/Dummy");
Object.defineProperty(exports, "Dummy", { enumerable: true, get: function () { return Dummy_1.Dummy; } });
var server_1 = tslib_1.__importDefault(require("./middleware/server"));
exports.NextGuard = server_1.default;
//# sourceMappingURL=index.js.map