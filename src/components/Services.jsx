import React, { memo } from 'react';
import './Services.css';

function Services({ filteredServices }) {
    
    return (
        <div className="servicePage py-5 px-5 mqpx0" id='service'>
            <h2 className="text-center mb-0" data-aos="fade-down"
                         data-aos-offset="200"
                         data-aos-easing="ease-in-out"
                         data-aos-duration="900"
                         data-aos-delay="0"
                         data-aos-once="true">
                <span>What</span> can i <span>do</span> for you . .
            </h2>
            <div className="row pt-2 mqrow">
               

                {
                  filteredServices.map((service)=>{
                    return (
                      <div className="col-sm-6 g-5 hoverClass " key={service._id} data-aos="fade-down"
                      data-aos-offset="200"
                      data-aos-easing="ease-in-out"
                      data-aos-duration="1000"
                      data-aos-delay="0"
                      data-aos-once="true">
                      <div className="card h-100">
                          <img className="card-img-top" src={`${service.image.url}`} alt={`${service.name}`} />
                          <div className="card-body rounded">
                              <h2 className="card-title text-center text-white">{service.name}</h2>
                              <p className="card-text text-center text-white">{service.desc}</p>
                              <h2 className=' card-title float-end text-white'>{service.charge}</h2>
                          </div>
                          </div>
                      </div>
                    )
                  })
                }
               
                
                
               
            </div>
        </div>
    );
}

export default memo(Services);
