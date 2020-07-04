import React from 'react'
// import Gauge from './RadialGauge'
import { AmiableForm, useField } from 'amiable-forms'
import './index.css'
import Slider from '../SliderControl'
import SvgWrapper from '../SvgWrapper'
import PieChart from '../SvgPieChart'
import PieSegment from '../SvgPieSegment'

const Pie = () => {
  const { value: offset1 } = useField({ name: 'pie1_offset' })
  const { value: offset2 } = useField({ name: 'pie2_offset' })
  const { value: innerRadius1 } = useField({ name: 'pie1_innerRadius' })
  const { value: innerRadius2 } = useField({ name: 'pie2_innerRadius' })
  const { value: radius1 } = useField({ name: 'pie1_radius' })
  const { value: radius2 } = useField({ name: 'pie2_radius' })

  return (
    <SvgWrapper>
      <PieChart onClickHandler={props => () => console.log('a', props.value)} innerRadius={innerRadius1} offset={offset1}>
        <PieSegment value={1} />
        <PieSegment value={2} onClickHandler={props => () => console.log('b', props.value)} />
        <PieSegment value={1} />
      </PieChart>

      <PieChart radius={radius2} offset={offset2}>
        <PieSegment value={1} />
        <PieSegment value={2} onClick={() => console.log('BOOM')} />
        <PieSegment value={1} />
      </PieChart>
    </SvgWrapper>
  )
}

const Controls = ({ name }) =>
  <>
    <Slider name={name + '_offset'} />
    <Slider min={0} name={name + '_innerRadius'} />
    <Slider min={0} name={name + '_radius'} />
  </>

export default () =>
  <div className='App'>
    <AmiableForm>
      <Controls name='pie1' />
      <Controls name='pie2' />
      <Pie />
    </AmiableForm>
  </div>
