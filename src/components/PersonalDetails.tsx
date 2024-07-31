import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import FormController from './Controller/FormController'
import CustomButton from './UI/Button'
import { PersonalDetailProps } from './Forms/types'

const PersonalDetails: React.FC<PersonalDetailProps> = (props) => {
    const Form = useForm()
    const fields = [
        { type: 1, name: 'firstName', label: 'First Name', estric: true, rules: { required: true, }, use: 'antd', className: "text-xs h-10 w-full bg-[#fafafa]   ", placeholder: "", span: "col-span-6", },
        { type: 1, name: 'lastName', label: 'Last Name', estric: true, rules: { required: true, }, use: 'antd', className: "text-xs h-10 w-full bg-[#fafafa]   ", placeholder: "", span: "col-span-6", },
        { type: 1, name: 'yourPosition', label: 'Your Position', estric: true, rules: { required: true, }, use: 'antd', className: "text-xs h-10 w-full bg-[#fafafa]   ", placeholder: "", span: "col-span-6", },
        { type: 1, name: 'noOfPractitioners', label: 'How many Practitioners', estric: true, rules: { required: true, }, use: 'antd', className: "text-xs h-10 w-full bg-[#fafafa]   ", placeholder: "", span: "col-span-6", },
        { type: 1, name: 'noOfLocation', label: 'How many Location', rules: { required: false, }, use: 'antd', className: "text-xs h-10 w-full bg-[#fafafa]  ", placeholder: "", span: "col-span-6", },
        { type: 1, name: 'websiteUrl', label: 'Website URL', rules: { required: false, }, use: 'antd', className: "text-xs h-10 w-full bg-[#fafafa]  ", placeholder: "", span: "col-span-6", },
    ]
    const handleSetValues = () => {
        if (props?.submittedData?.PersonalDetails) Object?.keys(props?.submittedData?.PersonalDetails)?.map((item, index) => {
            Form?.setValue(item, props?.submittedData?.PersonalDetails[item])
        })
    }
    console.log("🚀 ~ handleSetValues ~ props?.submittedData:", props?.submittedData)
    useEffect(() => {
        handleSetValues()
    }, [props?.step])
    return (
        <div>
            <FormController
                formType={'antd'}
                onSubmit={(val) => {
                    props?.setSubmittedData((prev) => { return { ...prev, PersonalDetails: val } })
                    props?.setStep((prev) => Number(prev) + 1)
                }}
                submitButton={
                    <div className='w-full col-span-12 flex justify-end'>
                        <CustomButton htmlType='submit' btntype='green' text='Next' addcss='px-10' />
                    </div>
                }
                Form={Form}
                className="grid grid-cols-12 gap-7 "
                fields={fields} />
        </div>
    )
}

export default PersonalDetails