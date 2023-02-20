// Create your Skills component here

import { FaPython, FaLinux, FaAws, FaDocker, FaGithub, FaReact } from "react-icons/fa";
import {SiTensorflow, SiPytorch, SiMicrosoftazure, SiMysql, SiAnaconda, SiJavascript, SiVisualstudio, SiJira} from "react-icons/si"


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
        },
        {
            "name" : "Microsoft Azure",
            "icon" : SiMicrosoftazure
        },
        {
            "name" : "MySQL",
            "icon" : SiMysql
        },
        {
            "name" : "Anaconda",
            "icon" : SiAnaconda
        },
        {
            "name" : "JavaScript",
            "icon" : SiJavascript
        },
        {
            "name" : "React",
            "icon" : FaReact
        },
        {
            "name" : "Visual Studio",
            "icon" : SiVisualstudio
        },
        {
            "name" : "Jira",
            "icon" : SiJira
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
                                <p className="skill">{skill.name}</p>
                            </i>
                        )
                    })                    
                }
            </div>
        </div>
    )
}

export default Skills;