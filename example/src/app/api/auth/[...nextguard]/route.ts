import { NextGuard } from 'next-guard'

const handler = new NextGuard()

export { handler as GET, handler as POST }
