import React, { useState, useEffect, memo } from 'react';
import './Header.css';
import LoginModal from './LoginModal';
import { Link } from 'react-router-dom';

function Header({ loginstatus, setIsLoggedIn }) {
    let [menu, setmenu] = useState(false);

    let openmenu = () => {
        setmenu(!menu);
    };
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        // console.log(menu);
    }, [menu]);
    return (
        <div className="header bg-purple-dark text-white container-fluid d-flex justify-content-center align-items-center  pt-2">
            <div className="row w-100">
                <div className="col-2 d-flex justify-content-start align-items-center ">
                    <h1 className="fw-bolder fs-2 mb-0 logoh1">My Zone</h1>
                </div>
                <div className="col-8 "></div>
                <div className="col-2 d-flex  align-items-center justify-content-end ">
                    {loginstatus ? (
                        <button className="btn btn-sm transparentBtn p-0 rounded-pill me-5">
                            <p
                                className=" text-white bg-purple-dark  rounded-pill px-3 py-1 mb-0"
                                onClick={() => {
                                    localStorage.clear('user');
                                    setIsLoggedIn(false);
                                }}
                            >
                                Log Out
                            </p>
                        </button>
                    ) : (
                        <button className="btn btn-sm transparentBtn p-0 rounded-pill me-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <p className=" text-white bg-purple-dark  rounded-pill px-3 py-1 mb-0">Log in</p>
                        </button>
                    )}

                    <i className="fa-solid fa-bars fs-4" onClick={openmenu}></i>
                </div>
            </div>
            <div className={`sidenav bg-purple-dark  ${menu ? 'show' : 'hide'}`}>
                <i className="fa-solid fa-xmark fs-1 ms-3 mt-3" onClick={openmenu}></i>
                <ul className='list-unstyled hoverul h-75 d-flex flex-column align-items-start justify-content-around fs-4 fw-bolder ps-5 pt-5 mqulPaddingLeft'>
                    <li onClick={() => scrollToSection('hero')}>Home</li>
                    <li onClick={() => scrollToSection('about')}>About</li>
                    <li onClick={() => scrollToSection('skills')}>My Skills</li>
                    <li onClick={() => scrollToSection('project')}>My Work's</li>
                    <li onClick={() => scrollToSection('service')}>Services</li>
                    <li onClick={() => scrollToSection('timeline')}>My Journey</li>
                    <li onClick={() => scrollToSection('testinomials')}>Testinomials</li>
                    <li onClick={() => scrollToSection('contact')}>Connect Me</li>
                </ul>
            </div>
            {/*Login modal starts*/}
            <LoginModal setIsLoggedIn={setIsLoggedIn} />
            {/*Login modal ends*/}
        </div>
    );
}

export default memo(Header);
