var NextGuard = function (config) {
    var httpHandler = function () {
        return config;
    };
    return {
        handlers: {
            GET: httpHandler,
            POST: httpHandler,
        },
    };
};
export { NextGuard };
//# sourceMappingURL=server.js.map