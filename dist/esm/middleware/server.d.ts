interface NextGuardConfigProps {
    cookieName?: string;
}
type NextGuardProps = NextGuardConfigProps;
declare const NextGuard: (config: NextGuardProps) => Response;
export { NextGuard };
