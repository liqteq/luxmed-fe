import { Control, RegisterOptions } from "react-hook-form";
import { CheckboxProps } from 'antd'
type ControllerProps = {
    name: string,
    control: Control,
    defaultValue?: any | null,
    rules?: Omit<RegisterOptions<any, any>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
}

export interface CustomCheckBoxProps extends CheckboxProps {
    defaultValue?: any;
    divClassName?: string;
    label: string;
    value: boolean;
    onChangeVal: (e: boolean) => void
}