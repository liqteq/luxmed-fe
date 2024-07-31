import React from 'react'
import { questions } from '@/constants/orthoQuestions.json'
import { Control, Controller } from 'react-hook-form'
import Question from './FormItems/Question'

const OrthoQuestions: React.FC<{ control: Control }> = ({ control }) => {
    return (
        questions.map((que) => (
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
        ))
    )
}

export default OrthoQuestions