import React from 'react'
import { EducationData } from '../_utilities/datafileds/Education'

const Education = () => {
    return (
        <div className="space-y-8">
            {EducationData.map((data, index) => (
                <div key={index} className="relative pl-6 border-l border-primary/30 space-y-2">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary" />

                    <h3 className="text-xl font-bold">{data.from}</h3>

                    <div className="space-y-1">
                        {data.description.map((item, i) => (
                            <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Education