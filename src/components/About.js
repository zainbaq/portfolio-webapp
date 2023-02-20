// Create your About component here

import IMG from '../assets/images/Detective.png';

const bio = "Combines a strong mathematical mind with a philosophers heart. Naturally curious about our universe and its majestic phenomena. Dedicated to exploring the wonders of Artificial Intelligence."

const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">Hi, I'm Zain!</h1>
            <div className="about-info">
                <p className="about-desc">{bio}</p>
                <div className="about-img">
                    <div className="about-img-wrapper">
                        <img src={IMG} alt="Detective" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;