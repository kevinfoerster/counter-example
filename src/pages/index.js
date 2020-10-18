import React, { useState } from 'react'
import cx from 'classnames'
import '../utils/global.css'
import Button from '../components/Button'
import Number from '../components/Number'

export default function Home() {
  const [count, setCount] = useState(5)

  const addCount = () => setCount(count + 1)
  const subtractCount = () => setCount(count - 1)
  const lowerLimit = 0
  const upperLimit = 10
  return (
    <div
      style={{
        display: 'flex',
        width: '200px',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Button onClick={subtractCount} disabled={count === lowerLimit}>
        -
      </Button>

      <Number value={count} />

      <Button onClick={addCount} disabled={count === upperLimit}>
        +
      </Button>
    </div>
  )
}
