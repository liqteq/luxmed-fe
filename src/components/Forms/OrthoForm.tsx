'use client'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import CustomTable from '../CustomTable'
import { OrthoFormProps } from './types'
import { aestheticsProducts } from '@/constants/aestheticsProduct.json'
import { botoxProducts } from '@/constants/botoxProducts.json'
import { questions } from '@/constants/skinCareQuestions.json'
import Question from '../FormItems/Question'


const OrthoForm: React.FC<OrthoFormProps> = (props) => {

    const { control, handleSubmit } = useForm()

    return (
        <div>
            <form onSubmit={handleSubmit(data => console.log(data))}>
                {/* {questions.map((que) => (
                    <Controller
                        control={control}
                        name={que.name}
                        key={que.name}
                        render={({ field, fieldState }) =>
                            <Question
                                question={que.question}
                                options={que.options}
                                value={field.value}
                                onChange={(arg) => field.onChange(arg)}
                                error={fieldState.error?.message}
                                classname = {que?.classname}
                            />
                        }
                        rules={que?.rules}
                    />
                ))} */}
                <CustomTable heading='Aesthetic Medicine' data={aestheticsProducts} />
                <CustomTable heading='Aesthetic Medicine' data={botoxProducts} />

                <h4 className='font-bold'>Skin Care</h4>

                {questions.map(que => (
                    <Controller
                        control={control}
                        render={({ field, fieldState }) =>
                            <Question
                                question={que.question}
                                options={que.options}
                                value={field.value}
                                onChange={(arg) => field.onChange(arg)}
                                error={fieldState.error?.message}
                                detail={que.detail}
                                detailPlaceholder={que.detailPlaceholder}
                            />
                        }
                        name={que.name}
                        key={que.id}
                    />
                ))}
                {/* <button type='submit'>Submit</button> */}
            </form>
        </div>
    )
}

export default OrthoForm