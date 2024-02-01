import { NextResponse } from 'next/server';
var NextGuard = function (config) {
    var httpHandler = function (req) {
        console.log({ req: req });
        return config;
    };
    return NextResponse.json(httpHandler);
};
export { NextGuard };
//# sourceMappingURL=server.js.map