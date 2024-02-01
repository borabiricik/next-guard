var NextGuard = function (config) {
    var _a = config.cookieName, cookieName = _a === void 0 ? 'next-guard-cookie' : _a;
    return Response.json({ cookieName: cookieName });
};
export { NextGuard };
//# sourceMappingURL=server.js.map