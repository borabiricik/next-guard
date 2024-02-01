interface NextGuardConfigProps {
    cookieName?: string;
}
type NextGuardProps = NextGuardConfigProps;
declare const NextGuard: (config: NextGuardProps) => {
    handlers: {
        GET: () => NextGuardConfigProps;
        POST: () => NextGuardConfigProps;
    };
};
export { NextGuard };
