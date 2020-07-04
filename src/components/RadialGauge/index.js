import React from 'react'
import { useField } from 'amiable-forms'
import SvgWrapper from '../SvgWrapper'
import PieChart from '../SvgPieChart'
import PieSegment from '../SvgPieSegment'
import Spoke from '../SvgSpoke'
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

export default ({ name }) => {
  // const { value, setValue } = useField({ name })

  return (
    <SvgWrapper style={{ width: '300px' }}>
      <PieChart fill='#B7D4DD' innerRadius={0.5} offsetAngle={-18} radius={0.85}>
        <PieSegment label={0} />
        <PieSegment label={1} />
        <PieSegment label={2} />
        <PieSegment label={3} />
        <PieSegment label={4} />
        <PieSegment label={5} />
        <PieSegment label={6} />
        <PieSegment label={7} />
        <PieSegment label={8} />
        <PieSegment label={9} />

      </PieChart>

      <circle r={0.85} stroke='black' strokeWidth='.04' fill='transparent' />
      <circle r={0.8} stroke='black' strokeWidth='.01' fill='transparent' />
      <circle r={0.775} stroke='black' strokeWidth='.01' fill='transparent' />
      <circle r={0.5} stroke='black' strokeWidth='.015' fill='transparent' />

      <Spokes radius={0.85} innerRadius={0.5} stroke='black' strokeWidth={0.005} strokeDasharray={[0.03, 0.03]} />

      <PieChart fill='#B7D4DD' radius={0.45} offsetAngle={-18}>
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

    </SvgWrapper>
  )
}
