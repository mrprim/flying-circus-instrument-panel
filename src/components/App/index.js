import React from 'react'
import { AmiableForm, Debug } from 'amiable-forms'
import Dashboard from '../Dashboard'
import './index.css'

const initialValues = {
  altitude: 21,
  airSpeed: 13,
  boost: {
    4: 2,
    3: 3,
    2: 2,
    1: 3,
    0: 3
  },
  handling: {
    4: -8,
    3: -6,
    2: -7,
    1: -5,
    0: -4
  },
  stall: {
    4: 8,
    3: 7,
    2: 8,
    1: 6,
    0: 5
  }
}
export default () =>
  <div className='App'>
    <AmiableForm initialValues={initialValues}>
      <Dashboard />
      <Debug />
    </AmiableForm>
  </div>
