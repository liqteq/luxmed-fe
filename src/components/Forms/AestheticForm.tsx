'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import OrthoQuestions from '../OrthoQuestions'
import OrthoProducts from './OrthoProducts'
import { OrthoFormProps } from './types'
import PersonalDetails from '../PersonalDetails'


const OrthoForm: React.FC<OrthoFormProps> = (props) => {

    const { control, handleSubmit } = useForm()

    const [step, setStep] = useState(1)

    const orthoform = {
        1: <PersonalDetails control={control} />,
        3: <OrthoQuestions control={control} />,
        4: <OrthoProducts control={control} />
    }

    return (
        <div>
            <form onSubmit={handleSubmit(data => console.log(data))} className='flex justify-center'>
                <div className='w-[70%] my-[20px] '>
                    <p className='font-bold text-[25px] my-3 mb-5'>LUXMED Sign Up Form</p>
                    {orthoform[step]}
                </div>
                {/* <button type='submit'>Submit</button> */}
            </form>
        </div>
    )
}

export default OrthoForm