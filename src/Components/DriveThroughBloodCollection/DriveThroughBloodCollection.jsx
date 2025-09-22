import React, { useEffect } from 'react'
import Sliders from 'react-slick'
import InnerCommonBanner from './Sections/InnerCommonBanner'  
import consumerimg1 from '../../assets/images/consumerimg1.jpg'  
import vedeoimg1 from '../../assets/images/vedeo-img-1.jpg'  
import vedeoimg2 from '../../assets/images/vedeo-img-2.jpg'  
import vedeoimg3 from '../../assets/images/vedeo-img-3.jpg'  
import { Link } from 'react-router-dom';

export default function DriveThroughBloodCollection() {
    useEffect(() => {
        document.title = "Drive Through Blood Collection";
        window.scroll(0,0)
      }, []);
  return (
    <div>
     <InnerCommonBanner /> 

  

     <section className='blood-colleion'>
        <div className="container">
            <div className="row align-items-center">
                    <div className="col-lg-7">
                    <div className="contnt-set">
                    <div className="common-heading"><h2> <span>'Drive-Through </span>Blood Collection service' </h2></div>
                    <p>The latest service offered by ADL is the revolutionary drive-through blood collection service at Shivajinagar. Inspired by the established drive-through fast food restaurant system across the world, the drive-through blood collection service allows an individual to go through the process of registering for the necessary blood tests and giving the blood sample without having to even get out of their car. This facility, housed in the basement of our new 60,000 Sq.ft. premises, has been designed to ensure complete safety and hygiene for our patrons and staff with an efficient ventilation system and a brightly lit, designated phlebotomy section for privacy and cleanliness.</p>
                    <div className='step-pairing'>
                    <span>The Drive-Through Blood Collection Service is operational from </span> 
                     Monday to Saturday, from 7:00AM to 11:00AM.
                    </div>
                    <div className="cmn-buton">
                    <p>
                    <Link to='/patients-consumers'>Book Now</Link>   
                    </p>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-5">
                    <div className="imge-set">
                    <img src={consumerimg1} alt="" className="img-fluid"/>
                    </div>
                </div>
                </div> 
            </div> 
     </section>

    <section className='getng-reprt pt-0'>
    <div className="container">
      <div className='distngt-strctre'>
      <div className="row align-items-center"> 
            <div className='col-lg-9'>
              <h4>Getting your Report</h4>
              <p>Collecting of test reports has never been easier. - Once ready, Users can log in to our website and download the reports right on to their computers or mobile devices immediately after our doctors release a report.</p>
            </div>
            <div className='col-lg-3 text-right'>
            <div className="cmn-buton"><p>
              {/* <Link to="/reports"> */}
              <Link to="https://narllims.neubergdiagnostics.com/#/laboratory/public
" target="_blank">
                      Download Report
              </Link>
                    </p></div>
            </div> 
      </div>
      </div>
      </div>   
    </section>

    <section className='vedeo-galery pt-0'>
    <div className="container-fluid">
    <div className="row align-items-center"> 

      <div className='col-lg-12 text-center'>
      <div className="common-heading"><h2> Gallery </h2></div>
      </div>

      <div className='col-lg-4'>
        <div className='vdeo-img'> 
        <iframe width="100%" height="380" src="https://www.youtube.com/embed/tseCsNdlNnY" title=" " frameborder="0" allow=" " allowFullScreen></iframe>  
        </div>
      </div> 
      <div className='col-lg-4'>
        <div className='vdeo-img'>
        <iframe width="100%" height="380" src="https://www.youtube.com/embed/u4Wnhg3sZCQ" title=" " frameborder="0" allow=" " allowFullScreen></iframe>
        </div>
      </div> 
      <div className='col-lg-4'>
        <div className='vdeo-img'>
        <iframe width="100%" height="380" src="https://www.youtube.com/embed/stgPFTQONjg" title=" " frameborder="0" allow=" " allowFullScreen></iframe>
        </div>
      </div>
    </div>
    </div>
    </section>


    </div>
  )
}