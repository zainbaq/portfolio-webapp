// Create your Body component here

import { FaMailBulk, FaSteam, FaGithub, FaLinkedin, FaSpotify, FaChessKnight, FaMediumM } from "react-icons/fa";
import Avatar from '../assets/images/me.jpg';

const Body = () => {
    return (
        <div id="body" className="body">
            <div className="body-container">
                <div className="body-profile">
                    <img className="body-img" alt='avatar' src={Avatar} />

                    <div className="body-content">
                        <div className="body-headline">Zain Baquar</div>
                        <div className="body-text">Software Engineer</div>
                    </div>

                    <div className="body-icons">
                        <a href="mailto:zain.baq@gmail.com/" target="_blank" rel="noreferrer" className="icon-link"><i><FaMailBulk/></i> </a>
                        <a href="https://www.linkedin.com/in/zainbaq/" target="_blank" rel="noreferrer" className="icon-link"><i><FaLinkedin/></i> </a>
                        <a href="https://github.com/zainbaq" target="_blank" rel="noreferrer" className="icon-link"><i><FaGithub /></i></a>
                        <a href="https://open.spotify.com/artist/1DSXyKW2jqrh5pGSIljaK6?si=-cCiWZnxTo6iygH8Diusiw" target="_blank" rel="noreferrer" className="icon-link"><i><FaSpotify /></i></a>
                        <a href="https://www.chess.com/member/pepipasta" target="_blank" rel="noreferrer" className="icon-link"><i><FaChessKnight/></i></a>
                        <a href="https://steamcommunity.com/profiles/76561198140502353/" target="_blank" rel="noreferrer" className="icon-link"><i><FaSteam/></i></a>
                        <a href="https://medium.com/@zainbaq" target="_blank" rel="noreferrer" className="icon-link"><i><FaMediumM/></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;