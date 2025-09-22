import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-3.webp";
import awardinnimg from "../../assets/images/award-inner.png";
import certimg1 from "../../assets/images/cer-1.jpg";
import certimg2 from "../../assets/images/cer-2.jpg";
import certimg3 from "../../assets/images/cer-3.jpg";
// import certimg4 from "../../assets/images/cer-3.jpg";
import certimg4 from "../../assets/images/scope-5.jpg";

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: 'a',
  pswpModule: () => import('photoswipe')
});
lightbox.init();

export default function Accreditation() {
  useEffect(() => {
    document.title = "Accreditation";
    window.scroll(0, 0)
  }, []);
  return (
    <div>
      <section className='inner-banner'>
        <img src={bannerimage} alt="call" className="img-fluid" />
        <div className="inner-caption">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="caption-details bnr-txt">
                  <ul>
                    <li><Link to='/'> Home </Link></li>
                    <li> / </li>
                    <li><Link to='/about-us'> About Us </Link></li>
                    <li> / </li>
                    <li> Accreditation </li>
                  </ul>
                  {/* <h1>
                      Haematology services extending<br></br> beyond the blood smear
                      </h1> */}
                  <h1>
                    Pioneering Quality with <br></br> NABL Accreditation
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='our-accrediation'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="common-heading"><h2> <span>Our</span>
                Accreditation</h2></div>
            </div>
            <div className="col-lg-10">
              {/* <p>ADL was first accredited in 2001, and we were the first diagnostic laboratory in South India to gain NABL accreditation.</p>

              <p>According to NABL, ‘Laboratory Accreditation provides formal recognition of competent laboratories, thus providing a ready means for customers to find reliable testing and calibration services in order to meet their demands’.</p>

              <p>We were ready for accreditation much before the formal accreditation agencies showed up. We always believed in following best practices, error free processes and strict compliance to quality standards. The NABL accreditation was simply a validation of everything we were already doing.</p>

              <p>Best practices are not a one-time affair for purpose of getting some certification. For us, it is an ongoing obsession.</p> */}
              <p>Anand Diagnostic Laboratory now known as Neuberg Anand Reference Laboratory achieved its first accreditation in 2001, setting a precedent as the first diagnostic lab in South India to be recognized by NABL. NABL highlights that laboratory accreditation is a formal acknowledgment of a lab's competence, offering a dependable option for customers seeking accurate testing and calibration services.</p>

              <p>Long before the establishment of formal accreditation bodies, we were poised for recognition, steadfast in our commitment to best practices, flawless processes, and stringent adherence to quality standards. The NABL accreditation was merely a formal acknowledgment of the high standards we had been upholding all along.</p>

              <p>For us, adherence to best practices isn't merely about securing a certification; it's a continuous pursuit of excellence.</p>
            </div>
            <div className="col-lg-2">
              <div className="war-awa text-right">
                <img src={awardinnimg} alt="call" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row m-0">

              </div>
              <div className="certifi-lsts text-center">
                <ul className="pswp-gallery" id="my-gallery">
                  {/* <li>
                    <img src={certimg1} alt="call" className="img-fluid" />
                    <h4> ADL NABL <span>Certificate</span></h4>
                    <div className="cmn-buton">
                      <p>
                        <a href={certimg1}
                          data-pswp-width="1875"
                          data-pswp-height="2500"
                          target="_blank"
                          rel="noreferrer">View Certificate</a>
                      </p>
                    </div>
                  </li> */}
                  {/* <li>
                    <img src={certimg2} alt="call" className="img-fluid" />
                    <h4> ADL Scope of <span> Accreditation </span></h4>
                    <div className="cmn-buton">
                    <p>
                    <a href={certimg2}
                          data-pswp-width="1875"
                          data-pswp-height="2500"
                          target="_blank"
                          rel="noreferrer">View Certificate</a>
                    </p>
                    </div>
                  </li> */}
                  <li>
                    <img src={certimg3} alt="call" className="img-fluid" />
                    <h4> NARL <span>Certificate</span></h4>
                    <div className="cmn-buton"><p><a href="https://www.anandlab.com/pdf/narl-new.pdf"
                      target="_blank"
                      rel="noreferrer">View Certificate</a></p></div>
                  </li>
                  <li>
                    <img src={certimg4} alt="call" className="img-fluid" />
                    <h4> Scope <span> NARL </span></h4>
                    <div className="cmn-buton"><p><a href="https://www.anandlab.com/pdf/NARL-New-scope-2023.pdf"
                      target="_blank"
                      rel="noreferrer">View Certificate</a></p></div>
                    {/* <div className="cmn-buton"><p><a href="https://www.anandlab.com/pdf/scope.pdf" 
                          target="_blank"
                          rel="noreferrer">View Certificate</a></p></div> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
