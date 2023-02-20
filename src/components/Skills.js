// Create your Skills component here

import { FaPython, FaLinux, FaAws, FaDocker, FaGithub } from "react-icons/fa";
import {SiTensorflow, SiPytorch} from "react-icons/si"

const Skills = () => {
    const skillsArr = [
        {
            "name" : 'Python',
            "icon" : FaPython
        },
        {
            "name" : "Linux",
            "icon" : FaLinux
        },
        {
            "name" : "Git",
            "icon" : FaGithub
        },
        {
            "name" : "AWS",
            "icon" : FaAws
        },
        {
            "name" : "Docker",
            "icon" : FaDocker
        },
        {
            "name" : "TensorFlow",
            "icon" : SiTensorflow
        },
        {
            "name" : "PyTorch",
            "icon" : SiPytorch
        }
    ];

    return (
        <div id='skills' className='skills'>
            <h2 className='title'>Skills</h2>
            <div className='skill-holder'>
                {
                    skillsArr.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <i key={index} className='skill-cards'>
                                <Icon className='skill-icon'/>
                                {/* <p
                                className="skill"
                                >
                                    {skill.name}
                                </p> */}
                            </i>
                        )
                    })                    
                }
            </div>
        </div>
    )
}

export default Skills;