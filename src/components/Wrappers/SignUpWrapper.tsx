'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import OrthoForm from '@/components/Forms/OrthoForm'
import AestheticForm from '@/components/Forms/AestheticForm'
import { SignUpWrapperProps } from './types'


const SignUpWrapper: React.FC<SignUpWrapperProps> = (props) => {
    const { control } = useForm()
        const pathname = usePathname()


    return (
        <div>
            {pathname.includes('orthopedic') ?
                <OrthoForm control={control} /> :
                <AestheticForm control={control} />
            }
        </div>
    )
}

export default SignUpWrapper