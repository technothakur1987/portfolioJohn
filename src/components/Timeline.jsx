import React, { useState, memo } from 'react';
import './Timeline.css';

function Timeline({ filteredEducation, filteredExperience }) {
 
    const [activeEducationIndex, setActiveEducationIndex] = useState(null);
    const [activeExperienceIndex, setActiveExperienceIndex] = useState(null);

    const renderAccordionItems = (items, activeIndex, setActiveIndex, groupId) => {
        return items.map((item, index) => (
            <div className="accordion-item" key={index} id='timeline'>
                <h2 className="accordion-header " id={`panelsStayOpen-heading-${groupId}-${index}`}>
                    <button
                        className={`accordion-button  text-uppercase text-white ${activeIndex === index ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        aria-expanded={activeIndex === index ? 'true' : 'false'}
                        aria-controls={`panelsStayOpen-collapse-${groupId}-${index}`}
                    >
                        {item.company_name}
                    </button>
                </h2>
                <div
                    id={`panelsStayOpen-collapse-${groupId}-${index}`}
                    className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                    aria-labelledby={`panelsStayOpen-heading-${groupId}-${index}`}
                >
                    <div className="accordion-body text-white">
                        <strong className='text-capitalize'>{item.summary} as a {item.jobTitle}</strong> 
                        <p>{item.startDate.slice(0,10)}  ------  {item.endDate.slice(0,10)}</p>
                        <p>Location:{item.jobLocation}</p>
                        <ul>{item.bulletPoints.map((points, index)=>{
                          return (
                            <li key={index}>{points}</li>
                          )

                        })}</ul>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="timelineSection container-fluid py-5 px-5 mqpx0">
            <h2 className='mb-4 text-center'>My <span className='pink'>Journey</span></h2>
            <div className="row">
                <div className="col-sm-12">
                    <h2 className='mb-4 pink'>Education : </h2>
                    <div className="accordion " id="accordionEducation">
                        {renderAccordionItems(filteredEducation, activeEducationIndex, setActiveEducationIndex, 'education')}
                    </div>
                </div>
                <div className="col-sm-12">
                    <h2 className='mb-4 mt-4 pink'>Experience : </h2>
                    <div className="accordion" id="accordionExperience">
                        {renderAccordionItems(filteredExperience, activeExperienceIndex, setActiveExperienceIndex, 'experience')}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Timeline);
