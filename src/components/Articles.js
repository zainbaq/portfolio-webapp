import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOpenInNew } from 'react-icons/md';

export const articlesArr = [
    {
        "name" : "Time Series Forecasting with Deep Learning in PyTorch (LSTM-RNN)",
        "description" : "An in depth tutorial on forecasting a univariate time series using deep learning with PyTorch",
        "link" : "https://medium.com/towards-data-science/time-series-forecasting-with-deep-learning-in-pytorch-lstm-rnn-1ba339885f0c",
        "image" : require("../assets/images/time-series-stock-image.png")
    },
    {
        "name" : "Decision-Making in a Social Multi-Armed Bandit Task: Behavior, Electrophysiology and Pupillometry",
        "description" : "Understanding, predicting, and learning from other people's actions are fundamental human social-cognitive skills. Little is known about how and when we consider other's actions and outcomes when making our own decisions. We developed a novel task to study social influence in decision-making: the social multi-armed bandit task. This task assesses how people learn policies for optimal choices based on their own outcomes and another player's (observed) outcomes. The majority of participants integrated information gained through observation of their partner similarly as information gained through their own actions. This lead to a suboptimal decision-making strategy. Interestingly, event-related potentials time-locked to stimulus onset qualitatively similar but the amplitudes are attenuated in the solo compared to the dyadic version. This might indicate that arousal and attention after receiving a reward are sustained when a second agent is present but not when playing alone.",
        "link" : "https://www.researchgate.net/publication/333232849_Decision-Making_in_a_Social_Multi-Armed_Bandit_Task_Behavior_Electrophysiology_and_Pupillometry",
        "image" : require("../assets/images/ERP-after-reward-at-arm-3-90-30-averaged-across-participants-from-channel-Dyad.png")
    },
    {
        "name" : "How To Build A Dynamic Pricing System Using Machine Learning in Python",
        "description" : "Don’t know how to price your products? Look no further than this article!",
        "link" : "https://blog.devgenius.io/how-to-build-a-dynamic-pricing-system-using-machine-learning-in-python-ad6d4e4292f8",
        "image" : require("../assets/images/sale-image.webp")
    },
    {
        "name" : "How To Predict Customer Churn Risk using Machine Learning in Python",
        "description" : "An in-depth tutorial using Python, pandas and scikit-learn, RFM analysis and SMOTE.",
        "link" : "https://blog.devgenius.io/how-to-predict-customer-churn-risk-using-machine-learning-in-python-b11c09759491",
        "image" : require("../assets/images/dice.jpg")
    },
    {
        "name" : "4 Data-Driven Ways To Grow Your Business Using Customer Data",
        "description" : "A high level overview of the best ways to bolster your Business Intelligence using data-driven insights.",
        "link" : "https://blog.devgenius.io/4-data-driven-ways-to-grow-your-business-using-customer-data-bad64523ba88",
        "image" : require("../assets/images/business-analytics.jpg")
    }
]

const Articles = () => {
    const settings = {
        dots: false,
        infinite: true,
        initialSlide: 0,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        responsive: [
        {
          breakpoint: 600,
          settings: {
            infinite: true,
            autoplay: true,
            initialSlide: 0,
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
        <div id='articles' className='articles'>
            <div className="heading">
                <h2>Articles</h2>
            </div>
                <div className="projects-container">
                    <Slider {...settings}>
                    {
                        articlesArr.map((article, key) => {
                            return (
                                <div key={key} className="project">
                                    <div className="content">
                                        <img className="project-image" key={key} src={article.image} alt="Article"/>
                                        <h2 className="name">{article.name}</h2>
                                        {
                                            article.description.length > 130 
                                            ? <p className='description-min'>{article.description}</p>
                                            :  <p className='description'>{article.description}</p>                                            
                                        }
                                        {/* <div> */}
                                         <a href={article.link} target="_blank" rel="noreferrer" className="body-icons"><i><MdOpenInNew/></i></a>
                                        {/* </div> */}
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

export default Articles;
