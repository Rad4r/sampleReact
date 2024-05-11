import './sample.scss';
import { useState } from 'react';

const projects = [
    {
        id:0,
        name:"Project1",
        type:"Website",
        shortDescription: "Lorem Ipsum",
        longDescription: "Lorem ipsum dolor sit amet consectetur",
        skills: [
            {
                id:0,
                skillName: "Skill 1",
                skillDescription: "Lorem ipsum dolor sit amet consectetur",
                refFile: "https://images.pexels.com/photos/14838102/pexels-photo-14838102.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            },
            {
                id:1,
                skillName: "Skill 2",
                skillDescription: "blablabla 2",
                refFile: "https://images.pexels.com/photos/14838102/pexels-photo-14838102.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            },
            {
                id:2,
                skillName: "Skill 3",
                skillDescription: "blablabla 2",
                refFile: "https://images.pexels.com/photos/5877254/pexels-photo-5877254.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
        ]
    },
    {
        id:0,
        name:"Project1",
        type:"Website",
        shortDescription: "Lorem Ipsum",
        longDescription: "Lorem ipsum dolor sit amet consectetur",
        skills: [
            {
                id:0,
                skillName: "Skill 1",
                skillDescription: "Lorem ipsum dolor sit amet consectetur",
                refFile: "https://images.pexels.com/photos/14838102/pexels-photo-14838102.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            },
            {
                id:1,
                skillName: "Skill 2",
                skillDescription: "blablabla 2",
                refFile: "https://images.pexels.com/photos/14838102/pexels-photo-14838102.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            },
            {
                id:2,
                skillName: "Skill 3",
                skillDescription: "blablabla 2",
                refFile: "https://images.pexels.com/photos/5877254/pexels-photo-5877254.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
        ]
    },
];


export const Sample = () => {

    const [count, setCount] = useState(0);
    const handleClick = (projectID) => {
        setCount(projectID);
    };

  return (
    <div className='portfolio'>

        <Project project={projects[count]} key={projects[count].id}  />

        <div className="projectsCardCollection"> 
            {projects.map( (project) => (
                <button onClick={() => handleClick(project.id)} key={project.id} >
                    <Card project={project}/>
                </button>
                
            ))}
        </div>

    </div>
  )
}

const Card = ({project}) =>{

 return (
    <div className="card">
        <h1>{project.name}</h1>
        <h3>{project.type}</h3>
        <p>{project.shortDescription}</p>
    </div>
    
    
 )
 
};

const Project = ({project}) =>{

 return (
    <div className='projectInfo'>
        <div className="previewInfo">
            <h1>{project.name}</h1>
            <div className="skillsPreview">
                {project.skills.map((skill) => (
                    <h2 key={skill.id}>{skill.skillName}</h2>
                ))}
            </div>
            <p>{project.longDescription}</p>
        </div>

        <div className="skillsShowcase">
            {project.skills.map((skill) => (
                <span className="showcase" key={skill.id}>
                    <h1>{skill.skillName}</h1>
                    <img src={skill.refFile} alt="" />
                    <p>{skill.skillDescription}</p>
                </span>
            ))}
        </div>
     </div>
 )
 
};