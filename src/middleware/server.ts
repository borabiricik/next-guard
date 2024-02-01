const NextGuard = () => {
  const httpHandler = () => {}

  return {
    handlers: { GET: httpHandler, POST: httpHandler },
  }
}

export { NextGuard }
