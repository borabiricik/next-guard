interface NextGuardConfigProps {
  cookieName?: string
}

type NextGuardProps = NextGuardConfigProps

const NextGuard = (config: NextGuardProps) => {
  const httpHandler = () => {
    return config
  }
  return {
    handlers: {
      GET: httpHandler,
      POST: httpHandler,
    },
  }
}

export { NextGuard }
