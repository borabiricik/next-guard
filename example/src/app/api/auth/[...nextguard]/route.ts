import { NextGuard } from 'next-guard'
import { NextRequest, NextResponse } from 'next/server'

export const {
  handlers: { GET, POST },
} = NextGuard({})
