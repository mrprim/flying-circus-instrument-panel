import React from 'react'
import { AmiableForm } from 'amiable-forms'
import RadialGauge from '../RadialGauge'
import './index.css'

export default () =>
  <div className='App'>
    <AmiableForm>
      <RadialGauge name='altitude' />
      <RadialGauge name='airSpeed' />
    </AmiableForm>
  </div>
