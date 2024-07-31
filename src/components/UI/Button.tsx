import React from 'react'
import { CustomButtonProps } from '@/components/UI/types'
import { Button } from 'antd'
type ButtonClassType = {
    green: string,
    lightGreen: string,
    default: string,
    gray: string
}
const CustomButton: React.FC<CustomButtonProps> = (props) => {
    const { addcss = '', btntype = 'default', ...rest } = props
    const classes: ButtonClassType = {
        green: 'bg-custom-primary-500 text-white border-none rounded-none text-[11px]',
        gray: 'bg-custom-gray-700 text-black border-none rounded-none text-[11px]',
        lightGreen: "bg-custom-primary-lightGreen text-custom-primary-500 border-none rounded-none text-[11px]",
        default: 'text-[11px]',
    }

    return (
        <Button className={`${classes[btntype]} ${addcss}`} {...props}>{props?.text}</Button>
    )
}
export default CustomButton