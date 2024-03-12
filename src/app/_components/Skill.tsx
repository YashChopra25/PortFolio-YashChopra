import React from 'react'
import { skillSet } from '../datafileds/SkillSet'
const Skill = () => {
    return (
        <div>
            {
                skillSet.map((skill) => (
                    <div className='my-2'>
                         <h3 className='text-orange-400 uppercase text-lg font-semibold max-md:text-base'>{skill.category}</h3>
                        <div className='mt-1 flex gap-1 text-white/45 flex-wrap leading-5'>
                            {
                                skill.skilloption.map((skillName) => (
                                    <span className='capitalise'>{skillName},</span>
                                ))
                            }
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Skill
