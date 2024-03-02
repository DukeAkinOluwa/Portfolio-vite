import { Link } from "react-router-dom"

const projectsInfo = [
    {
        title: "Edvantage",
        url: "https://dukeakinoluwa.github.io/edvantage-vite",
        img: "Edvantage",
        color: "#2A52BE"
    },
    {
        title: "BUESA-Library",
        url: "https://dukeakinoluwa.github.io/BUESA-Library",
        img: "BUESA-Library",
        color: "#E73C37"
    },
    {
        title: "LuxorGentleman",
        url: "https://dukeakinoluwa.github.io/LuxorGentleman",
        img: "Luxor-Gentleman",
        color: "#20046D"
    },
    {
        title: "The Imperial Dukes Store",
        url: "https://dukeakinoluwa.github.io/Imperial-Duke",
        img: "The-Imperial-Dukes-Store",
        color: "#FFFFFF"
    }
]
const skillsInfo = [
    {
        skill: "Javascript",
        years: 5,
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_215)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2887 6.05813L12.2887 2.30813C12.1041 2.2303 11.8959 2.2303 11.7113 2.30813L2.71125 6.05813C2.3982 6.18871 2.21176 6.51315 2.25656 6.84937L3.75656 18.0994C3.78932 18.3458 3.94206 18.56 4.16437 18.6712L11.6644 22.4212C11.8756 22.527 12.1244 22.527 12.3356 22.4212L19.8356 18.6712C20.0579 18.56 20.2107 18.3458 20.2434 18.0994L21.7434 6.84937C21.7882 6.51315 21.6018 6.18871 21.2887 6.05813ZM18.8091 17.5069L12 20.9119L5.19094 17.5069L3.81938 7.21875L12 3.81281L20.1806 7.21875L18.8091 17.5069ZM11.3438 7.88625L7.59375 14.6362C7.46379 14.8707 7.46879 15.1567 7.60686 15.3865C7.74493 15.6162 7.99509 15.7549 8.26311 15.7502C8.53113 15.7455 8.77629 15.5982 8.90625 15.3638L9.9375 13.5H14.0625L15.0938 15.3638C15.2237 15.5982 15.4689 15.7455 15.7369 15.7502C16.0049 15.7549 16.2551 15.6162 16.3931 15.3865C16.5312 15.1567 16.5362 14.8707 16.4062 14.6362L12.6562 7.88625C12.5242 7.64751 12.2728 7.49934 12 7.49934C11.7272 7.49934 11.4758 7.64751 11.3438 7.88625ZM13.2253 12H10.7747L12 9.79406L13.2253 12Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_1_215">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>`
    },
    {
        skill: "React",
        years: 3,
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_227)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.75 5.25H2.25C1.42157 5.25 0.75 5.92157 0.75 6.75V17.25C0.75 18.0784 1.42157 18.75 2.25 18.75H21.75C22.5784 18.75 23.25 18.0784 23.25 17.25V6.75C23.25 5.92157 22.5784 5.25 21.75 5.25ZM21.75 17.25H2.25V6.75H21.75V17.25ZM12 9.75V11.25H12.75C13.1642 11.25 13.5 11.5858 13.5 12C13.5 12.4142 13.1642 12.75 12.75 12.75H12V14.25H13.5C13.9142 14.25 14.25 14.5858 14.25 15C14.25 15.4142 13.9142 15.75 13.5 15.75H11.25C10.8358 15.75 10.5 15.4142 10.5 15V9C10.5 8.58579 10.8358 8.25 11.25 8.25H13.5C13.9142 8.25 14.25 8.58579 14.25 9C14.25 9.41421 13.9142 9.75 13.5 9.75H12ZM20.2219 9.20344L18.5344 15.2034C18.4433 15.5267 18.1484 15.75 17.8125 15.75C17.4766 15.75 17.1817 15.5267 17.0906 15.2034L15.4031 9.20344C15.2927 8.80546 15.5249 8.39314 15.9224 8.28111C16.3199 8.16908 16.7332 8.39951 16.8469 8.79656L17.8125 12.2297L18.7781 8.79656C18.8499 8.53765 19.0548 8.33693 19.3151 8.27038C19.5754 8.20383 19.8514 8.28162 20.0387 8.4743C20.226 8.66699 20.2958 8.94513 20.2219 9.20344ZM6 8.25H5.25C4.83579 8.25 4.5 8.58579 4.5 9V15C4.5 15.4142 4.83579 15.75 5.25 15.75H6C7.65685 15.75 9 14.4069 9 12.75V11.25C9 9.59315 7.65685 8.25 6 8.25ZM7.5 12.75C7.5 13.5784 6.82843 14.25 6 14.25V9.75C6.82843 9.75 7.5 10.4216 7.5 11.25V12.75Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_1_227">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>`
    },
    {
        skill: "SASS",
        years: 3,
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_239)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0625 9.25594L17.8125 3.25594C17.6705 3.09375 17.4656 3.00051 17.25 3H6.75C6.53443 3.00051 6.32951 3.09375 6.1875 3.25594L0.9375 9.25594C0.683778 9.54562 0.690666 9.98038 0.953438 10.2619L11.4534 21.5119C11.5953 21.6639 11.7939 21.7503 12.0019 21.7503C12.2098 21.7503 12.4085 21.6639 12.5503 21.5119L23.0503 10.2619C23.312 9.97941 23.3173 9.54466 23.0625 9.25594ZM20.8472 9H16.875L13.5 4.5H16.9097L20.8472 9ZM6.99188 10.5L9.81656 17.5622L3.22594 10.5H6.99188ZM15.3919 10.5L12 18.9806L8.60812 10.5H15.3919ZM9 9L12 4.99969L15 9H9ZM17.0081 10.5H20.7741L14.1834 17.5622L17.0081 10.5ZM7.09031 4.5H10.5L7.125 9H3.15281L7.09031 4.5Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_1_239">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>`
    },
    {
        skill: "Version Control",
        years: 3,
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_251)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 13.9978C22.5 15.5081 22.2028 16.8 21.6403 17.7328C20.9438 18.8888 19.8591 19.5 18.51 19.5C15.8906 19.5 14.0306 16.0312 12.0619 12.3544C10.4663 9.375 8.65781 6 6.9375 6C6.05813 6 5.06812 6.9375 4.28906 8.50031C3.46036 10.2157 3.02022 12.0928 3 13.9978C3 15.2353 3.22312 16.2591 3.645 16.9584C4.06687 17.6578 4.67062 18 5.49 18C6.9075 18 8.38219 15.6994 9.63656 13.4484C9.83849 13.086 10.296 12.9559 10.6584 13.1578C11.0209 13.3597 11.151 13.8173 10.9491 14.1797C9.51188 16.7541 7.78781 19.5 5.49 19.5C4.13906 19.5 3.0525 18.8888 2.35969 17.7328C1.79719 16.7953 1.5 15.5081 1.5 13.9978C1.5221 11.8611 2.01573 9.75571 2.94563 7.83187C4.01438 5.68312 5.43188 4.5 6.9375 4.5C9.55688 4.5 11.4159 7.96875 13.3856 11.6456C14.9803 14.625 16.7887 18 18.51 18C19.3294 18 19.9331 17.6597 20.355 16.9584C20.7769 16.2572 21 15.2353 21 13.9978C20.9801 12.0929 20.5402 10.2158 19.7119 8.50031C18.9375 6.9375 17.9428 6 17.0625 6C16.2787 6 15.405 6.70125 14.3897 8.145C14.2377 8.3697 13.9762 8.49479 13.7058 8.47212C13.4355 8.44945 13.1984 8.28256 13.086 8.03568C12.9735 7.7888 13.0031 7.50042 13.1634 7.28156C14.0072 6.08719 15.3197 4.5 17.0625 4.5C18.5672 4.5 19.9847 5.68312 21.0534 7.83187C21.9837 9.75563 22.4776 11.8611 22.5 13.9978Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_1_251">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>`
    },
    {
        skill: "HTML",
        years: 5,
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_251)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 13.9978C22.5 15.5081 22.2028 16.8 21.6403 17.7328C20.9438 18.8888 19.8591 19.5 18.51 19.5C15.8906 19.5 14.0306 16.0312 12.0619 12.3544C10.4663 9.375 8.65781 6 6.9375 6C6.05813 6 5.06812 6.9375 4.28906 8.50031C3.46036 10.2157 3.02022 12.0928 3 13.9978C3 15.2353 3.22312 16.2591 3.645 16.9584C4.06687 17.6578 4.67062 18 5.49 18C6.9075 18 8.38219 15.6994 9.63656 13.4484C9.83849 13.086 10.296 12.9559 10.6584 13.1578C11.0209 13.3597 11.151 13.8173 10.9491 14.1797C9.51188 16.7541 7.78781 19.5 5.49 19.5C4.13906 19.5 3.0525 18.8888 2.35969 17.7328C1.79719 16.7953 1.5 15.5081 1.5 13.9978C1.5221 11.8611 2.01573 9.75571 2.94563 7.83187C4.01438 5.68312 5.43188 4.5 6.9375 4.5C9.55688 4.5 11.4159 7.96875 13.3856 11.6456C14.9803 14.625 16.7887 18 18.51 18C19.3294 18 19.9331 17.6597 20.355 16.9584C20.7769 16.2572 21 15.2353 21 13.9978C20.9801 12.0929 20.5402 10.2158 19.7119 8.50031C18.9375 6.9375 17.9428 6 17.0625 6C16.2787 6 15.405 6.70125 14.3897 8.145C14.2377 8.3697 13.9762 8.49479 13.7058 8.47212C13.4355 8.44945 13.1984 8.28256 13.086 8.03568C12.9735 7.7888 13.0031 7.50042 13.1634 7.28156C14.0072 6.08719 15.3197 4.5 17.0625 4.5C18.5672 4.5 19.9847 5.68312 21.0534 7.83187C21.9837 9.75563 22.4776 11.8611 22.5 13.9978Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_1_251">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        `
    },
    {
        skill: "CSS",
        years: 5,
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_263)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.1053 8.34375L12.3553 3.09375C12.1335 2.97441 11.8665 2.97441 11.6447 3.09375L1.89469 8.34375C1.65294 8.47379 1.50156 8.7255 1.5 9V15C1.49984 15.2762 1.65147 15.5301 1.89469 15.6609L11.6447 20.9109C11.8665 21.0303 12.1335 21.0303 12.3553 20.9109L22.1053 15.6609C22.3485 15.5301 22.5002 15.2762 22.5 15V9C22.4984 8.7255 22.3471 8.47379 22.1053 8.34375ZM21 13.7447L17.7609 12L21 10.2553V13.7447ZM16.1784 11.1478L12.75 9.30188V5.00531L20.1684 9L16.1784 11.1478ZM12 13.3978L9.40312 12L12 10.6022L14.5969 12L12 13.3978ZM11.25 5.00531V9.30188L7.82156 11.1478L3.83156 9L11.25 5.00531ZM3 10.2553L6.23906 12L3 13.7447V10.2553ZM7.82156 12.8522L11.25 14.6981V18.9947L3.83156 15L7.82156 12.8522ZM12.75 18.9947V14.6981L16.1784 12.8522L20.1684 15L12.75 18.9947Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_1_263">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>`
    },
    {
        skill: "Responsive Design",
        years: 4,
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_381)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 1.5H7.5C6.25736 1.5 5.25 2.50736 5.25 3.75V20.25C5.25 21.4926 6.25736 22.5 7.5 22.5H16.5C17.7426 22.5 18.75 21.4926 18.75 20.25V3.75C18.75 2.50736 17.7426 1.5 16.5 1.5ZM6.75 6H17.25V18H6.75V6ZM7.5 3H16.5C16.9142 3 17.25 3.33579 17.25 3.75V4.5H6.75V3.75C6.75 3.33579 7.08579 3 7.5 3ZM16.5 21H7.5C7.08579 21 6.75 20.6642 6.75 20.25V19.5H17.25V20.25C17.25 20.6642 16.9142 21 16.5 21Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_1_381">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>`
    },
    {
        skill: "Axios",
        years: 1,
        svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_369)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.7443 6.61758 17.3824 2.25568 12 2.25ZM12 3.75C13.5984 3.7483 15.1625 4.21361 16.5 5.08875V6.9375L14.4216 9.35063L11.4712 9.75L11.4422 9.72937L9.59813 8.52375C9.26784 8.29109 8.85766 8.2015 8.46044 8.27526C8.06322 8.34902 7.71255 8.5799 7.48781 8.91562L5.52469 11.85C5.36115 12.0945 5.27312 12.3818 5.27156 12.6759L5.25 16.0725L4.94344 16.2741C3.40042 13.7265 3.35033 10.5451 4.81238 7.95021C6.27443 5.35535 9.0216 3.75 12 3.75ZM5.83969 17.4816L6.07594 17.3269C6.49493 17.0505 6.74793 16.5829 6.75 16.0809L6.76969 12.6844L8.73469 9.75C8.74431 9.75741 8.75433 9.76429 8.76469 9.77063L10.6088 10.9772C10.9178 11.1953 11.298 11.2881 11.6728 11.2369L14.625 10.8366C14.9891 10.788 15.3226 10.6075 15.5625 10.3294L17.6409 7.91437C17.8734 7.64204 18.0007 7.29554 18 6.9375V6.34406C20.0662 8.53007 20.7767 11.6685 19.8534 14.5312L18.3403 13.1475C17.9109 12.7533 17.2919 12.6436 16.7531 12.8663L13.8975 14.0522C13.4119 14.256 13.0678 14.6985 12.99 15.2194L12.7659 16.7372C12.6544 17.4936 13.1298 18.2129 13.8694 18.4069L15.8813 18.9375L16.1025 19.1597C12.7161 21.1027 8.43087 20.402 5.83969 17.4816ZM17.3438 18.2812L16.9406 17.8772C16.7526 17.6884 16.5177 17.5532 16.26 17.4853L14.25 16.9547L14.4741 15.4369L17.3288 14.25L19.2188 15.9825C18.737 16.8552 18.1019 17.634 17.3438 18.2812Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_1_369">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        `
    }
]

