import React from 'react'
import Image from 'next/image'
import { skillSet } from '../_utilities/datafileds/SkillSet'

const Skill = () => {
    // Helper to get icon URL from Devicon or other sources
    const getIconUrl = (name: string) => {
        const lowerName = name.toLowerCase().replace('.', '').replace(' ', '');

        // Custom overrides for specific names
        const map: Record<string, string> = {
            'nextjs': 'nextjs/nextjs-original.svg',
            'tailwindcss': 'tailwindcss/tailwindcss-original.svg',
            'typescript': 'typescript/typescript-original.svg',
            'react': 'react/react-original.svg',
            'nodejs': 'nodejs/nodejs-original.svg',
            'express': 'express/express-original.svg',
            'python': 'python/python-original.svg',
            'mongodb': 'mongodb/mongodb-original.svg',
            'postgresql': 'postgresql/postgresql-original.svg',
            'mysql': 'mysql/mysql-original.svg',
            'aws': 'amazonwebservices/amazonwebservices-original-wordmark.svg',
            'docker': 'docker/docker-original.svg',
            'git': 'git/git-original.svg',
            'solidity': 'solidity/solidity-original.svg',
            'html5': 'html5/html5-original.svg',
            'css3': 'css3/css3-original.svg',
            'flask': 'flask/flask-original.svg',
        };

        const path = map[lowerName] || `${lowerName}/${lowerName}-original.svg`;
        return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {skillSet.map((category, index) => (
                <div key={index} className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                            {category.category}
                        </h3>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {category.skills.map((skill, i) => (
                            <div
                                key={i}
                                className="group flex flex-col items-center justify-center p-4 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/50 hover:bg-muted/50 transition-all duration-300 gap-3"
                            >
                                <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                                    <img
                                        src={getIconUrl(skill.name)}
                                        alt={skill.name}
                                        className="w-full h-full object-contain transition-all duration-300"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://www.svgrepo.com/show/512317/github-142.svg'; // Fallback icon
                                        }}
                                    />
                                </div>
                                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Skill
