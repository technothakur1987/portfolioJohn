import React, { memo } from 'react';
import './Testimonial.css';

function Testimonial({ filteredTestimonials }) {
  console.log(filteredTestimonials);

  return (
    <div className='testinomialsPage container-fluid py-5' id='testinomials' 
    >
      <h2 className='mb-5 text-center mt-5'data-aos="fade-down"
    data-aos-offset="200"
    data-aos-easing="ease-in-out"
    data-aos-duration="800"
    data-aos-delay="300"
    data-aos-once="true">What my <span>Client</span> Say ' s</h2>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-aos="fade-down"
    data-aos-offset="200"
    data-aos-easing="ease-in-out"
    data-aos-duration="800"
    data-aos-delay="300"
    data-aos-once="true">
        <div className="carousel-indicators">
          {filteredTestimonials.map((testimonial, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner pt-5">
          {filteredTestimonials.map((testimonial, index) => (
            <div key={index} data-bs-interval="3000" className={` carousel-item pt-5  ${index === 0 ? 'active' : ''}`}>
              
              <div className="carousel-caption pt-5 d-block text-white h-100 ">

                
                <img src={testimonial.image.url} alt={testimonial.name} className='img-fluid float-start ' />
                
                <p className='fs-5'>{testimonial.review}</p>
                <h4 className='name mt-5 text-uppercase'>{testimonial.name}</h4>
                <p>{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default memo(Testimonial);
