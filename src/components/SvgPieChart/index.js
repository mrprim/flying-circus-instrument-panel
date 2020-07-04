import React from 'react'

const defaultPalette = ['red', 'blue', 'green', 'purple']

const getTotalValue = children => {
  const t = children.reduce((total, c) => total + (c.props.value || 1), 0)

  return t >= 1 ? t : 1
}

export default props => {
  const {
    children,
    palette = defaultPalette,
    onClickHandler,
    innerRadius = 0,
    radius = 0.85,
    fill
  } = props

  const totalValue = getTotalValue(children)
  let offsetAngle = props.offsetAngle || 0
  const segments = children.map((segment, i) => {
    const angle = 360 * (segment.props.value || 1) / totalValue

    const nProps = {
      key: i,
      index: i,
      fill: segment.props.fill || fill || palette[i % defaultPalette.length],
      ...segment.props,
      innerRadius,
      radius,
      offsetAngle,
      angle
    }

    const clickHandler = segment.props.onClickHandler || onClickHandler
    if (clickHandler) {
      nProps.onClick = clickHandler(nProps)
    }
    delete nProps.onClickHandler

    offsetAngle += angle

    return React.cloneElement(segment, nProps)
  })
  return (
    <>
      {segments}
    </>
  )
}