function Projects({info}){
    const linkUrl = info.url
    const imgUrl = `./Images/project-images/${info.img}.png`
    const title = info.title
    const lineColor = info.color
    return(
        <Link to={linkUrl} className="project" target="blank">
            <div className="project-image-cont" style={{border: `solid 2px ${lineColor}`}}>
                <img src={imgUrl} alt="pic" />
            </div>
            <h3>{title}</h3>
        </Link>
    )
}
function Skills({info}){
    const skill = info.skill
    const years = info.years
    const svg = info.svg
    return(
        <div className="skill">
            <div dangerouslySetInnerHTML={{ __html: svg}} />
            <div className="texts">
                <h3>{skill}</h3>
                <p>{years} years</p>
            </div>
        </div>
    )
}

export default function Home(){
    return(
        <div className="home">
            <div className="banner">
                <img src="./Images/Banner-Image.png" alt="pic" />
            </div>
            <section className="skills">
                <h2 className="header">Skills</h2>
                <div className="list">
                    {
                        skillsInfo ? 
                        skillsInfo.map((info, index) => (
                            <Skills info={info} key={index} />
                        )) : (
                            <></>
                        )
                    }
                </div>
            </section>
            <section className="projects">
                <h2 className="header">Projects</h2>
                <div className="list">
                    {
                        projectsInfo ? 
                        projectsInfo.map((info, index) => (
                            <Projects info={info} key={index} />
                        )) : (
                            <></>
                        )
                    }
                </div>
            </section>
        </div>
    )
}