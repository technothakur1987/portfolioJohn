import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

function About({ UserDetail }) {
    
    let { name, title, subTitle, description, quote, address, contactEmail, phoneNumber, exp_year } = UserDetail;
    return (
        <div className="container-fluid aboutpage py-5 d-flex align-items-center" id='about'>
            <div className="row ">
                <div className="col-md-4 d-flex justify-content-center align-items-center mqpx2">
                    <img
                        src={UserDetail.alternateAvatars[0].url}
                        alt={name}
                        className="img-fluid rounded"
                        data-aos="zoom-in-right"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="900"
                        data-aos-delay="0"
                        data-aos-once="true"
                        data-aos-mirror="true"
                        
                    />
                </div>
                <div className="col-md-8 text-white abouttext">
                    <h2
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="1200"
                        data-aos-delay="500"
                        data-aos-once="true"
                        data-aos-mirror="false"
                        
                    >
                        About Me
                    </h2>
                    <p
                        className="fs-5 mt-3 mb-5 mqdesc"
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="1200"
                        data-aos-delay="500"
                        data-aos-once="true"
                        data-aos-mirror="false"
                       
                    >
                        {description}
                    </p>

                    <p
                        className="fw-bolder mb-2 mqlinks"
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="1400"
                        data-aos-delay="300"
                        data-aos-once="true"
                        data-aos-mirror="false"
                        
                    >
                        <span className="colorpink mb-0">
                            <i className="fa-solid fa-location-dot me-2 fs-5"></i>
                        </span>{' '}
                        {address}
                    </p>
                    <Link
                        className="fw-bolder text-white text-decoration-none d-block mb-2 hoverpink text-capitalize mqlinks"
                        to={`mailto:${contactEmail}`}
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="1400"
                        data-aos-delay="300"
                        data-aos-once="true"
                        data-aos-mirror="false"
                        
                    >
                        <span className="colorpink mb-0">
                            <i className="fa-solid fa-envelope me-2 fs-5"></i>
                        </span>{' '}
                        {contactEmail}
                    </Link>
                    <Link
                        className="fw-bolder text-white text-decoration-none mb-2 d-block hoverpink mqlinks"
                        to={`tel:${phoneNumber}`}
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="1400"
                        data-aos-delay="300"
                        data-aos-once="true"
                        data-aos-mirror="false"
                        
                    >
                        <span className="colorpink mb-0">
                            <i className="fa-solid fa-phone me-2 fs-5"></i>
                        </span>{' '}
                        {phoneNumber}
                    </Link>
                    <p
                        className="fw-bolder mqlinks"
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="1400"
                        data-aos-delay="300"
                        data-aos-once="true"
                        data-aos-mirror="true"
                       
                    >
                        <span className="colorpink mb-0">
                            <i className="fa-solid fa-globe me-2 fs-5"></i>
                        </span>{' '}
                        {exp_year} Yrs
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
