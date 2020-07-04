import React from 'react'
import './index.scss'

const defaultStyle = {
  width: '200px',
  transform: 'rotate(-0.25turn)'
}

export default ({ children, style, ...props }) =>
  <svg className='svg-wrapper' viewBox='-1 -1 2 2' {...props} style={{ ...defaultStyle, ...style }}>
    {children}
  </svg>
