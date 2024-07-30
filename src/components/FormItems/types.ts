import { Control, RegisterOptions } from "react-hook-form";
import { InputProps } from "../ui/input";
import { DatePickerProps } from "../ui/datepicker";

interface ControllerProps {
    name: string,
    control: Control,
    defaultValue?: any | null,
    rules?: Omit<RegisterOptions<any, any>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
}
export interface TextControllerProps extends ControllerProps {
    inputProps?: InputProps,
}

export interface DatePickerControllerProps extends ControllerProps {
    datePickerProps?: DatePickerProps
}

export interface SelectControllerProps extends ControllerProps {
   
}