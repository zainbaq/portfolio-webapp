// Create your Skills component here

import ReactPlayer from "react-player"
import Slider from "react-slick";

export const musicArr = [
    {
        "name" : "RONIN",
        "link" : "https://soundcloud.com/zain-baq/ronin?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
        "name" : "The Castle In The Sky",
        "link" : "https://soundcloud.com/zain-baq/the-castle-in-the-sky?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
        "name" : "Honing His Howl: Part One",
        "link" : "https://soundcloud.com/zain-baq/honing-his-howl-part-1-fiery-eyes?si=1cfe62736cc1446faa4969bd5e8a2adc&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
        "name" : "Ode To A Fallen Soldier",
        "link" : "https://soundcloud.com/zain-baq/ode-to-a-fallen-soldier-original-mix?si=645ebce0c05745bdbe390a8a45ba0479&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
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