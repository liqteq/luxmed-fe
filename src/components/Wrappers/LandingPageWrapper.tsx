'use client'
import { ImageImports } from '@/assets/ImageImports'
import CustomButton from '@/components/UI/Button'
import { url } from 'inspector'
import Image from 'next/image'
import React from 'react'
import FormController from '@/components/Controller/FormController'
import { useForm } from 'react-hook-form'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';
import VideoPlayer from '../VideoPlayer'

const Page: React.FC<any> = (props) => {
    const { push } = useRouter();
    const pathname = usePathname()
    const { children } = props
    const Form = useForm()
    const fields = [
        { type: 1, name: 'name', label: '', rules: { required: true, }, use: 'antd', className: "text-xs h-10 w-full bg-transparent  rounded-none text-white", placeholder: "Your Name", span: "col-span-12", },
        { type: 1, name: 'email', label: '', rules: { required: true, }, use: 'antd', className: "text-xs h-10 w-full bg-transparent  rounded-none text-white", placeholder: "Your Email", span: "col-span-12", },
        { type: 11, name: 'message', label: '', rules: { required: true, }, use: 'antd', className: "text-xs h-10 w-full bg-transparent rounded-none text-white", placeholder: "Share your thoughts", span: "col-span-12", },

    ]

    const onSubmitContactForm = async (data: any) => {
        const response = await fetch('/api/s3-upload', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        const res = await response.json()
        console.log("API RESPONSE", res)
    }


    return (
        <div className=''>
            <div className='flex justify-center'>
                {
                    pathname.includes('orthopedic') ?
                        <p className='text-[30px] my-2 w-[70%] font-bold text-center'>
                            Elevate and Grow Your <span className='text-custom-primary-500'> Orthopeadic, Sports Medicine </span> and <span className='text-custom-primary-500'> Pain Management Practice </span>with the Power of AI.
                        </p>
                        :
                        <p className='text-[30px] my-2 w-[70%] font-bold text-center'>
                            Utilize The power of AI to  elevate and Grow Your <span className='text-custom-primary-500'> Aesthetics Medicine, Dermatology </span>  &  <span className='text-custom-primary-500'>Plastic Surgery Practice</span>
                        </p>
                }
            </div>
            <p className='text-[13px] font-light text-center '>
                LUXMED – Where <span className='text-custom-primary-500'> Patients </span>From Around The World Find You, and You Find Success!
            </p>
            <div className='flex justify-center my-5'>
                <CustomButton onClick={() => { pathname.includes('orthopedic') ? push('/signup/orthopedic') : push('/signup/aesthetic') }} btntype='green' addcss='w-fit' text='Signup today for Free' />
            </div>
            <div className='flex justify-center my-6'>
                <VideoPlayer />
            </div>
            <div className='grid grid-cols-12 items-center my-10'>
                <div className='col-span-6  flex justify-center'>
                    <Image src={ImageImports?.phoneImage} alt='' className='h-[400px]' />
                </div>
                <div className='col-span-5 flex flex-col gap-4'>
                    <p className='bg-[#fef7e4] text-[#fec83a] p-2 text-[16px] rounded-md'>
                        Only $9.99 per successful patient acquisition
                    </p>
                    <p className='text-[30px] font-bold '>
                        Discover <span className='text-custom-primary-500'> Valuable </span>Customers
                    </p>
                    <p className='text-[13px] text-custom-primary-500 mb-1 font-bold'>
                        Brand Exposure
                    </p>
                    <p className='text-[13px] font-light '>
                        Showcase your company brand, products & services to travelling patients.
                    </p>
                    <p className='text-[13px] text-custom-primary-500 mb-1 font-bold'>
                        Instant Gradification
                    </p>
                    <p className='text-[13px] font-light '>
                        LUXMED delivers on-demand results for patients seeking immediate products and services. Let Lux Med show you how your practice can tap into this demand for instant gradification.
                    </p>
                    <CustomButton onClick={() => { pathname.includes('orthopedic') ? push('/signup/orthopedic') : push('/signup/aesthetic') }} btntype='green' addcss='w-fit' text='Claim your free listing' />
                </div>
            </div>
            <div>
                <p className='text-[30px] my-2  font-bold text-center'>
                    Get <span className='text-custom-primary-500'> Worldwide </span> Exposure
                </p>
                <p className='text-[13px] my-4  font-light text-center'>
                    LUXMED connects patients who are traveling to different countires with skilled doctors.
                </p>
                <Image src={ImageImports?.homeWorldExposure} alt='' />
            </div>

            <div className='grid grid-cols-12 my-5 px-10'>
                <div className='col-span-6'>
                    <p className='text-[30px] my-4 font-bold '>
                        Win-Win <span className='text-custom-primary-500'>Collaboration:</span> Ensuring Mutual Success
                    </p>
                    <div className='text-[12px] flex flex-col gap-3 text-custom-gray-lightGray'>
                        <p className='flex gap-1 items-center'><span className='h-[5px] w-[5px] rounded-full bg-custom-gray-lightGray'></span> LUXMED utilizes cutting-edge AI Technology</p>
                        <p className='flex gap-1 items-center'><span className='h-[5px] w-[5px] rounded-full bg-custom-gray-lightGray'></span> Get worldwide exposure for products & services being offered by your clinic</p>
                        <p className='flex gap-1 items-center'><span className='h-[5px] w-[5px] rounded-full bg-custom-gray-lightGray'></span> Deliver a premium expeirence for your existing and new patients</p>
                        <p className='flex gap-1 items-center'><span className='h-[5px] w-[5px] rounded-full bg-custom-gray-lightGray'></span> Innovative payment solutions, get paid before seeing your patient</p>
                        <p className='flex gap-1 items-center'><span className='h-[5px] w-[5px] rounded-full bg-custom-gray-lightGray'></span> Empowering connections and expanding buisness opportuinites</p>
                        <p className='flex gap-1 items-center'><span className='h-[5px] w-[5px] rounded-full bg-custom-gray-lightGray'></span> Allow patients to acess products sitting in your inventory without them expirying</p>
                    </div>
                    <CustomButton onClick={() => { pathname.includes('orthopedic') ? push('/signup/orthopedic') : push('/signup/aesthetic') }} btntype='green' addcss='my-4' text='Claim your free listing' />
                </div>
                <div className='col-span-6 flex justify-end'>
                    <Image src={'/Images/girlHome.png'} unoptimized alt='' className='h-[400px]' width={500} height={250} />
                </div>
            </div>
            <div className='greenLines grid grid-cols-12 gap-3 px-10 mt-5 h-[400px] items-center' >
                <p className='col-span-6 text-[40px] text-white font-semibold'>Share any feedback as to what types of features you think our app should have</p>
                <div className='col-span-6'>
                    <FormController
                        formType={'antd'}
                        onSubmit={onSubmitContactForm}
                        submitButton={<CustomButton htmlType='submit' text='Send Feedback' addcss='bg-white my-2 col-span-3 text-custom-primary-500 rounded-none' />}
                        Form={Form}
                        className="grid grid-cols-12 gap-3 homeForm"
                        fields={fields} />
                </div>
            </div>
            {children}
        </div>
    )
}
export default Page