// Create your Projects component here

// import Project from '../assets/login.png';
// import data from '../data/projects.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOpenInNew } from 'react-icons/md';



export const projectArr = [
    {
        "name" : "Dash Cam Speed Detector",
        "description" : "Convolutional neural network trained on frames from dash cam .MP4 footage to regress driver speed. Implemented dense optical flow to capture differences between frames. These mutated frames are then passed into the model.",
        "link" : "https://github.com/zainbaq/speedchallenge",
        "image" : require("../assets/images/speed_detector_image.png")
    },
    {
        "name" : "Medical Machine Learning",
        "description" : "This repository consists of medically relevant predictive models. We aim to tackle multiple medical conditions separately in the hopes to ultimately develop an AI capable of making robust diagnoses.",
        "link" : "https://github.com/zainbaq/medical_ml",
        "image": require("../assets/images/mildDem12.jpg")
    },
    {
        "name" : "LSTM Musician",
        "description" : "Trained a recurrent neural network on a corpus of MIDI music data to predict the next MIDI token in a prepared sequence.",
        "link" : "https://github.com/zainbaq/lstm_musician",
        "image": require("../assets/images/pawel-czerwinski-eybM9n4yrpE-unsplash.jpg")
    }
]

const Projects = () => {
    const settings = {
        dots: false,
        infinite: true,
        initialSlide: 0,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
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
                <h2>My Side Projects</h2>
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
                                        <div>
                                            <a href={project.link} id="open-link-icon" target="_blank" rel="noreferrer" className="body-icons">Open Link<i><MdOpenInNew/></i></a>
                                        </div>
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
