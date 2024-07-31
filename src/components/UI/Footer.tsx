import React from 'react'
import { ImageImports } from '@/assets/ImageImports'
import Image from 'next/image'
import CustomButton from '@/components/UI/Button'
import Input from 'antd/es/input/Input'
const Footer: React.FC = () => {
    return (
        <div className='h-[50vh] bg-[#f7f7f7] flex flex-col justify-between'>
            <div className='grid grid-cols-12 justify-between items-center  '>
                <div className='col-span-4 px-10'>
                    <Image src={ImageImports?.logo} className='w-[120px] h-[120px]' alt={''} />
                    <p className='my-2 text-[13px]'>LUXMED uses cutting edge AI technology to drive patients to your practice</p>
                    <CustomButton btntype='green' text='Claim your free listing' addcss='mt-4'></CustomButton>
                </div>
                <div className='col-span-4 col-start-8 px-10'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[18px]'>Stay in Touch</p>
                        <div className='flex gap-2'>
                            <Input placeholder="Your email address" className='rounded-none text-[11px] ' />
                            <CustomButton btntype='lightGreen' text='Subscribe'></CustomButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-12   text-center p-2 bg-[white] text-black'>
                <p className='text-[9px]'>Copyright © 2024. All Rights Reserved.</p>
            </div>
        </div>
    )
}
export default Footer