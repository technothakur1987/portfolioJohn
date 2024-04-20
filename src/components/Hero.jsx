import React, { useEffect, useRef, useState} from 'react';
import './Hero.css';
import Aos from 'aos';
import Globe from 'react-globe.gl';


function Hero({UserDetail}) {
    //console.log(UserDetail)
    let { name, title, subTitle, description, quote} = UserDetail
    let globeEl = useRef(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        Aos.init();
        // Set loading to false after a delay to simulate globe loading
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the delay as needed
    
        return () => clearTimeout(timeoutId); // Clean up the timeout
    }, []);
    
    useEffect(() => {
        if (!loading && globeEl.current) {
            globeEl.current.controls().autoRotate = true;
        }
    }, [loading]);
    
    const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

    // Gen random data
    const N = 30;
    const gData = [...Array(N).keys()].map(() => ({
        lat: (Math.random() - 0.5) * 180,
        lng: (Math.random() - 0.5) * 360,
        size: 7 + Math.random() * 30,
        color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)],
    }));

    return (
        <div  id='hero' className="container-fluid hero p-0 " style={{ overflowX: 'hidden' }}>
            <div className="textDiv d-flex flex-column align-items-start justify-content-center">
                <h1
                    className="mt-5"
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="600"
                    data-aos-delay="900"
                    data-aos-once="true"
                >
                    {' '}
                    Hi, I'm <span className='text-uppercase '>[ {name} ]</span>
                </h1>
                <h3
                    className="mb-5"
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="600"
                    data-aos-delay="900"
                    data-aos-once="true"
                >
                    {title}
                    <span className='d-block text-white 
                    float-end mt-5 fw-lighter' style={{fontSize:'0.7rem', opacity:'0.5'}}> worked with about 28 clients all over the world</span>
                </h3>
                
                <p
                    className="fs-4 text-capitalize"
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="1000"
                    data-aos-delay="900"
                    data-aos-once="true"
                >
                    {subTitle}
                   <span className='d-block'> {quote}</span>
                </p>
                
            </div>
            {loading ? (
                <div className="loading-spinner">Loading...</div>
            ) : (
                <div className="globewrapper ">
                    <Globe
                        ref={globeEl}
                        backgroundColor="#290129"
                        backgroundImageUrl="https://i.ibb.co/5r49jfh/globebg.png"
                        globeImageUrl="https://i.ibb.co/5r49jfh/globebg.png"
                        //globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                        showGlobe={true}
                        showGraticules={true}
                        waitForGlobeReady={true}
                        width={550}
                        atmosphereColor="#c206c2"
                        animateIn={true}
                        //some points

                        htmlElementsData={gData}
                        htmlElement={(d) => {
                            const el = document.createElement('div');
                            el.innerHTML = markerSvg;
                            el.style.color = d.color;
                            el.style.width = `${d.size}px`;

                            el.style.pointerEvents = 'auto';
                            el.style.cursor = 'pointer';
                            el.onclick = () => console.info(d);
                            return el;
                        }}
                    />
                </div>
            )}
            <div className='dot1'></div>
            <div className='dot2'></div>
            <div className='dot3'></div>
        </div>
    );
}

export default Hero;
