import React from 'react'
import { FormControl, Input } from 'native-base'

function FormInput({ label, children, ...otherProps }) {
  return (
    <FormControl>
      <FormControl.Label
        _text={{ color: 'muted.700', textTransform: 'capitalize', fontSize: 'sm', fontWeight: 600 }}
      >
        {label}
      </FormControl.Label>
      <Input {...otherProps} _focus={{ borderColor: 'accent' }} />
      {children}
    </FormControl>
  )
}

export default FormInput