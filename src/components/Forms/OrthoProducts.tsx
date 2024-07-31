import React from 'react'
import CustomTable from '../CustomTable'
import QuestionAnswer from '../FormItems/QuestionAnswer'
import { aestheticsProducts } from '@/constants/aestheticsProduct.json'
import { botoxProducts } from '@/constants/botoxProducts.json'
import { questions } from '@/constants/skinCareQuestions.json'
import { Control, Controller } from 'react-hook-form'

const OrthoProducts: React.FC<{ control: Control }> = ({ control }) => {
    return (
        <div>
            <CustomTable heading='Aesthetic Medicine' data={aestheticsProducts} />
            <CustomTable heading='Aesthetic Medicine' data={botoxProducts} />

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
            ))}</div>
    )
}

export default OrthoProducts