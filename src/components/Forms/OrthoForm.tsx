'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import OrthoQuestions from '../OrthoQuestions'
import OrthoProducts from './OrthoProducts'
import { OrthoFormProps } from './types'


const OrthoForm: React.FC<OrthoFormProps> = (props) => {

    const { control, handleSubmit } = useForm()

    const [step, setStep] = useState(4)

    const orthoform = {
        3: <OrthoQuestions control={control} />,
        4: <OrthoProducts control={control} />
    }

    return (
        <div>
            <form onSubmit={handleSubmit(data => console.log(data))}>

                {orthoform[step]}
                {/* <button type='submit'>Submit</button> */}
            </form>
        </div>
    )
}

export default OrthoForm