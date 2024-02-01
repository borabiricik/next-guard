import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

interface NextGuardConfigProps {
  cookieName?: string
}

type NextGuardProps = NextGuardConfigProps

const NextGuard = (config: NextGuardProps) => {
  const httpHandler = (req: NextApiRequest) => {
    console.log({ req })
    return config
  }
  return NextResponse.json(httpHandler)
}

export { NextGuard }
