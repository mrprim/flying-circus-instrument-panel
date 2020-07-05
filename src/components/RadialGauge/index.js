import React, { useCallback } from 'react'
import SvgWrapper from '../SvgWrapper'
import PieChart from '../SvgPieChart'
import PieSegment from '../SvgPieSegment'
import Spoke from '../SvgSpoke'
import useDoubleGaugeField from './useDoubleGaugeField'
import getPointOnCircle from '../../utils/getPointOnCircle'

const Spokes = props => {
  return (
    <>
      <Spoke angle={-18} {...props} strokeDasharray={[]} strokeWidth={0.015} />
      <Spoke angle={-18 + 36 * 1} {...props} />
      <Spoke angle={-18 + 36 * 2} {...props} />
      <Spoke angle={-18 + 36 * 3} {...props} />
      <Spoke angle={-18 + 36 * 4} {...props} />
      <Spoke angle={-18 + 36 * 5} {...props} />
      <Spoke angle={-18 + 36 * 6} {...props} />
      <Spoke angle={-18 + 36 * 7} {...props} />
      <Spoke angle={-18 + 36 * 8} {...props} />
      <Spoke angle={-18 + 36 * 9} {...props} />
    </>
  )
}

const Arrow = ({ angle = 0, radius, ...p }) => {
  const point = getPointOnCircle(angle, radius - 0.2)
  const startOuter = getPointOnCircle(angle - 8, radius)
  const endOuter = getPointOnCircle(angle + 8, radius)

  const pathData = [
    `M ${point.x} ${point.y}`,
    `L ${startOuter.x} ${startOuter.y}`,
    `A ${radius} ${radius} 0 0 1 ${endOuter.x} ${endOuter.y}`,
    'Z'
  ].join(' ')

  return <path stroke='black' strokeWidth='.02' fill='#344478' d={pathData} {...p} />
}

export default ({ name }) => {
  const { onesValue, tensValue, setOnesValue, setTensValue } = useDoubleGaugeField({ name })
  const onesClickHandler = useCallback(props => () => setOnesValue(props.index), [setOnesValue])
  const tensClickHandler = useCallback(props => () => setTensValue(props.index), [setTensValue])

  return (
    <SvgWrapper style={{ width: '300px' }}>
      <PieChart fill='#B7D4DD' innerRadius={0.45} offsetAngle={-18} radius={0.85} onClickHandler={onesClickHandler}>
        <PieSegment label={0} labelFontSize={0.16} />
        <PieSegment label={1} labelFontSize={0.16} />
        <PieSegment label={2} labelFontSize={0.16} />
        <PieSegment label={3} labelFontSize={0.16} />
        <PieSegment label={4} labelFontSize={0.16} />
        <PieSegment label={5} labelFontSize={0.16} />
        <PieSegment label={6} labelFontSize={0.16} />
        <PieSegment label={7} labelFontSize={0.16} />
        <PieSegment label={8} labelFontSize={0.16} />
        <PieSegment label={9} labelFontSize={0.16} />
      </PieChart>

      <circle r={0.85} stroke='black' strokeWidth='.04' fill='transparent' />
      <circle r={0.8} stroke='black' strokeWidth='.01' fill='transparent' />
      <circle r={0.775} stroke='black' strokeWidth='.01' fill='transparent' />

      <Arrow angle={onesValue * 36} radius={0.9} />

      <Spokes radius={0.85} innerRadius={0.45} stroke='black' strokeWidth={0.005} strokeDasharray={[0.03, 0.03]} />

      <PieChart fill='#B7D4DD' radius={0.45} offsetAngle={-18} onClickHandler={tensClickHandler}>
        <PieSegment label={0} labelRadius={0.3} />
        <PieSegment label={1} labelRadius={0.3} />
        <PieSegment label={2} labelRadius={0.3} />
        <PieSegment label={3} labelRadius={0.3} />
        <PieSegment label={4} labelRadius={0.3} />
        <PieSegment label={5} labelRadius={0.3} />
        <PieSegment label={6} labelRadius={0.3} />
        <PieSegment label={7} labelRadius={0.3} />
        <PieSegment label={8} labelRadius={0.3} />
        <PieSegment label={9} labelRadius={0.3} />
      </PieChart>

      <circle r={0.425} stroke='black' strokeWidth='.01' fill='transparent' />
      <circle r={0.45} stroke='black' strokeWidth='.01' fill='transparent' />
      <circle r={0.02} stroke='black' strokeWidth='.02' fill='transparent' />
      <circle r={0.04} stroke='black' strokeWidth='.01' fill='transparent' />

      <Spokes radius={0.425} stroke='black' strokeWidth='.005' strokeDasharray={[0.03, 0.03]} />

      <Arrow angle={tensValue * 36} radius={0.5} />

    </SvgWrapper>
  )
}
