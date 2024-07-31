import { Radio } from 'antd'
import React from 'react'
import { QuestionsProps } from '../types'
import TextArea from 'antd/es/input/TextArea'


const QuestionAnswer: React.FC<QuestionsProps> = (props) => {

    const { onChange, question, options, value, error, detail, detailPlaceholder } = props
    return (
        <div className='question-radio mb-1'>
            <p className='text-s mt-2 mb-2'>{question}</p>
            <Radio.Group
                value={value?.selected}
                options={options}
                onChange={val => onChange({ ...value, selected: val.target.value })}
            />

            <div className={`flex flex-col w-2/4 my-5`}>
                <TextArea
                    rows={4}
                    placeholder={detailPlaceholder}
                    value={value?.detail}
                    onChange={e => onChange({ ...value, detail: e.target.value })}
                />
            </div>



            <p className='text-red-500 my-2 font-bold text-[10px] h-3'>{error}</p>
        </div>
    )
}

export default QuestionAnswer