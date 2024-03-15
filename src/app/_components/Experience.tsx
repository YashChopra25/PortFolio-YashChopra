import React from 'react'
import { ExperienceData } from '../datafileds/Experience'

const Experience = () => {
    return (
        <div>
            {
                ExperienceData.map(((data, index) => (
                    <div className='my-2' key={index}>
                        <h3 className='text-orange-400 uppercase text-2xl font-semibold max-md:text-base flex items-end gap-4'>{data.position}
                            <div className='flex gap-1 items-center justify-center'>
                                {data.skills.map((skill) => <h3 className='text-orange-400 capitalize text-xs font-semibold max-md:text-base'> {skill}  </h3>)}
                            </div>
                        </h3>

                        <h3 className='text-orange-400 uppercase text-lg font-semibold max-md:text-base'>{data.company}</h3>
                        <div className='mt-1 flex gap-1 text-white/70 flex-col flex-wrap leading-5 text-sm font-mono'>
                            {
                                data.keypoint.map((point, index) => (
                                    <span className='capitalise mt-1' key={index} ><span className='text-orange-400 '>{index + 1}.</span> {point}</span>
                                ))
                            }
                        </div>
                    </div>

                )))
            }

        </div>
    )
}

export default Experience