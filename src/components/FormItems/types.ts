import { Control, RegisterOptions } from "react-hook-form";

interface ControllerProps {
    name: string,
    control: Control,
    defaultValue?: any | null,
    rules?: Omit<RegisterOptions<any, any>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
}
