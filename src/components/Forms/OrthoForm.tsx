'use client'
import { ImageImports } from '@/assets/ImageImports'
import { Steps } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import OrthoQuestions from '../OrthoQuestions'
import OrthoProducts from './OrthoProducts'
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

    const { control, handleSubmit } = useForm()

    const [step, setStep] = useState(3)

    const orthoform = {
        2: <OrthoQuestions control={control} />,
        3: <OrthoProducts control={control} />
    }

    return (
        <div >
            <div className='custome-step flex justify-center '>
                <Steps
                    className='w-3/4'
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

            <form onSubmit={handleSubmit(data => console.log(data))}>
                {orthoform[step]}

                <button type='submit'>Submit</button>
            </form>
        </div >
    )
}

export default OrthoForm