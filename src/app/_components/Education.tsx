import React from 'react'
import { EducationData } from '../datafileds/Education'
const Education = () => {
    return (
        <div>
            {
                EducationData.map((data) => (
                    <div className='my-2'>
                        <h3 className='text-orange-400 uppercase text-lg font-semibold max-md:text-base'>{data.from}</h3>
                        <div className='mt-1 flex gap-1 text-white/45 flex-col flex-wrap leading-5 text-sm'>

                            {
                                data.description.map((item) => (
                                    <span className='capitalise'>{item}</span>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Education