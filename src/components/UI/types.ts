import { ButtonProps } from "antd";

export interface CustomButtonProps extends ButtonProps {
    addcss?: string,
    children?: React.ReactNode,
    text: string,
    btntype?: 'green' | 'lightGreen' | 'default' | 'gray'
}