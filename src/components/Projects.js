// Create your Projects component here

// import Project from '../assets/login.png';
// import data from '../data/projects.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const projectArr = [
    {
        "name" : "Dash Cam Speed Detector",
        "description" : "Convolutional neural network trained on frames from dash cam .MP4 footage to regress driver speed. Implemented dense optical flow to capture differences between frames. These mutated frames are then passed into the model.",
        "link" : "https://github.com/zainbaq/speedchallenge",
        "image" : require("../assets/images/speed_detector_image.png")
    },
    {
        "name" : "Project 2",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, \nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "link" : "https://github.com/"
    },
    {
        "name" : "Project 3",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, \nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "link" : "https://github.com/"
    }
]

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        initialSlide: 0,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
        {
          breakpoint: 600,
          settings: {
            infinite: false,
            initialSlide: 0,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


    return (
        <div id='projects' className='projects'>
            <div className="heading">
                <h2>PROJECTS</h2>
            </div>
                <div className="projects-container">
                    <Slider {...settings}>
                    {
                        projectArr.map((project, key) => {
                            return (
                                <div key={key} className="project">
                                    <div className="content">
                                        <img className="project-image" key={key} src={project.image} alt="Project"/>
                                        <h2 className="name">{project.name}</h2>
                                        {
                                            project.description.length > 130 
                                            ? <p className='description-min'>{project.description}</p>
                                            :  <p className='description'>{project.description}</p>                                            
                                        }
                                        {/* <div>
                                            <a
                                            className="project-button"
                                            target="_blank"
                                            href={project.link}
                                            rel="noreferrer"
                                            >GitHub
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                            )
                        })
                    }
                    </Slider>
                </div>
        </div>
    )
}

export default Projects;
