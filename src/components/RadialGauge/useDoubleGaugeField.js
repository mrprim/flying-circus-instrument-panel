import { useField } from 'amiable-forms'
import { useCallback } from 'react'

export default ({ name }) => {
  const { value = 0, setValue } = useField({ name })
  const onesValue = Math.floor(value / 1 % 10) || 0
  const tensValue = Math.floor(value / 10 % 10) || 0

  const setOnesValue = useCallback(v => {
    setValue(tensValue * 10 + v)
  }, [tensValue, setValue])

  const setTensValue = useCallback(v => {
    setValue(v * 10 + onesValue)
  }, [onesValue, setValue])

  return {
    value,
    onesValue,
    tensValue,
    setOnesValue,
    setTensValue,
    setValue
  }
}
