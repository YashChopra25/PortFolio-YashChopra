import React from 'react'
import { ExperienceData } from '../_utilities/datafileds/Experience'

const Experience = () => {
    return (
        <div>
            {
                ExperienceData.map(((data, index) => (
                    <div className='my-2' key={index}>
                        <h3 className='text-orange-400 uppercase text-2xl font-semibold max-md:text-base flex items-end gap-4'>
                            {data.position}
                        </h3>
                        <div className='flex gap-1 items-start justify-end text-orange-400'>
                            {data.skills.map((skill, index) => <h3 className='capitalize text-xs font-semibold max-md:text-base' key={index}>
                                <span className='text-xs'>{skill}</span>
                            </h3>)}
                        </div>
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