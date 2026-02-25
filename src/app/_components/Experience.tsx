import React from 'react'
import { ExperienceData } from '../_utilities/datafileds/Experience'

const Experience = () => {
    return (
        <div className="space-y-8">
            {ExperienceData.map((data, index) => (
                <div key={index} className="relative pl-6 border-l border-primary/30 space-y-3">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary" />

                    <div className="space-y-1">
                        <h3 className="text-xl font-bold">{data.position}</h3>
                        <p className="text-primary font-semibold text-sm">{data.company}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {data.skills.map((skill, i) => (
                            <span key={i} className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground bg-muted px-2 py-0.5 rounded">
                                {skill}
                            </span>
                        ))}
                    </div>

                    <ul className="space-y-2">
                        {data.keypoint.map((point, i) => (
                            <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                                <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Experience