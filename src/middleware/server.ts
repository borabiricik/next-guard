interface NextGuardConfigProps {}

type NextGuardProps = NextGuardConfigProps | (() => NextGuardConfigProps)

const NextGuard = (config: NextGuardProps) => {
  if (typeof config === 'function') {
    config = config()
  }
  return config
}

export { NextGuard }
