import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
interface NextGuardConfigProps {
    cookieName?: string;
}
type NextGuardProps = NextGuardConfigProps;
declare const NextGuard: (config: NextGuardProps) => {
    handlers: {
        GET: (req: NextApiRequest) => NextResponse<{
            req: NextApiRequest;
            config: NextGuardConfigProps;
        }>;
        POST: (req: NextApiRequest) => NextResponse<{
            req: NextApiRequest;
            config: NextGuardConfigProps;
        }>;
    };
};
export { NextGuard };
