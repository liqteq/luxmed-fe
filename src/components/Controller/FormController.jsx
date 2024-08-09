
import React from 'react';
import { FormMap } from '../FormItems/FormItems';
import { Divider } from "antd";


const FormController = ({ fields = [], className, onSubmit, submitButton, Form, ...props }) => {
    const { handleSubmit, control } = Form;
    return (
        <form className={`form-error-control ${className}`} onSubmit={handleSubmit(onSubmit)}>
            {fields
                ?.map((field, index) =>
                (
                    <div key={index} className={field?.span || "col-span-full "}>
                        {
                            FormMap[field?.type]({ control, native: props, ...field })
                        }
                        {
                            field?.divider &&
                            <Divider className={field?.dividerClassName || "my-2"} />
                        }
                    </div>))}

            {submitButton}
        </form>
    )
}

export default FormController;
