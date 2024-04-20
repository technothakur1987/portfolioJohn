import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'



const Footer = ({filteredSocialHandles}) => {
  console.log(filteredSocialHandles)
  return (
    <div className='footer container-fluid py-3 px-3' >
      <div className="row h-100  ">
        <div className="col-9 flexbasis50">
          <h4 className='mb-0 text-white'>My Zone <span className='fs-5 fw-normal border-left ps-2 ms-2 text-capitalize mqhidden'>2024 © copyright my zone Pvt Ltd</span></h4>

        </div>
        <div className="col-3 d-flex align-items-center justify-content-evenly flexbasis50">

          {
            filteredSocialHandles.map((social)=>{
              return (
                <Link to={`${social.url}`} key={social._id} className=''><img src={social.image.url} alt={social.image.platform} className='img-fluid sc'/></Link>
              )

            })
          }
        </div>
      </div>
      
      
    </div>
  )
}

export default Footer