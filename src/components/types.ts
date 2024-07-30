import { Control } from "react-hook-form";


export interface SignUpWrapperProps {
    children?: React.ReactNode
}

export interface OrthoFormProps {
    control: Control
}
export interface AestheticFormProps {
    control: Control
}

export interface QuestionsProps {
    question: string;
    options: string[];
    value: string;
    error?: string;
    onChange: (arg: any) => void
}

export interface CustomTableProps {
    heading: string
}