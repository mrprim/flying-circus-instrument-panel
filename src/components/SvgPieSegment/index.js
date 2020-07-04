import React from 'react'
import getPointOnCircle from '../../utils/getPointOnCircle'

export default ({ offsetAngle = 0, angle = 0, innerRadius = 0, radius = 1, label, labelFontSize = 0.1, labelStyle = {}, labelRadius, style = {}, ...p }) => {
  const pointerEvents = !!p.onClick && 'fill'
  style = {
    pointerEvents,
    ...style
  }

  const startOuter = getPointOnCircle(offsetAngle, radius)
  const startInner = getPointOnCircle(offsetAngle, innerRadius)
  const endOuter = getPointOnCircle(offsetAngle + angle, radius)
  const endInner = getPointOnCircle(offsetAngle + angle, innerRadius)

  const largeArcFlag = angle > 180 ? 1 : 0

  const pathData = [
    `M ${startInner.x} ${startInner.y}`,
    `L ${startOuter.x} ${startOuter.y}`,
    `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endOuter.x} ${endOuter.y}`,
    `L ${endInner.x} ${endInner.y}`,
    `A ${innerRadius} ${innerRadius} 1 ${largeArcFlag} 0 ${startInner.x} ${startInner.y}`,
    'Z'
  ].join(' ')

  const labelPoint = getPointOnCircle(offsetAngle + (angle / 2), labelRadius || (radius / 2 + innerRadius / 2))

  return (
    <>
      <path d={pathData} style={style} {...p} />
      {label || label === 0 ? <text rotate='90' dominantBaseline='middle' textAnchor='middle' x={labelPoint.x} y={labelPoint.y - labelFontSize / 2} fontSize={labelFontSize}>{label}</text> : null}
    </>
  )
}
