import { questions } from '@/constants/skinCareQuestions.json'
import React from 'react'
import { Controller } from 'react-hook-form'
import Question from '../FormItems/Question'
import { AestheticFormProps } from '../types'
import QuestionAnswer from '../FormItems/QuestionAnswer'

const AestheticForm: React.FC<AestheticFormProps> = (props) => {
    const { control } = props

    return (
        <div>
            <h4 className='font-bold'>Skin Care</h4>

            {questions.map(que => (
                <Controller
                    control={control}
                    render={({ field, fieldState }) =>
                        <QuestionAnswer
                            question={que.question}
                            options={que.options}
                            value={field.value}
                            onChange={(arg) => field.onChange(arg)}
                            error={fieldState.error?.message}
                            detailPlaceholder={que.detailPlaceholder}
                        />
                    }
                    name={que.name}
                    key={que.id}
                />
            ))}
        </div>
    )
}

export default AestheticForm