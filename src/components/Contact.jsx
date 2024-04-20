import React, { useState, useEffect } from 'react';
import './Contact.css';
import { Timestamp, collection, addDoc } from 'firebase/firestore';
import { fireDB } from '../firebase/firebaseConfig';
import { v4 as uuidv4 } from 'uuid';

function Contact() {
    let [formdata, setFormData] = useState({
        exampleInputEmail1: '',
        exampleInputMessage1: '',
    });

    let handleOnchange = (e) => {
        console.log(e.target.id);
        setFormData({ ...formdata, [e.target.id]: e.target.value });
    };

    let handleOnClickContact = async (e) => {
        e.preventDefault();
        console.log(formdata);
        if (formdata.exampleInputEmail1 === '' || exampleInputMessage1 === '') {
            alert('Plz Fill all the Values');
        }
        try {
            //creating userobject which will be inserted in database
            let connectList = {
                email: formdata.exampleInputEmail1,
                message: formdata.exampleInputMessage1,
                role: 'contactList',
                id: uuidv4(),
                time: Timestamp.now(),
                date: new Date().toLocaleString('en-US', {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric',
                }),
            };

            //creating a user refrence where collection(fireDb , 'collectionname')
            let userReference = collection(fireDB, 'connection');

            //Add User Deatils
            //addDoc(userrefence, object to be stored)
            addDoc(userReference, connectList);

            /*when the user is inputted in database then we will clear all the input and setFormdata to initial value */
            setFormData({ ...formdata, exampleInputEmail1: '', exampleInputMessage1: '' });
            alert('We Will Connect You Soon');

            setFormData({
                exampleInputEmail1: '',
                exampleInputMessage1: '',
            });
        } catch (error) {
            console.log(error);
            alert('Ply try again');
        }
    };
    useEffect(() => {
        console.log(formdata);
    }, [formdata]);
    return (
        <div className="container-fluid contactPage py-5" id="contact" 
        >
            <h2 className="text-center text-white mb-4 mqh2"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-once="true">Connect Me</h2>
            <form className="p-5  mx-5 mxmq0" data-aos="fade-down"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
        data-aos-duration="800"
        data-aos-delay="300"
        data-aos-once="true">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-white">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={formdata.exampleInputEmail1}
                        onChange={(e) => {
                            handleOnchange(e);
                        }}
                    />
                    <div id="emailHelp" className="form-text text-white">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputMessage1" className="form-label text-white">
                        Message
                    </label>
                    <textarea
                        type="password"
                        className="form-control text-white"
                        id="exampleInputMessage1"
                        value={formdata.exampleInputMessage1}
                        onChange={(e) => {
                            handleOnchange(e);
                        }}
                    />
                </div>
                <div className="d-flex justify-content-center align-items-center mt-3">
                    <button className="btn btn-sm transparentBtn p-0 rounded-pill " onClick={handleOnClickContact}>
                        <p className=" text-white bg-purple-dark  rounded-pill px-5 py-2 mb-0 fw-bolder fs-5">Connect Me</p>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
