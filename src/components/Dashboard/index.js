import React from 'react'
import RadialGauge from '../RadialGauge'
import Grid from '@material-ui/core/Grid'
import WetStats from '../WetStats'
import './index.scss'

export default () =>
  <Grid container spacing={2}>
    <Grid item xs={12} md={3}>
      <RadialGauge name='altitude' />
      <div className='dashboard-label'>
        Altitude
      </div>
    </Grid>
    <Grid item xs={12} md={6}>
      <WetStats />
      <div className='dashboard-label'>
        Variable Stats
      </div>

    </Grid>
    <Grid item xs={12} md={3}>
      <RadialGauge name='airSpeed' />
      <div className='dashboard-label'>
        Air Speed
      </div>

    </Grid>
  </Grid>
