import { ImageImports } from '@/assets/ImageImports';
import { AutoComplete as AntDAutoComplete, Checkbox as AntDCheckbox, DatePicker as AntDDatePicker, Radio as AntDRadio, Select as AntDSelect, Switch as AntDSwitch, Input, Rate, Space, TimePicker } from 'antd';
import Image from 'next/image';
import { Controller } from "react-hook-form";
const defaultFormType = 'antd'
const { TextArea } = Input

const getExternalProps = (type, fieldState, field = {}, props) => {
    const errorProps = {
        mui: {
            message: fieldState?.error?.message || 'Kindly enter value',
            status: fieldState?.error,
        },
        antd: {
            message: fieldState?.error?.message || 'Kindly enter value',
            status: fieldState?.error,
        }
    }
    if (type == 'mui')
        Object.assign(
            field,
            {
                disabled: props?.disabled || false,
                error: errorProps[type]?.status, className: errorProps[type]?.status ? 'applyError' : '',
                className: errorProps[type]?.status ? props?.className + ' applyError' : (props?.className || ''),
            })
    if (type == 'antd')
        Object.assign(
            field,
            {
                className: errorProps[type]?.status ? props?.className + ' applyError' : (props?.className || ''),
                disabled: props?.disabled || false
            })
    return errorProps[type]
}
const TextController = ({ defaultValue = null, fieldCss = "w-full", inputDivCss = 'items-start', labelCss = 'w-full', inputType, ...props }) => {
    const { divClassName = 'flex flex-col gap-1 w-full', } = props
    const typeToRender = props?.use || props?.native.formType || defaultFormType
    return (
        <Controller
            {...props}
            name={props?.name}
            key={props?.name}
            rules={props?.rules}
            control={props?.control}
            placeholder={props?.placeholder}
            defaultValue={defaultValue}

            render={({ field, fieldState }) => {
                const errorProps = getExternalProps(typeToRender, fieldState, field, props)
                const isError = errorProps?.status;

                const handleKeyDown = (event) => {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                    }
                };
                return (
                    <div className={`${divClassName}`}>
                        {props?.label && <span className={`text-[10px]  text-custom-gray-800   ${labelCss}`}>{props?.label}</span>}
                        <div className={`flex items-center gap-2 w-full`}>
                            <div className="flex flex-col gap-1 w-full ">
                                <Input
                                    {...field}
                                    type={inputType}
                                    placeholder={props?.placeholder}
                                    prefix={props?.icon || false}
                                    onKeyDown={handleKeyDown}
                                    maxLength={props?.maxLength || 250}
                                    showCount={props?.check || false}
                                    onChangeCounter={props?.onChangeCounter}
                                />
                                {errorProps?.status && <span style={{ color: "#D92D20", fontSize: "11px" }}> {errorProps?.message}</span>}
                            </div>
                            {props?.cross && <Image src={ImageImports.closeIcon} width={20} onClick={() => props?.crossFunc()} className="cursor-pointer" />}
                        </div>
                    </div>
                )
            }}
        />
    )
}
const TextAreaController = ({ defaultValue = null, fieldCss = "w-full   ", ...props }) => {

    const { divClassName = 'flex flex-col gap-1' } = props
    const TextFieldControl = {

        antd: TextArea
    }
    const typeToRender = props?.use || props?.native.formType || defaultFormType
    return (
        <Controller
            {...props}
            name={props?.name}
            key={props?.name}
            control={props?.control}
            placeholder={props?.placeholder}
            defaultValue={defaultValue}
            render={({ field, fieldState }) => {
                props?.onChange && props?.onChange(field?.value)
                const errorProps = getExternalProps(typeToRender, fieldState, field, props)
                return (
                    <div className={`${divClassName}`}>
                        {props?.label && <span className={`text-[10px] text-custom-gray-800 font-semibold ${props?.labelClassName}`}>{props?.label}</span>}
                        <div className={`flex flex-col gap-1 ${fieldCss}`}>
                            <TextArea
                                disabled={props?.disabled || false}
                                rows={props?.rows || 4}
                                maxLength={props?.maxLength || 250}
                                placeholder={props?.placeholder}
                                prefix={props?.icon || false}
                                defaultValue={props?.defaultValue}
                                showCount={props?.check || false}
                                onChangeCounter={props?.onChangeCounter}
                                {...field}
                            />
                            {errorProps?.status && <span style={{ color: "#D92D20", fontSize: "11px" }}> {errorProps?.message}</span>}
                        </div>
                    </div>
                )
            }}
        />
    )
}

const SelectController = ({ defaultValue = undefined, ...props }) => {
    const { divClassName = 'flex flex-col gap-1 w-full ' } = props
    return (
        <Controller
            {...props}
            name={props?.name}
            key={props?.name}
            control={props?.control}
            defaultValue={defaultValue}
            render={({ field, fieldState }) => {
                const errorProps = getExternalProps('antd', fieldState, field, props)
                const customOnChange = (e, { children } = {}) => {
                    props?.state && props?.state((prev) => ({ ...prev, [props.stateKey]: e }));
                    field?.onChange(e);
                    props?.userOnChange && props.userOnChange(e, children);
                    console.log(fieldState, field, props)
                };
                return (
                    <span className={divClassName}>
                        {props?.label && <span className={`text-[10px] text-custom-gray-800  ${props?.labelCss}`}>{props?.label}</span>}
                        <div className={`flex flex-col gap-1 w-full ${props?.requiredDev} items-start`}>
                            <div className={`flex items-center gap-3 border border-custom-gray-300 rounded-[6px] w-full  ${props?.mainDivCss}`}>
                                {props?.icon && <Image src={props?.icon} className="ml-[11px]" width={props?.iconWidth || 14} />}
                                <AntDSelect
                                    {...field}
                                    mode={props?.mode}
                                    className="w-full rounded-none"
                                    placeholder={props?.placeholder}
                                    onChange={customOnChange}
                                    allowClear={props?.allowClear || true}
                                    showSearch
                                    defaultValue={props?.defaultValue || undefined}
                                    filterOption={(inputValue, option) => option.children ? option.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1 : null}
                                    suffixIcon={<Image src={ImageImports?.arrowDown} className='h-[5px]' />}
                                >
                                    {props?.options && props?.options?.map(x => <AntDSelect.Option value={x?.value}>{x?.title}</AntDSelect.Option>)}
                                </AntDSelect>
                            </div>
                            {errorProps?.status && <span style={{ color: "#D92D20", fontSize: "11px" }}> {errorProps?.message}</span>}
                        </div>
                    </span >
                )
            }}
        />
    )
}
export const FormMap = {
    1: TextController,
    2: SelectController,
    11: TextAreaController,

}

