import React from 'react'

const getCoordinatesForPercent = (percent, scale = 1) => {
  const x = Math.cos(2 * Math.PI * percent) * scale
  const y = Math.sin(2 * Math.PI * percent) * scale

  return { x, y }
}

export default ({ offset = 0, size = 0, innerRadius = 0, radius = 1, style = {}, ...p }) => {
  const pointerEvents = !!p.onClick && 'fill'
  style = {
    pointerEvents,
    ...style
  }

  const startOuter = getCoordinatesForPercent(offset, radius)
  const startInner = getCoordinatesForPercent(offset, innerRadius)
  const endOuter = getCoordinatesForPercent(offset + size, radius)
  const endInner = getCoordinatesForPercent(offset + size, innerRadius)

  const largeArcFlag = size > 0.5 ? 1 : 0

  const pathData = [
    `M ${startInner.x} ${startInner.y}`,
    `L ${startOuter.x} ${startOuter.y}`,
    `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endOuter.x} ${endOuter.y}`,
    `L ${endInner.x} ${endInner.y}`,
    `A ${innerRadius} ${innerRadius} 1 ${largeArcFlag} 0 ${startInner.x} ${startInner.y}`,
    'Z'
  ].join(' ')

  return <path d={pathData} style={style} {...p} />
}
