import Image from 'next/image';
import React from 'react';
import Page from "@/../public/404.svg"
const NotFound = () => {
    return (
        <div className='text-white flex items-center flex-col justify-center min-h-[calc(100vh-30vh)] gap-5'>
            <Image src={Page} alt="404 Error 0" />
            <span className='capitalize text-2xl font-black'>page Not Found
            </span>
        </div>
    )
}

export default NotFound