import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react'

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';
import { LuExternalLink } from 'react-icons/lu';
import { Total_Project } from '../_utilities/datafileds/Project';

export const metadata: Metadata = {
    title: 'Yash Chopra-Project',
};
const Project = () => {
    return (
        <div className='px-5 py-2 text-white grid grid-cols-2 grid-rows-1 gap-10 max-md:grid-cols-1 mb-10'>

            {
                Total_Project.map((Project) => (
                    <div className="px-3 py-3 border-2 border-white/50 bg-white/25 rounded-md flex flex-col gap-4" key={Project.id}>
                        <Link href={Project.Live_Project_url} target={Project.target}>
                            <Image src={Project.Imgsrc} alt="Youtube_project" className='border-2 border-orange-600 rounded-lg' />
                        </Link>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between items-center'>
                                <span className='text-orange-400 font-bold tracking-wide text-2xl capitalize'>{Project.Title}</span>
                                <div className='flex gap-5 items-center justify-center '>
                                    <Link href={Project.Github_Project_url} target={Project.target}>
                                        <FaGithub size={30} className='hover:cursor-pointer' />
                                    </Link>
                                    <Link href={Project.Live_Project_url} target={Project.target}>
                                        <LuExternalLink size={30} className='hover:cursor-pointer' />
                                    </Link>
                                </div>
                            </div>
                            <p className='text-xs flex items-center justify-normal gap-1 flex-wrap'>
                                {
                                    Project.Techniogy_used.map((Techs, index) => (
                                        <span className='text-orange-400 font-semibold capitalize tracking-wider' key={index}>{Techs}</span>

                                    ))
                                }
                            </p>
                            <div>
                                <p className='text-sm font-semibold text-justify'>{
                                    Project.description
                                }</p>
                            </div>
                        </div>

                    </div>
                ))
            }

        </div >
    )
}

export default Project