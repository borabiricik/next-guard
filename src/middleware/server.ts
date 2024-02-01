export default function NextGuard() {
  const httpHandler = () => {}

  return {
    handlers: { GET: httpHandler, POST: httpHandler },
  }
}
