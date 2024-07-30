'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { DatePickerController, SelectController, TextInputController } from './FormItems'
import { Button } from './ui/button'

const LoginForm: React.FC = () => {

    const { control, handleSubmit } = useForm()

    return (
        <div className=''>
            <form onSubmit={handleSubmit(data => console.log(data))}>
                <TextInputController
                    control={control}
                    name={'email'}
                    inputProps={{
                        label: "Email Address",
                        placeholder: "Enter your email",
                        className: 'max-w-96'
                    }}
                />
                <DatePickerController
                    control={control}
                    name={'dob'}
                    datePickerProps={{
                        placeholder: "Select your Dob",
                        label: "Date of Birth"
                    }}
                />
                <SelectController control={control} name={'Select'} />
                <Button variant={'secondary'} type='submit'>Login</Button>
            </form>


        </div>
    )
}

export default LoginForm