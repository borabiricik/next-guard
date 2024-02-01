interface NextGuardConfigProps {
  cookieName?: string
}

type NextGuardProps = NextGuardConfigProps

class NextGuard {
  constructor(props: NextGuardProps) {
    console.log({ props })
  }
}

export { NextGuard }
