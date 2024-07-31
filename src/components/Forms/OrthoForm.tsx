'use client'
import { ImageImports } from '@/assets/ImageImports'
import { questions } from '@/constants/orthoQuestions.json'
import { questions as skQuestions } from '@/constants/skinCareQuestions.json'
import { Steps } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ClinicDetail from '../ClinicDetail'
import PersonalDetails from '../PersonalDetails'
import Products from '../Products'
import Questionaire from '../Questionaire'
import { OrthoFormProps } from './types'

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
const OrthoForm: React.FC<OrthoFormProps> = (props) => {
    const { control, } = useForm()
    const [submittedData, setSubmittedData] = useState({
    })
    const [step, setStep] = useState(0)

    const handleSubmit = () => {
        console.log(JSON.stringify(submittedData, null, 2))
    }

    const formType: Record<number, any> = {
        0: <PersonalDetails control={control} setStep={setStep} setSubmittedData={setSubmittedData} step={step} submittedData={submittedData} />,
        1: <ClinicDetail control={control} setStep={setStep} setSubmittedData={setSubmittedData} step={step} submittedData={submittedData} />,
        2: <Questionaire setStep={setStep} setSubmittedData={setSubmittedData} step={step} submittedData={submittedData} questions={questions} type={'orthopedic'} />,
        3: <Products setStep={setStep} setSubmittedData={setSubmittedData} step={step} submittedData={submittedData} questions={skQuestions} type={'orthopedic'} handleSubmit = {handleSubmit}/>
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
                {formType[step]}
            </div>
        </div>
    )
}

export default OrthoForm