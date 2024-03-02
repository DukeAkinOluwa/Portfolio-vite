import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const features = [
    {
        title: "Organised Content",
        text: "Dive into our well-structured academic resource hub, intuitively sorted by course level and department."
    },
    {
        title: "Up-to-date Materials",
        text: "Stay ahead with our continually updated library, offering the latest lecture notes, textbooks, and resources."
    },
    {
        title: "Search Functionality",
        text: "Boost your learning journey with our efficient search feature, ensuring quick and precise discovery of courses, materials, or new subjects."
    }
]

function FeatureCard({features}){
    return(
        <div className="features-card">
            <div className="image"></div>
            <h3>{features.title}</h3>
            <p>{features.text}</p>
        </div>
    )
}

export default function LandingPage(){
    return(
        <div className="pages landing-page">
            <div className="landing-banner">
                <Navbar />
                <div className="left">
                    <div><h1>Where Knowledge Meets </h1><h1 className="highlight">Convenience</h1></div>
                    <p>Simplify Your Academic Journey with Seamless Resource Access</p>
                    <Link to="/Login" className="button button1">
                        Explore Library
                    </Link>
                </div>
            </div>
            <div className="key-features">
                <h2>Key Features</h2>
                <div className="features">
                    {
                        features ? (
                            features.map((feature, index) => (
                                <FeatureCard features={feature} key={index} />
                            ))
                        ) : (
                            <></>
                        )
                    }
                </div>
            </div>
            <Link to="/Login" className="button button1">Explore Library</Link>
            <div className="announcements">
                <div className="image">
                    <img src="./Images/Announcement-Image.png" alt="announcement"/>
                </div>
                <div className="announcement-card">
                    <div className="card-image">

                    </div>
                    <div className="texts">
                        <h2>Resumption Information 2023/2024</h2>
                        <h3>10/12/2024 . 10:00PM</h3>
                        <p>Stay ahead with our continually updated library, offering the latest lecture notes, textbooks, and resources., offering the latest lecture notes, textbooStay ahead with our continually updated library, offering the latest lecture notes, textbooks, and resources., offre notes, textbooks, and resources.rces., offering the latest lecture notes, textbooks, and resources.</p>
                        <Link to="">Read More</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}