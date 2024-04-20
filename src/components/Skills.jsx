import React from 'react';
import './Skills.css';
import ProgressBar from '@ramonak/react-progress-bar';

function Skills({ sortedFilteredSkills }) {
    
    return (
        <div className="container-fluid skillsPage bg-purple-dark py-5 px-5 " id='skills'>
            <h2 className="text-white text-center" 
                  data-aos="fade-down"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="800"
                    data-aos-delay="300"
                    data-aos-once="true"
                   >My Skills</h2>
            <div className="row ">
                {sortedFilteredSkills.map((skill, index) => {
                    let { name, percentage } = skill;

                    return (
                        <div 
                        className="col-sm-6  d-flex flex-column justify-content-center align-items-start  py-4 px-5  mqskilssnopad " style={{overflowX:'hidden'}}
                         key={index}
                         data-aos="fade-down"
                         data-aos-offset="200"
                         data-aos-easing="ease-in-out"
                         data-aos-duration="900"
                         data-aos-delay="0"
                         data-aos-once="true"
                         >
                            <div className="d-flex justify-content-start align-items-center w-100 mb-3 ">
                                <p className="mb-0 px-3 py-1 text-white name-bg rounded me-4">{name}</p>
                                <img src={skill.image.url} alt={name} className="d-inline img-fluid SkillsIcon" />
                            </div>
                            <div className="w-100">
                                <ProgressBar
                                height='15px'
                                 completed={percentage} 
                                 animateOnRender={true} 
                                 bgColor='#c206c2'/>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Skills;
