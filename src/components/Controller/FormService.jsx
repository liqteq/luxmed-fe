import { Divider } from 'antd';
import { FormMap } from '../FormItems/FormItems';
const FormController = ({ fields = [], onSubmit, className, submitButton, Form, ...props }) => {
    const { control } = Form;

    return (
        <div className={`form-error-control ${className}`}>
            {fields?.map((field, index) =>
            (<div key={index} className={field?.span || "col-span-full"}>
                {
                    FormMap[field?.type]({ control, native: props, ...field })
                }
                {field?.divider && <Divider className={field?.dividerClassName || "my-3"} />}
            </div>))}
            {submitButton}

        </div>
    )
}

export default FormController;
