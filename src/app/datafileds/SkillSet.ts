export type skillType = {
    category: string;
    skilloption: string[];
}[]

export const skillSet: skillType = [
    {
        category: "Front-end Development",
        skilloption: [
            "React", "Next", "TailwindCSS", "HTML", "CSS", "BOOTSTRAP"]
    },
    {
        category: "Back-end Development",
        skilloption: [" Node", "Express", "Next"]
    },
    {
        category: "Databases",
        skilloption: ["AWS", "MySQL", "MongoDB", "PostgreSQL"]
    },
    {
        category: "Other",
        skilloption: ["NextAuth", "RESTful APIs", "Agile methodologies", "UI/UX design principles"]
    },
]