interface NextGuardConfigProps {
}
type NextGuardProps = NextGuardConfigProps | (() => NextGuardConfigProps);
declare const NextGuard: (config: NextGuardProps) => NextGuardProps;
export { NextGuard };
