import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
interface NextGuardConfigProps {
    cookieName?: string;
}
type NextGuardProps = NextGuardConfigProps;
declare const NextGuard: (config: NextGuardProps) => NextResponse<(req: NextApiRequest) => {
    handlers: {
        GET: any;
        POST: any;
    };
}>;
export { NextGuard };
