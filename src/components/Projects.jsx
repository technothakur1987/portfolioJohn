import React, { memo, useState } from 'react';
import './Projects.css';

import { Link } from 'react-router-dom';


function Projects({ sortedFilteredProject }) {
    
    return (
        <>
            <div className="container-fluid projectpage py-5 px-5 mqpx0" id='project'>
                <h2 data-aos="fade-down"
                         data-aos-offset="200"
                         data-aos-easing="ease-in-out"
                         data-aos-duration="900"
                         data-aos-delay="0"
                         data-aos-once="true">
                    <span>Project 's</span> I have worked on{' '}
                </h2>

                <div className="row projectrow">
                    {sortedFilteredProject.map((project, index) => {
                        

                        return (
                            <div 
                            className="col-sm-4 g-5 hoverClass " key={project._id} data-bs-toggle="modal" data-bs-target={`#exampleModal-${project._id}`}>
                                <div className="card" data-aos="fade-down"
                            data-aos-offset="200"
                            data-aos-easing="ease-in-out"
                            data-aos-duration="1000"
                            data-aos-delay="0"
                            data-aos-once="true">
                                    <img className="card-img-top" src={project.image.url} alt="Card image cap" />
                                    <div className="card-body rounded">
                                        <h5 className="card-title text-center text-white">TECHS USED</h5>
                                        <p className="card-text text-center text-white">
                                            {project.techStack.map((stack, index) => {
                                                return (
                                                    <span key={index} className="">
                                                        {stack}
                                                    </span>
                                                );
                                            })}
                                        </p>
                                    </div>
                                </div>

                                {/*modal starts */}
                                <div className="modal fade" id={`exampleModal-${project._id}`} tabIndex="-1" aria-labelledby={`exampleModalLabel-${project._id}`} aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header border-bottom-0">
                                            
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <h3 className='text-center text-white mqProjectModalTitle'>{project.title}</h3>
                                            <p className='text-white mqProjectDesc'>{project.description}</p>
                                            <div className='d-flex justify-content-around align-items-center'>
                                            <Link to={`${project.liveurl}`} className="btn btn-sm transparentBtn p-0 rounded-pill " ><p className=" text-white bg-purple-dark  rounded-pill px-3 py-1 mb-0">Check Live</p></Link>
                                            <Link to={`${project.githuburl}`} className="btn btn-sm transparentBtn p-0 rounded-pill " ><p className=" text-white bg-purple-dark  rounded-pill px-3 py-1 mb-0">View Code</p></Link>
                                            
                                            
                                            </div>
                                            
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                                {/*modal ends here*/}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default memo(Projects);
