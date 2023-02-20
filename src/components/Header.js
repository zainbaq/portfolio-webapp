// Create your Header component here
import Resume from "../assets/resume.pdf"
import { AiOutlineHome } from "react-icons/ai";

const Header = () => {
    return (
        <div className="header">
                <div className="header-logo">
                    <a className="nav-item" href="#header"><i><AiOutlineHome/></i></a>
                </div>
                <div className="header-container">
                    <div className="nav-item"><a href="#about">About</a></div>
                    <div className="nav-item"><a href="#projects">Projects</a></div>
                    <div className="nav-item"><a href="#articles">Articles</a></div>
                    <div className="nav-item"><a href="#skills">Skills</a></div>
                    <div className="nav-item"><a href={Resume}>Resume</a></div>

                </div>
        </div>
    )
}

export default Header;