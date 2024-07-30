import { Radio } from 'antd'
import React from 'react'
import { QuestionsProps } from './types'


const Question: React.FC<QuestionsProps> = (props) => {

    const { onChange, question, options, value, error } = props
    return (
        <div className='question-radio mb-1'>
            <p className='text-s mt-2 mb-2'>{question}</p>
            <Radio.Group
                value={value}
                options={options}
                onChange={onChange}
            />
            <p className='text-red-500 my-2 font-bold text-[10px] h-3'>{error}</p>
        </div>
    )
}

export default Question