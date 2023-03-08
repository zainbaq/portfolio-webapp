// import Avatar from '../assets/images/me2.jpg';


// const bio = "\nMy name is Zain, and I'm a born-and-bred New Yorker with a global perspective on software engineering. \nRaised in the UK and Pakistan, I bring a unique cultural and intellectual diversity to my work as a software engineer specializing in Artificial Intelligence and Data Science. I earned my degree in Machine Learning and AI from UC San Diego in 2019, and since then, I've been at the forefront of implementing and deploying cutting-edge software applications that leverage machine learning to drive results in a variety of industries. From Retail to Healthcare, I've developed algorithms for Natural Language Processing, Computer Vision, Business Analytics, and Machine Learning Operations, consistently exceeding expectations and driving business outcomes for my clients. \nI'm also passionate about sharing my knowledge and expertise in AI, which is why I've been creating informative Medium tutorials on the latest trends and techniques in Data Science and ML, which enables me to communicate my skills and ideas to others in a meaningful and impactful way. \nWhen I'm not working, you can find me playing chess, making music, playing football (soccer), or diving deep into my vast library of video games. \nFeel free to reach out using the buttons above!"
const bio = "I'm a professional software engineer with a global perspective on the uses of Machine Learning and AI.\nEngineering is my purpose, and specializing in Data, Machine Learning and AI allows me to build cool new things every day!\nWhen I'm not building software, you can find me playing chess, making music, playing football (soccer), or diving deep into my vast library of video games."
const About = () => {
    return (
        <div id="about" className="about">
            {/* <h1 className="about-heading">Welcome!<span className="cursor">&nbsp;</span></h1> */}
            <div className="about-info">
                <div className="about-desc">
                    {/* <img className="about-img" alt='avatar' src={Avatar} /> */}
                    {
                        bio.split("\n").map((paragraph) => {
                            console.log(paragraph)
                            return (
                                <p className="about-para">{paragraph}</p>
                                )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default About;