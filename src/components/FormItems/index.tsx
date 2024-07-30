import React from 'react'
import { Controller } from 'react-hook-form'
import { Input } from '../ui/input'
import { DatePickerControllerProps, TextControllerProps, SelectControllerProps } from './types'
import { DatePicker } from '../ui/datepicker'
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from '../ui/select'

export const TextInputController: React.FC<TextControllerProps> = (props) => {

    const {
        name,
        control,
        defaultValue,
        rules,
        inputProps,
    } = props


    return (
        <Controller
            key={name}
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={rules}
            render={({ field, fieldState }) => {
                const { value, onChange, } = field
                const { error } = fieldState
                return (
                    <Input
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        {...inputProps}
                    />
                )
            }}
        />
    )
}

export const DatePickerController: React.FC<DatePickerControllerProps> = (props) => {

    const {
        name,
        control,
        defaultValue,
        rules,
        datePickerProps,
    } = props


    return (
        <Controller
            key={name}
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={rules}
            render={({ field, fieldState }) => {
                const { value, onChange, } = field
                const { error } = fieldState
                return (
                    <DatePicker
                        value={value}
                        onChange={(e: any) => onChange(e)}
                        calendarProps={{ mode: 'single' }}
                        {...datePickerProps}
                    />
                )
            }}
        />
    )
}

export const SelectController: React.FC<SelectControllerProps> = (props) => {

    const {
        name,
        control,
        defaultValue,
        rules,
    } = props


    return (
        <Controller
            key={name}
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={rules}
            render={({ field, fieldState }) => {
                const { value, onChange, } = field
                const { error } = fieldState
                return (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a verified email to display" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="m@example.com">m@example.com</SelectItem>
                            <SelectItem value="m@google.com">m@google.com</SelectItem>
                            <SelectItem value="m@support.com">m@support.com</SelectItem>
                        </SelectContent>
                    </Select>
                )
            }}
        />
    )
}
