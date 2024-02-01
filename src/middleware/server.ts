interface NextGuardConfigProps {
  cookieName?: string
}

type NextGuardProps = NextGuardConfigProps

const NextGuard = (config: NextGuardProps) => {
  const { cookieName = 'next-guard-cookie' } = config
  return Response.json({ cookieName })
}

export { NextGuard }
