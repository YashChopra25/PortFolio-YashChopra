import React from 'react'
import { skillSet } from '../datafileds/SkillSet'
const Skill = () => {
    return (
        <div>
            {
                skillSet.map((skill, index) => (
                    <div className='my-2' key={index}>
                        <h3 className='text-orange-400 uppercase text-lg font-semibold max-md:text-base' >{skill.category}</h3>
                        <div className='mt-1 flex gap-1 text-white/45 flex-wrap leading-5'>
                            {
                                skill.skilloption.map((skillName, index) => (
                                    <span className='capitalise' key={index}>{skillName},</span>
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
