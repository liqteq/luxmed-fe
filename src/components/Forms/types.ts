import { Dispatch } from "@reduxjs/toolkit";
import { Control } from "react-hook-form";

export interface OrthoFormProps {
    control: Control
}
export interface AestheticFormProps {
    control: Control
}
export interface PersonalDetailProps {
    control: Control,
    setStep?: React.Dispatch<React.SetStateAction<number>>,
    setSubmittedData?: React.Dispatch<React.SetStateAction<any>>
}