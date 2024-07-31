'use client'
import React from 'react'
import { ImageImports } from '@/assets/ImageImports'
import Image from 'next/image'
import CustomButton from '@/components/UI/Button'
import { usePathname } from "next/navigation";
const Header: React.FC = () => {
    const pathname = usePathname()
    return (
        <div className='flex justify-between items-center px-10 py-3'>
            <Image src={ImageImports?.logo} className='h-[50px]' alt={''} />
            {
                pathname.includes('signup') ?
                    <CustomButton text='Return to Home Page' addcss='border border-[#20655A] text-custom-primary-500 rounded-none'></CustomButton> : <div className='flex gap-2'>
                        <CustomButton btntype='gray' text='About Us'></CustomButton>
                        <CustomButton btntype='green' text='Claim your free listing now!'></CustomButton>
                    </div>
            }

        </div>
    )
}
export default Header