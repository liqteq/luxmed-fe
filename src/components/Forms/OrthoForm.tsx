'use client'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import Question from '../FormItems/Question'
import { OrthoFormProps } from './types'
import { questions } from '@/constants/orthoQuestions.json'


const OrthoForm: React.FC<OrthoFormProps> = (props) => {

    const { control, handleSubmit } = useForm()

    return (
        <div>
            <form onSubmit={handleSubmit(data => console.log(data))}>
                {questions.map((que) => (
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
                            />
                        }
                        rules={que?.rules}
                    />
                ))}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default OrthoForm