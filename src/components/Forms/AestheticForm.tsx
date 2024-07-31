'use client'
import { ImageImports } from '@/assets/ImageImports'
import { Steps } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import OrthoQuestions from '../OrthoQuestions'
import OrthoProducts from './OrthoProducts'
import { OrthoFormProps } from './types'
import PersonalDetails from '../PersonalDetails'
import ClinicDetail from '../ClinicDetail'

const Step = Steps.Step
const items = [
    {
        title: 'Personal Details',

    },
    {
        title: 'Clinic Details',

    },
    {
        title: 'Questionaire',

    },
    {
        title: 'Products',

    },
]
const AestheticForm: React.FC<OrthoFormProps> = (props) => {
    const { control, handleSubmit } = useForm()
    const [submittedData, setSubmittedData] = useState({
    })
    const [step, setStep] = useState(0)
    console.log("🚀 ~ step:", step)
    console.log("🚀 ~ submittedData:", submittedData)
    const orthoform = {
        0: <PersonalDetails control={control} setStep={setStep} setSubmittedData={setSubmittedData} step={step} submittedData={submittedData} />,
        1: <ClinicDetail control={control} setStep={setStep} setSubmittedData={setSubmittedData} step={step} submittedData={submittedData} />,
        2: <OrthoQuestions control={control} setStep={setStep} setSubmittedData={setSubmittedData} step={step} submittedData={submittedData} />,
        3: <OrthoProducts control={control} setStep={setStep} setSubmittedData={setSubmittedData} step={step} submittedData={submittedData} />
    }
    return (
        <div className='flex justify-center'>
            <div className='w-[70%] my-[10px] '>
                <p className='font-bold text-[25px] my-3 mb-5'>LUXMED Sign Up Form</p>
                <div className='custome-step flex justify-center my-7'>
                    <Steps
                        className='w-full'
                        iconPrefix="check-circled-outline"
                        current={step}
                    >
                        {items.map((item, index) => (
                            <Step
                                key={item.title}
                                title={item.title}
                                icon={
                                    index <= step ? (
                                        <Image src={ImageImports.CheckCircle} alt='' className='mt-1' />) : (
                                        <Image src={ImageImports.UnCheckCircle} alt='' className='mt-1' />
                                    )
                                }
                            />
                        ))}
                    </Steps>
                </div >
                {orthoform[step]}
            </div>
        </div>
    )
}

export default AestheticForm