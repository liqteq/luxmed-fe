'use client'
import { ImageImports } from '@/assets/ImageImports'
import { Modal, Steps } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Questionaire from '../Questionaire'
import Products from '../Products'
import { OrthoFormProps } from './types'
import PersonalDetails from '../PersonalDetails'
import ClinicDetail from '../ClinicDetail'
import Congragulations from '../Congragulations'
import { questions } from '@/constants/orthoQuestions.json'
import CustomButton from '../UI/Button'

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
    const { control } = useForm()
    const [modal, setModal] = useState(false)
    const [submittedData, setSubmittedData] = useState({
    })
    const [step, setStep] = useState(2)
    const handleSubmit = () => {
        setModal(true)
        console.log(JSON.stringify(submittedData, null, 2))
    }
    const formType: Record<number, any> = {
        0: <PersonalDetails control={control} setStep={setStep} setSubmittedData={setSubmittedData} step={step} submittedData={submittedData} />,
        1: <ClinicDetail control={control} setStep={setStep} setSubmittedData={setSubmittedData} step={step} submittedData={submittedData} />,
        2: <Questionaire setStep={setStep} setSubmittedData={setSubmittedData} step={step} submittedData={submittedData} questions={questions} type='aesthetic' />,
        3: <Products setStep={setStep} setSubmittedData={setSubmittedData} step={step} submittedData={submittedData} questions={questions} type='aesthetic' handleSubmit={handleSubmit} />,
        4: <Congragulations control={control} setStep={setStep} setSubmittedData={setSubmittedData} step={step} submittedData={submittedData} />

    }

    return (
        <div className='flex justify-center'>
            <div className='w-[70%] my-[10px] '>
                {
                    step !== 4 &&
                    <p className='font-bold text-[25px] my-3 mb-5'>LUXMED Sign Up Form</p>
                }
                {
                    step !== 4 &&
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
                }
                {formType[step]}
            </div>
            <Modal width={350} title="" footer={null} open={modal} onCancel={() => { }}>
                <div className='flex justify-center my-4'>
                    <Image src={ImageImports?.logo} alt='' className='h-[60px]' />
                </div>
                <p className='text-[11px] text-custom-gray-lightGray text-center my-7' >
                    Someone will reach out again to you shortly to assist you in filling out your business profile.
                </p>
                <div className='flex justify-center my-4'>
                    <CustomButton onClick={() => { setStep(4); setModal(false) }} btntype='green' text='Ok' addcss='px-7' />
                </div>
            </Modal>
        </div>
    )
}

export default AestheticForm