import React from 'react'
import { useField } from 'amiable-forms'
import SvgWrapper from './components/SvgWrapper'

const getCoordinatesForPercent = (percent, scale = 1) => {
  const x = Math.cos(2 * Math.PI * percent) * scale
  const y = Math.sin(2 * Math.PI * percent) * scale

  return { x, y }
}

const arcBaseStyle = {
  fill: 'white',
  stroke: 'black',
  strokeWidth: 0.01,
  pointerEvents: 'visible'
}

const getFillColor = (active, hover) => {
  if (active && hover) {
    return '#0F4975'
  }

  if (active && !hover) {
    return '#8BAAC2'
  }

  if (hover && !active) {
    return '#2099F5'
  }

  return '#DFEDF7'
}

const Arc = ({ setValue, setHover, start = 0, size = 0, innerScale = 0, outerScale = 1, active, hover }) => {
  const fill = getFillColor(active, hover)
  const style = { ...arcBaseStyle, fill }
  const startOuter = getCoordinatesForPercent(start, outerScale)
  const startInner = getCoordinatesForPercent(start, innerScale)
  const endOuter = getCoordinatesForPercent(start + size, outerScale)
  const endInner = getCoordinatesForPercent(start + size, outerScale)

  const largeArcFlag = size > 0.5 ? 1 : 0

  const pathData = [
    `M ${startInner.x} ${startInner.y}`,
    `L ${startOuter.x} ${startOuter.y}`,
    `A ${outerScale} ${outerScale} 0 ${largeArcFlag} 1 ${endOuter.x} ${endOuter.y}`,
    `L ${endInner.x} ${endInner.y}`,
    `A ${innerScale} ${innerScale} 0 ${largeArcFlag} 1 ${startInner.x} ${startInner.y}`,
    'Z'
  ].join(' ')

  return <path style={style} d={pathData} onClick={setValue} onMouseEnter={setHover} />
}

const Segments = ({ name, digit = 1, count, scale = 1 }) => {
  const { value, setValue } = useField({ name })
  const { value: hoverValue, setValue: setHover } = useField({ name: name + '_hover' })

  const dialValue = Math.floor(value / digit % 10)
  const dialHoverValue = Math.floor(hoverValue / digit % 10)

  const size = 1 / count

  let currentStart = 0
  return [...Array(count)].map((a, i) => {
    a = {
      start: currentStart,
      size,
      scale,
      hover: dialHoverValue >= i,
      active: dialValue >= i
    }
    const centerPoint = getCoordinatesForPercent(currentStart + size * 0.5, scale * 0.75)
    currentStart += a.size

    const updateValue = setter => () => {
      if (digit === 10) {
        return setter(i * digit)
      }

      return setter(Math.floor(value / 10) * 10 + i)
    }

    return (
      <g key={i}>
        <Arc {...a} setValue={updateValue(setValue)} setHover={updateValue(setHover)} cancelHover={() => updateValue(setHover)(0)} />
        <path stroke='green' />
        <text stroke='black' fontSize={0.12} x={centerPoint[0]} y={centerPoint[1]} rotate={`${360 * (0.25 + 1 / (count * 2))}`} style={{ textAnchor: 'middle', strokeWidth: 0.001 }}>
          {i}
        </text>
      </g>
    )
  })
}

export default ({ name, segments }) => {
  const rotation = 1 / (2 * segments)
  const outerScale = 0.8
  const innerScale = 0.45

  return (
    <div>
      <SvgWrapper style={{ transform: `rotate(-${0.25 + rotation}turn)` }}>
        <Segments name={name} count={segments} scale={outerScale} digit={1} />
        <circle cx='0' cy='0' r={outerScale} stroke='black' strokeWidth='.06' fill='transparent' />
        <circle cx='0' cy='0' r={outerScale - 0.05} stroke='black' strokeWidth='.01' fill='transparent' />
        <circle cx='0' cy='0' r={outerScale - 0.075} stroke='black' strokeWidth='.01' fill='transparent' />

        <Segments name={name} count={segments} scale={innerScale} digit={10} />
        <circle cx='0' cy='0' r={innerScale} stroke='black' strokeWidth='.01' fill='transparent' />
        <circle cx='0' cy='0' r={innerScale - 0.025} stroke='black' strokeWidth='.01' fill='transparent' />

      </SvgWrapper>
    </div>
  )
}
