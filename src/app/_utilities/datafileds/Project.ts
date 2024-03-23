import Youtube_Project from "@/../public/youtube_project.png"
import Firebase_Project from "@/../public/firebase_project.png"
import Blog_Project from "@/../public/blog_posting.png"
import PortFolio_project from "@/../public/PortFolio_project.png"
import { StaticImageData } from "next/image";
interface TypeProject {
    id: string;
    Imgsrc: StaticImageData;
    Live_Project_url: string;
    Github_Project_url: string;
    target: string;
    Title: string;
    Techniogy_used: string[];
    description: string;
}
export const Total_Project: TypeProject[] = [
    {
        id: "1",
        Imgsrc: Youtube_Project,
        Live_Project_url: "https://youtubeclone-devyash.vercel.app/",
        Github_Project_url: "https://github.com/YashChopra25/Youtube_Clone",
        target: "Responsive layout, Channel page, Search for videos and channels, Get videos of different category.",
        Title: "Youtube clone",
        Techniogy_used: [
            "React,", "TailwindCSS,", "JS"
        ],
        description: "The YouTube clone project is a web application created using React and essential libraries/tools like Axios for HTTP requests, Moment for date/time formatting, and React Router for navigation. It incorporates features such as video playback using React Player, search functionality, and interaction with videos. UI elements are styled using Tailwind CSS, and icons are included using React Icons. Testing utilities from Testing Library ensure code reliability. The project aims to mimic YouTube's core functionalities, including video browsing, playback, and user engagement, providing a familiar and seamless experience for users interacting with videos and related content."
    },
    {
        id: "2",
        Imgsrc: Firebase_Project,
        Live_Project_url: "https://firebaseappbyyash.vercel.app",
        Github_Project_url: "https://github.com/YashChopra25/Todo_list_using_Firebase",
        target: "_Firebase_Todo_App",
        Title: "Firebase todo app",
        Techniogy_used: [
            "Nextjs,", "Firebase,", "TailwindCSS"
        ],
        description: "Creating a Todo App involves more than just building a simple task management system.It encompasses designing a user- friendly interface, implementing efficient data management, ensuring real - time updates, handling user authentication, and deploying the application securely.In this detailed discussion, we'll explore each aspect in-depth, focusing on the technologies mentioned in the project's dependencies: React, Next.js, Firebase, and React Toastify."
    },
    {
        id: "3",
        Imgsrc: Blog_Project,
        Live_Project_url: "https://blogpostingproject-devyash.vercel.app/",
        Github_Project_url: "https://github.com/YashChopra25/blogpostingproject",
        target: "_blog",
        Title: "Blog posting app",
        Techniogy_used: [
            "React,", "Appwrite,", "React-Hook-Form"
        ],
        description: "Our Blog Posting App is a comprehensive platform designed to streamline the process of creating, managing, and sharing blog content. Leveraging a powerful tech stack including React, Redux Toolkit, Appwrite, and essential libraries, this app offers a range of features to enhance user experience and productivity."
    },
    {
        id: "4",
        Imgsrc: PortFolio_project,
        Live_Project_url: "https://yashchopraportfolio.vercel.app/",
        Github_Project_url: "https://github.com/YashChopra25/PortFolio-YashChopra",
        target: "_portfolio_yash",
        Title: "Yash Chopra-Portfolio",
        Techniogy_used: [
            "Nextjs,", "React-Hook-Form,", "Chakra UI"
        ],
        description: " Full Stack Developer Skilled In Front-End Technologies Like React.Js,Nextjs, HTML, CSS, JavaScript And Back-End Technologies Such As Node.Js,Express.Js And Databases Like MongoDB,MySQL. Proficient In Programming And Passionate About Creating Efficient, User-Friendly Web Applications. Constantly Learning And Adapting To New Technologies To Stay Ahead In The Ever-Evolving Tech Landscape."
    }
]