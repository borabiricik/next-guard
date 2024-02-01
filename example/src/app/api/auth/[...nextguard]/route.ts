import { NextGuard } from 'next-guard'
import { NextRequest, NextResponse } from 'next/server'

export function GET(req: NextRequest) {
  const response = NextGuard({})
  console.log({ response })

  return NextResponse.json(response)
}
