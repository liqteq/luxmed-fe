'use client'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import Question from './FormItems/Question'
import CustomButton from './UI/Button'

interface OrthoQuestionsProps {
    setStep?: React.Dispatch<React.SetStateAction<number>>,
    setSubmittedData?: React.Dispatch<React.SetStateAction<any>>,
    step?: number,
    submittedData?: any;
    questions: any[]
    type: 'orthopedic' | 'aesthetic'
}

const Questionaire: React.FC<OrthoQuestionsProps> = (props) => {
    const { control, handleSubmit, } = useForm()

    const handleNext = () => {
        handleSubmit((data) => {
            props?.setSubmittedData(prev => ({ ...prev, questionaire: { ...data, type: props?.type } }))
            props?.setStep((prev) => Number(prev) + 1)
        })()
    }
    return (
        <>
            {props?.questions.map((que, index) => (
                <Controller
                    control={control}
                    name={`${index}`}
                    key={index}
                    render={({ field, fieldState }) =>
                        <Question
                            key={index}
                            question={que.question}
                            options={que.options}
                            value={field.value}
                            onChange={(arg) => field.onChange(arg)}
                            error={fieldState.error?.message}
                        />
                    }
                    rules={que?.rules}
                />
            ))}

            <div className='w-full col-span-12 flex justify-end gap-3'>
                <CustomButton
                    onClick={() => { props?.setStep((prev) => Number(prev) - 1) }}
                    htmlType='submit'
                    btntype='gray'
                    text='Back'
                    addcss='px-10'
                />
                <CustomButton
                    btntype='green'
                    text='Next'
                    addcss='px-10'
                    type='submit'
                    onClick={handleNext}
                />
            </div>

        </>
    )
}

export default Questionaire