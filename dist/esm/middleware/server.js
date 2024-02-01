export default function NextGuard() {
    var httpHandler = function () { };
    return {
        handlers: { GET: httpHandler, POST: httpHandler },
    };
}
//# sourceMappingURL=server.js.map