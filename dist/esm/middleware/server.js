import { NextResponse } from 'next/server';
var NextGuard = function (config) {
    var httpHandler = function (req) {
        console.log({ req: req, config: config });
        return NextResponse.json({ req: req, config: config });
    };
    return { handlers: { GET: httpHandler, POST: httpHandler } };
};
export { NextGuard };
//# sourceMappingURL=server.js.map