import React from 'react'
import { CustomCheckBoxProps } from './types'
import { Checkbox } from 'antd'

const CustomCheckBox: React.FC<CustomCheckBoxProps> = (props) => {

  const { defaultValue = false, divClassName = 'flex items-center', label, onChangeVal, value, ...rest } = props

  return (

    <div>
      <Checkbox
        checked={value}
        onChange={(e) => onChangeVal(e.target.checked)}
        {...rest}
      >
        {label}
      </Checkbox>
    </div>

  )
}

export default CustomCheckBox