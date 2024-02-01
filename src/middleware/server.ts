import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

interface NextGuardConfigProps {
  cookieName?: string
}

type NextGuardProps = NextGuardConfigProps

const NextGuard = (config: NextGuardProps) => {
  const httpHandler = (req: NextApiRequest) => {
    console.log({ req, config })
    return {
      handlers: {
        GET: httpHandler,
        POST: httpHandler,
      },
    }
  }
  return NextResponse.json(httpHandler)
}

export { NextGuard }
