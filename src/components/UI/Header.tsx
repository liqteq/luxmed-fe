'use client'
import React from 'react'
import { ImageImports } from '@/assets/ImageImports'
import Image from 'next/image'
import CustomButton from '@/components/UI/Button'
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";
const Header: React.FC = () => {
    const { push } = useRouter();
    const pathname = usePathname()
    return (
        <div className='flex justify-between items-center px-10 py-3'>
            <Image src={ImageImports?.logo} className='h-[50px]' alt={''} />
            {
                pathname.includes('signup') ?
                    <CustomButton onClick={() => { pathname.includes('orthopedic') ? push('/home/orthopedic') : push('/home/aesthetic') }} text='Return to Home Page' addcss='border border-[#20655A] text-custom-primary-500 rounded-none'></CustomButton> : <div className='flex gap-2'>
                        <CustomButton btntype='gray' text='About Us'></CustomButton>
                        <CustomButton onClick={() => { pathname.includes('orthopedic') ? push('/signup/orthopedic') : push('/signup/aesthetic') }} btntype='green' text='Claim your free listing now!'></CustomButton>
                    </div>
            }

        </div>
    )
}
export default Header