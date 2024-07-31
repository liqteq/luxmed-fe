'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import OrthoQuestions from '../OrthoQuestions'
import OrthoProducts from './OrthoProducts'
import { OrthoFormProps } from './types'
import PersonalDetails from '../PersonalDetails'
import ClinicDetail from '../ClinicDetail'


const OrthoForm: React.FC<OrthoFormProps> = (props) => {
    const { control, handleSubmit } = useForm()
    const [submittedData, setSubmittedData] = useState({
    })
    console.log({ submittedData })
    const [step, setStep] = useState(1)
    const orthoform = {
        0: <PersonalDetails control={control} setStep={setStep} setSubmittedData={setSubmittedData} />,
        1: <ClinicDetail control={control} setStep={setStep} setSubmittedData={setSubmittedData} />,
        2: <OrthoQuestions control={control} setStep={setStep} setSubmittedData={setSubmittedData} />,
        3: <OrthoProducts control={control} setStep={setStep} setSubmittedData={setSubmittedData} />
    }

    return (
        <div className='flex justify-center'>
            <div className='w-[70%] my-[10px] '>
                <p className='font-bold text-[25px] my-3 mb-5'>LUXMED Sign Up Form</p>
                {orthoform[step]}
            </div>
        </div>
    )
}

export default OrthoForm