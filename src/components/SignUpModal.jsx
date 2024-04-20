import React, { useRef, useState , memo} from 'react';
import './LoginModal.css';
import { auth } from '../firebase/firebaseConfig';
import { signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword } from 'firebase/auth';
import LoginModal from './LoginModal';





const SignUpModal = ({setIsLoggedIn}) => {
    let ModalRef = useRef();
    

    let [formdata, setformdata] = useState({
        email: '',
        password: '',
    });

    let handleOnChange = (e) => {
        console.log(e.target.type)
        setformdata({...formdata , [e.target.type]:e.target.value})
    };
    let googleSignUp = async () => {
        console.log('Google here ');

        try {
            let provider = new GoogleAuthProvider();
            let user = await signInWithPopup(auth, provider);
            localStorage.setItem('user', JSON.stringify(user));
            console.log(user);
            ModalRef.current.classList.remove('show');
            alert('success');
            setIsLoggedIn(true)
        } catch (error) {
            console.log(error);
            ModalRef.current.classList.remove('show');
            setIsLoggedIn(false)
        }
    };

    let handleSignUp = async () => {
        console.log('handle submit ');
        if (formdata.email === '' || formdata.password === '') {
            return alert('Please fill all fields');
        }
        try {
            let user = await createUserWithEmailAndPassword(auth, formdata.email, formdata.password);
            console.log(user);
            alert('Signup Successful');
            ModalRef.current.classList.remove('show');
            ModalRef.current.style.display = 'none'
            setformdata({
                email: '',
                password: '',
            });
           
           
        } catch (error) {
            console.log(error);
            alert('Ply try again');
            ModalRef.current.classList.remove('show');
            ModalRef.current.style.display = 'none'
            
           
        }
    };
    return (
        <>
            <div
                ref={ModalRef}
                className="modal fade "
                id="SignUp"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="SignUpLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0 ">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h3 className="text-center">Sign Up </h3>
                            <div className="signupSection d-flex flex-column align-items-center justify-center">
                                <p className="text-center mb-0">Already have an account</p>
                                <button
                                    className="mx-auto bg-transparent border-0 text-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                >
                                    Login here
                                </button>
                            </div>
                            <button className="btn mx-auto w-100 btn-primary mt-3" onClick={googleSignUp} data-bs-dismiss="modal" aria-label="Close">
                                Sign Up With Google
                            </button>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                                <hr className="w-100" />
                                <span className="px-2">or</span>
                                <hr className="w-100" />
                            </div>

                            <div className="d-flex  flex-column align-items-center justify-content-center mt-2">
                                

                                <form
                                    className="Form  rounded d-flex flex-column w-100"
                                    onSubmit={(e) => {
                                        console.log('onsubmit');
                                        e.preventDefault();
                                    }}
                                >
                                    
                                    <div className="">
                                        <label htmlFor="SignUpEmail1" className="form-label">
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control bg-transparent text-white"
                                            id="SignUpEmail1"
                                            aria-describedby="emailHelp"
                                            value={formdata.email}
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="SignUpPassword1" className="form-label">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control bg-transparent text-white"
                                            id="SignUpPassword1"
                                            autoComplete="off"
                                            value={formdata.password}
                                            onChange={handleOnChange}
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100  mb-3" onClick={handleSignUp} data-bs-dismiss="modal" aria-label="Close">
                                        SignUp
                                    </button>
                                    
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
          
            
        </>
    );
};

export default memo(SignUpModal);
