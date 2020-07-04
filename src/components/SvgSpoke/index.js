import React from 'react'
import getPointOnCircle from '../../utils/getPointOnCircle'

export default ({ angle = 0, innerRadius = 0, radius = 1, ...p }) => {
  const startOuter = getPointOnCircle(angle, radius)
  const startInner = getPointOnCircle(angle, innerRadius)

  const pathData = [
    `M ${startInner.x} ${startInner.y}`,
    `L ${startOuter.x} ${startOuter.y}`
  ].join(' ')

  return <path d={pathData} {...p} />
}
