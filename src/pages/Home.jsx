import React, { useEffect, useState, memo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import Aos from 'aos';
import './../../node_modules/aos/dist/aos.css';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
function Home() {
    const params = useParams();
    const navigate = useNavigate();
    const userId = '65b3a22c01d900e96c4219ae'; //John doe
    const BASE_URL = 'https://portfolio-backend-30mp.onrender.com/api/v1';
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSending, setIsSending] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        Aos.init();
    }, []);
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('user'));
        if (data) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [isLoggedIn]);

    useEffect(() => {
        document.cookie = `portfolio-name=portfolio1`;
        const fetchUserData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/get/user/${params?.user ?? userId}`);

                const userData = await response.json();

                document.title = `${userData?.user?.about?.name + ' - ' + userData?.user?.about?.title}`;
                setUser(userData?.user);
                setIsLoading(false);
                document.body.classList.remove('loaded');
            } catch (error) {
                navigate('/');
                setIsLoading(true);
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [params?.user, userId, navigate]);
    console.log(user);

    // filtering all the data from the API
    const sortedFilteredSkills = user?.skills?.filter((item) => item.enabled)?.sort((a, b) => a.sequence - b.sequence);
    const sortedFilteredProject = user?.projects?.filter((item) => item.enabled)?.sort((a, b) => a.sequence - b.sequence);
    const filteredServices = user?.services?.filter((item) => item.enabled);
    const filteredTestimonials = user?.testimonials?.filter((item) => item.enabled);
    const filteredSocialHandles = user?.social_handles?.filter((item) => item.enabled);
    const filteredEducation = user?.timeline?.filter((item) => item.forEducation && item.enabled);
    const filteredExperience = user?.timeline?.filter((item) => !item.forEducation && item.enabled);

    if (isLoading) {
        return (
            <div className="w-100 bg-purple-dark d-flex align-items-center justify-content-center text-center text-white Loading">
                <h1 className="fs-1">Loading . . .</h1>
            </div>
        );
    }

    return (
        <>
            <Header loginstatus={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Hero UserDetail={user.about} />
            <About UserDetail={user.about} />
            <Skills sortedFilteredSkills={sortedFilteredSkills} />
            <Projects sortedFilteredProject={sortedFilteredProject} />
            <Services filteredServices={filteredServices} />
<Timeline filteredEducation={filteredEducation} filteredExperience={filteredExperience} />
<Testimonial filteredTestimonials={filteredTestimonials} />
            <Contact />
            <Footer filteredSocialHandles={filteredSocialHandles} />
            <ScrollTop />
        </>
    );
}

export default memo(Home);
