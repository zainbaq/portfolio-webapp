// Create your Skills component here

import ReactPlayer from "react-player"
import Slider from "react-slick";

export const musicArr = [
    {
        "name" : "Dash Cam Speed Detector",
        "description" : "Convolutional neural network trained on frames from dash cam .MP4 footage to regress driver speed. Implemented dense optical flow to capture differences between frames. These mutated frames are then passed into the model.",
        "link" : "https://soundcloud.com/zain-baq/ronin?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
        "name" : "Medical Machine Learning",
        "description" : "This repository consists of medically relevant predictive models. We aim to tackle multiple medical conditions separately in the hopes to ultimately develop an AI capable of making robust diagnoses.",
        "link" : "https://soundcloud.com/zain-baq/the-castle-in-the-sky?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
        "name" : "Medical Machine Learning",
        "description" : "This repository consists of medically relevant predictive models. We aim to tackle multiple medical conditions separately in the hopes to ultimately develop an AI capable of making robust diagnoses.",
        "link" : "https://soundcloud.com/zain-baq/the-castle-in-the-sky?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
        "name" : "Medical Machine Learning",
        "description" : "This repository consists of medically relevant predictive models. We aim to tackle multiple medical conditions separately in the hopes to ultimately develop an AI capable of making robust diagnoses.",
        "link" : "https://soundcloud.com/zain-baq/the-castle-in-the-sky?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    }
];

const Music = () => {

    const settings = {
        dots: false,
        infinite: true,
        initialSlide: 0,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
        {
          breakpoint: 600,
          settings: {
            infinite: true,
            autoplay: false,
            initialSlide: 0,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
        <div className="music">
            <div className="heading">
                <h2>Music</h2>
            </div>
            <div className="tracks-container">
                <Slider {...settings}>
                {
                    musicArr.map((track, key) => {
                        return (
                            <div className="player-container" key={key}>
                                {/* <h2 className="track-title">{track.name}</h2> */}
                                <ReactPlayer className="player" height={100} width={360}
                                    url={track.link}
                                />
                            </div>
                        )
                    })
                }
                </Slider>
            </div>
        </div>
    )
}

export default Music;