'use client'
import { ImageImports } from '@/assets/ImageImports'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import CustomButton from './UI/Button'
import { Modal } from 'antd'
import FormController from './Controller/FormController'
import { useForm } from 'react-hook-form'

const Congragulations: React.FC<any> = (props) => {
    const [modal, setModal] = useState(false)
    const Form = useForm()
    const fields = [
        { type: 1, name: 'name', label: 'Full Name', rules: { required: true, }, use: 'antd', className: "text-xs h-10 w-full bg-[rgba(102, 102, 102, 1)]  rounded-md ", span: "col-span-12", },
        { type: 1, name: 'email', label: 'Tel no.', rules: { required: true, }, use: 'antd', className: "text-xs h-10 w-full bg-[rgba(102, 102, 102, 1)]  rounded-md ", span: "col-span-12", },
        { type: 1, name: 'message', label: 'Email Address', rules: { required: true, }, use: 'antd', className: "text-xs h-10 w-full bg-[rgba(102, 102, 102, 1)] rounded-md ", span: "col-span-12", },
    ]
    useEffect(() => {
        Form?.reset()
    }, [modal])
    return (
        <div className='my-3'>
            <div className='flex gap-2'>
                <p className='text-[23px] font-semibold'>Congragulations</p>
                <Image src={ImageImports?.fireWork} alt='' />
            </div>
            <p className='my-3 mb-5 text-[13px] text-custom-gray-lightGray'>
                You have completed the first part of your profile. We will reach out to your clinic/practice in the near future and provide you with another link to start building your FREE online profile
            </p>
            <p className='my-3 mb-5 text-[13px] text-custom-gray-lightGray'>
                Considering referring up to 5 colleagues to LUXMED and have the possibility to be rewarded with free advertising opportunities.
            </p>
            <div className='flex justify-end gap-3 my-7'>
                <CustomButton onClick={() => { }} btntype='gray' text='Skip' addcss='px-10' />
                <CustomButton onClick={() => { setModal(true) }} btntype='green' text='Refer' addcss='px-10' />
            </div>
            {/* Modal */}
            <Modal width={400} title="" footer={null} open={modal} onCancel={() => { setModal(false) }}>
                <p className='text-[20px] my-3 font-semibold text-center'>Refer a Friend</p>
                <FormController
                    formType={'antd'}
                    onSubmit={(val) => { console.log({ val }) }}
                    submitButton={
                        <div className='col-span-12 flex gap-2 justify-end'>
                            <CustomButton onClick={() => { setModal(false) }} btntype='gray' text='Cancel' addcss='' />
                            <CustomButton onClick={() => { setModal(true) }} btntype='green' htmlType='submit' text='Submit' addcss='' />
                        </div>}
                    Form={Form}
                    className="grid grid-cols-12 gap-3 "
                    fields={fields} />
            </Modal>
        </div>
    )
}

export default Congragulations