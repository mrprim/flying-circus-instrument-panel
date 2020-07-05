import React, { useCallback } from 'react'
import { useField } from 'amiable-forms'
import './index.scss'

const getClasses = (level, fuelValue) => {
  const classes = []
  if (level <= fuelValue) {
    classes.push('full')
  }
  if (level === (fuelValue || 0)) {
    classes.push('active')
  }
  return classes.join(' ')
}

const Row = ({ value, children }) => {
  const { value: fuelValue } = useField({ name: 'fuel' })

  return (
    <tr className={getClasses(value, fuelValue)}>
      {children}
    </tr>
  )
}

const FuelBarCell = ({ value }) => {
  const { setValue } = useField({ name: 'fuel' })
  const onClick = useCallback(() => setValue(value), [value, setValue])
  const classes = ['fuel-bar']
  if (value === 0) {
    classes.push('bottom')
  }
  if (value === 4) {
    classes.push('top')
  }

  return (
    <td className={classes.join(' ')} onClick={onClick}>
      <div />
    </td>
  )
}

export default () => {
  return (
    <table className='wet-stats-table'>
      <thead>
        <tr>
          <td className='spacer' />
          <td className='spacer' />
          <td className='spacer' />
          <th>Boost</th>
          <th>Handling</th>
          <th>Stall</th>
        </tr>
      </thead>
      <tbody>
        <Row value={4}>
          <FuelBarCell value={4} />
          <td className='spacer' />
          <th>
            <div>Full Load</div>
            <div>&nbsp;</div>
          </th>
          <td className='cell'>2</td>
          <td className='cell'>-8</td>
          <td className='cell'>8</td>
        </Row>
        <Row value={3}>
          <FuelBarCell value={3} />
          <td className='spacer' />
          <th>
            <div>Half Fuel</div>
            <div>Bombs</div>
          </th>
          <td className='cell'>3</td>
          <td className='cell'>-6</td>
          <td className='cell'>7</td>
        </Row>
        <Row value={2}>
          <FuelBarCell value={2} />

          <td className='spacer' />
          <th>
            <div>Full Fuel</div>
            <div>No Bombs</div>
          </th>
          <td className='cell'>2</td>
          <td className='cell'>-7</td>
          <td className='cell'>8</td>
        </Row>
        <Row value={1}>
          <FuelBarCell value={1} />

          <td className='spacer' />
          <th>
            <div>No Bombs</div>
            <div>Half Fuel</div>
          </th>
          <td className='cell'>3</td>
          <td className='cell'>-5</td>
          <td className='cell'>6</td>
        </Row>
        <Row value={0}>
          <FuelBarCell value={0} />

          <td className='spacer' />
          <th>
            <div>Empty</div>
            <div>&nbsp;</div>
          </th>
          <td className='cell'>3</td>
          <td className='cell'>-4</td>
          <td className='cell'>5</td>
        </Row>
      </tbody>
    </table>
  )
}
