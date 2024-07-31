import React from 'react'
import { questions } from '@/constants/orthoQuestions.json'
import { Control, Controller } from 'react-hook-form'
import Question from './FormItems/Question'
import CustomButton from './UI/Button'

const OrthoQuestions: React.FC<{ control: Control }> = (props) => {
    return (
        <>
            {questions.map((que) => (
                <Controller
                    control={props?.control}
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
            <CustomButton onClick={() => { props?.setStep((prev) => Number(prev) - 1) }} btntype='gray' text='Back' addcss='px-10' />
            <CustomButton onClick={() => { props?.setStep((prev) => Number(prev) + 1) }} btntype='green' text='Next' addcss='px-10' />

        </>
    )
}

export default OrthoQuestions