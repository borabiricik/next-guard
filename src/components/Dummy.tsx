import React from 'react'

interface Props {
  name: string
}

const Dummy = ({ name }: Props) => {
  return <div>Name: {name}</div>
}

export { Dummy }
