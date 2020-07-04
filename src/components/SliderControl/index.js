import React, { useCallback } from 'react'
import { useField } from 'amiable-forms'
import Slider from '@material-ui/core/Slider'

export default ({ name, ...props }) => {
  const { value = 0, setValue } = useField({ name })

  const handleChange = useCallback((event, newValue) => {
    setValue(newValue)
  }, [setValue])
  return (

    <Slider
      value={value || 0}
      min={-1}
      max={1}
      step={0.000001}
      onChange={handleChange}
      {...props}
    />
  )
}
