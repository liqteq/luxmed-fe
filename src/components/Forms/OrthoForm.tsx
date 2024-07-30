'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import CustomTable from '../CustomTable'
import { OrthoFormProps } from './types'
import { aestheticsProducts } from '@/constants/aestheticsProduct.json'
import { botoxProducts } from '@/constants/botoxProducts.json'


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
                {/* <button type='submit'>Submit</button> */}
            </form>
        </div>
    )
}

export default OrthoForm