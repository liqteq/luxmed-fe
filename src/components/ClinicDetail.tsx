'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import FormController from './Controller/FormController'
import CustomButton from './UI/Button'
import { PersonalDetailProps } from './Forms/types'

const ClinicDetail: React.FC<PersonalDetailProps> = () => {
    const Form = useForm()
    const fields = [
        { type: 1, name: 'clinicName', label: "Clinic's Name", rules: { required: true, }, use: 'antd', className: "text-xs h-10 w-full bg-[#fafafa]   ", placeholder: "", span: "col-span-6", },
        { type: 1, name: 'address', label: 'Address', rules: { required: true, }, use: 'antd', className: "text-xs h-10 w-full bg-[#fafafa]   ", placeholder: "", span: "col-span-6", },
        { type: 1, name: 'city', label: 'City', rules: { required: true, }, use: 'antd', className: "text-xs h-10 w-full bg-[#fafafa]   ", placeholder: "", span: "col-span-6", },
        { type: 1, name: 'zipcode', label: 'Postal/Zip Code', rules: { required: true, }, use: 'antd', className: "text-xs h-10 w-full bg-[#fafafa]  ", placeholder: "", span: "col-span-6", },
        { type: 1, name: 'email', label: 'Email', rules: { required: true, }, use: 'antd', className: "text-xs h-10 w-full bg-[#fafafa]   ", placeholder: "", span: "col-span-6", },
        { type: 1, name: 'phone', label: 'Phone', rules: { required: true, }, use: 'antd', className: "text-xs h-10 w-full bg-[#fafafa]  ", placeholder: "", span: "col-span-6", },
        { type: 1, name: 'language', label: 'Language Spoken', rules: { required: true, }, use: 'antd', className: "text-xs h-10 w-full bg-[#fafafa]   ", placeholder: "", span: "col-span-6", },
        { type: 1, name: 'head_practitioner', label: 'Head Practitioner', rules: { required: true, }, use: 'antd', className: "text-xs h-10 w-full bg-[#fafafa]   ", placeholder: "", span: "col-span-6", },
        { type: 1, name: 'office_manager', label: 'Office Manager', rules: { required: true, }, use: 'antd', className: "text-xs h-10 w-full bg-[#fafafa]   ", placeholder: "", span: "col-span-6", },
        { type: 1, name: 'office_manager_emailAddress', label: "Office Manager's Email Address", rules: { required: true, }, use: 'antd', className: "text-xs h-10 w-full bg-[#fafafa]   ", placeholder: "", span: "col-span-6", },
        { type: 1, name: 'office_manager_telNo', label: "Office Manager's Tel no.", rules: { required: true, }, use: 'antd', className: "text-xs h-10 w-full bg-[#fafafa]  ", placeholder: "", span: "col-span-6", },
        { type: 1, name: 'purchasing_management', label: 'Purchasing Management', rules: { required: true, }, use: 'antd', className: "text-xs h-10 w-full bg-[#fafafa]  ", placeholder: "", span: "col-span-6", },
        { type: 1, name: 'purchasing_management_email', label: "Purchasing Management Email Address", rules: { required: true, }, use: 'antd', className: "text-xs h-10 w-full bg-[#fafafa]  ", placeholder: "", span: "col-span-6", },
        { type: 1, name: 'purchasing_management_telNo', label: "Purchasing Management Tel no.", rules: { required: true, }, use: 'antd', className: "text-xs h-10 w-full bg-[#fafafa]  ", placeholder: "", span: "col-span-6", },
    ]
    return (
        <div>
            <FormController
                formType={'antd'}
                onSubmit={(val) => { console.log({ val }) }}
                submitButton={
                    <div className='w-full col-span-12 flex justify-end gap-3'>
                        <CustomButton htmlType='submit' btntype='gray' text='Back' addcss='px-10' />
                        <CustomButton htmlType='submit' btntype='green' text='Next' addcss='px-10' />
                    </div>
                }
                Form={Form}
                className="grid grid-cols-12 gap-5"
                fields={fields} />
        </div>
    )
}

export default ClinicDetail