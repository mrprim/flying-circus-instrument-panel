import React from 'react'

const defaultPalette = ['red', 'blue', 'green', 'purple']

const getTotalValue = children => {
  const t = children.reduce((total, c) => total + c.props.value, 0)

  return t >= 1 ? t : 1
}

export default props => {
  const {
    children,
    palette = defaultPalette,
    onClickHandler,
    innerRadius = 0,
    radius = 0.85
  } = props

  const totalValue = getTotalValue(children)
  let offset = props.offset || 0
  const segments = children.map((segment, i) => {
    const size = segment.props.value / totalValue
    const nProps = {
      key: i,
      index: i,
      fill: segment.props.fill || palette[i % defaultPalette.length],
      ...segment.props,
      innerRadius,
      radius,
      offset,
      size
    }

    const clickHandler = segment.props.onClickHandler || onClickHandler
    if (clickHandler) {
      nProps.onClick = clickHandler(nProps)
    }
    delete nProps.onClickHandler

    offset += size

    return React.cloneElement(segment, nProps)
  })
  return (
    <>
      {segments}
    </>
  )
}
