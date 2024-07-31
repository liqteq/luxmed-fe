'use client'
import { aestheticsProducts } from '@/constants/aestheticsProduct.json'
import { botoxProducts } from '@/constants/botoxProducts.json'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import CustomTable from './CustomTable'
import QuestionAnswer from './FormItems/QuestionAnswer'
import CustomButton from './UI/Button'

interface ProductsProps {
    type: 'orthopedic' | 'aesthetic'
    questions: any[]
    setStep?: React.Dispatch<React.SetStateAction<number>>,
    setSubmittedData?: React.Dispatch<React.SetStateAction<any>>,
    step?: number,
    submittedData?: any
    handleSubmit: () => void
}

const Products: React.FC<ProductsProps> = (props) => {
    const { control, handleSubmit } = useForm()

    const handleNext = () => {
        handleSubmit((data) => {
            props?.setSubmittedData((prev: any) => {
                return { ...prev, orthoQuestionaire: data }
            })
            props?.handleSubmit()
        })()
    }
    return (
        <div>
            <Controller
                control={control}
                render={({ field, fieldState }) =>
                    <CustomTable heading='Aesthetic Medicine' data={aestheticsProducts} onChange={field.onChange} />}
                name={'aesthetic-medicine'}
                key={'aesthetic-medicine'}
            />

            <Controller
                control={control}
                render={({ field, fieldState }) =>
                    <CustomTable heading='Botox Type Injections' data={botoxProducts} onChange={field.onChange} />
                }
                name={'botox-injections'}
                key={'botox-injections'}
            />


            <h4 className='font-bold my-3'>Skin Care</h4>

            {props?.questions.map(que => (
                <Controller
                    control={control}
                    render={({ field, fieldState }) =>
                        <>
                            <QuestionAnswer
                                key={que.id}
                                question={que.question}
                                options={que.options}
                                value={field.value}
                                onChange={(arg) => field.onChange(arg)}
                                error={fieldState.error?.message}
                                detailPlaceholder={que.detailPlaceholder}
                            />
                        </>
                    }
                    name={que.question}
                    key={`skinCare-${que.name}`}
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


        </div>
    )
}

export default Products