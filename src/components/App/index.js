import React from 'react'
import { AmiableForm, Debug } from 'amiable-forms'
import Dashboard from '../Dashboard'
import './index.css'

export default () =>
  <div className='App'>
    <AmiableForm>
      <Dashboard />
      <Debug />
    </AmiableForm>
  </div>
