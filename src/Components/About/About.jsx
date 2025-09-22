import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-2.jpg";
import testuimonialimg from "../../assets/images/testim.jpg";
import dbcde from "../../assets/images/db-cde.png";
import valueicon1 from "../../assets/images/value-icon-1.png";
import valueicon2 from "../../assets/images/value-icon-2.png";
import valueicon3 from "../../assets/images/value-icon-3.png";
import valueicon4 from "../../assets/images/value-icon-4.png";
import valueicon5 from "../../assets/images/value-icon-5.png";
import valueicon6 from "../../assets/images/value-icon-6.png";
import valueicon7 from "../../assets/images/value-icon-7.png";
import abtusimg from "../../assets/images/people-behind.png";
import careng1 from "../../assets/images/care-1.jpg";
import careng2 from "../../assets/images/care-2.jpg";
import careng3 from "../../assets/images/care-3.jpg";
import careng4 from "../../assets/images/care-4.jpg";
import careng5 from "../../assets/images/care-5.jpg";
import knwmre from "../../assets/images/know-more.png";
import Helmet from "react-helmet";

export default function About() {
  useEffect(() => {
    document.title = "About Anand Diagnostic Laboratory - Your Trusted Diagnostic Partner";
    window.scroll(0,0)
  }, []);
  return (
    <div>
    <Helmet> 
      <title>About Anand Diagnostic Laboratory - Your Trusted Diagnostic Partnere</title> 
      <meta name="description" content="Learn about Anand Diagnostic Lab Reports and our commitment to providing accurate and reliable diagnostic services for patients and healthcare providers."></meta>
    </Helmet>
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
                      <li> About Us </li>
                    </ul>
                    <h1>
                    Haematology services extending<br></br> beyond the blood smear   
                    </h1>
                </div>
                </div>
            </div>
        </div>
        </div>
    </section>

    <section className='abt-secton'>
      <div className="container">
        <div className="row">

          <div className="col-lg-7">
              <div className="legacy-care">
              <div className="common-heading"><h2> <span>Our Legacy </span>
              ENSURING <span className='yelow'>“CARE”</span> IN HEALTHCARE</h2></div>
              <p>May 8, 1974 – the day Anand Diagnostic Laboratory made a humble beginning on Infantry Road, Shivajinagar Bangalore. This was the day Dr A V Ramaprasad moved from the role of teacher to lead what has grown into a pioneer in technology driven diagnostics in the region. Core principles of honesty and integrity through transparency that were ingrained and percolated down the ladder of the organisation from the time of its inception found roots and are visible 5 decades hence. The visionary in Dr Ramaprasad drove him relentlessly to advocate few basic rules for all to follow a) “The patient comes first. </p>
              <div className="spcl-cnt">
              <img src={dbcde} alt="call" className="img-fluid" />
              The user of our services is the very reason<br></br> of our existence. Total quality management<br></br> is the window through which we achieve<br></br> user satisfaction.
              </div>
              <div className='cmn-buton'>
              <p>
              <Link  to="/history">
              Our History
                </Link>
                <Link className='bg-trsnper ylw' to="/commitment">
                Our Commitment
                </Link>
              </p>
              </div>
              </div>
          </div>

          <div className="col-lg-5">
              <div className="legacy-mage">
              <img src={testuimonialimg} alt="call" className="img-fluid" />
              <div className="legacy-face">
               {/* <h4>5 <span>+</span></h4> */}
               <h4>5</h4>
               <h5>Decades of Diagnostic Excellence</h5> 
              </div>
              </div>
          </div>

        </div>
      </div>
    </section>

    <section className='vison-mison'>
      <div className="container">
        <div className="row">
        <div className="col-lg-12">
            <div className="common-heading"> </div>
        </div>
        <div className="col-lg-8">
            <div className="mission-layer">
                <h4>Mission</h4>
                <ul>
                  <li>Quest for excellence reflects in everything<br></br> we do.</li>
                  <li>We continuously evaluate our own<br></br>  performance.</li>
                  <li>We exceed customer expectation and<br></br>  improve our standard of excellence.</li>
                  <li>Everyone in the organisation feel the spirit of<br></br>  excellence.</li>
                </ul>
            </div>
        </div>
        <div className="col-lg-4">
              <div className="vision-layer">
                <h4>Vision</h4>
                <h5>Delighting customers by constantly exceeding their expectations in terms of quality, service, value and time.</h5>
              </div>
        </div>
        <div className="col-lg-12">
              <div className="values-layer text-left">
              <h4>Core Values</h4>
              <ul>
                <li>
                <img src={valueicon1} alt="call" className="img-fluid" />
                <span>Ethical<br></br> practice</span>
                </li>
                <li>
                <img src={valueicon2} alt="call" className="img-fluid" />
                <span>Quality<br></br> of work</span>
                </li>
                <li>
                <img src={valueicon3} alt="call" className="img-fluid" />
                <span>Leadership<br></br> in the field</span>
                </li>
                <li>
                <img src={valueicon4} alt="call" className="img-fluid" />
                <span>Good turn<br></br> around time</span>
                </li>
                <li>
                <img src={valueicon5} alt="call" className="img-fluid" />
                <span>Wide range of<br></br> testing facilities</span>
                </li>
                <li>
                <img src={valueicon6} alt="call" className="img-fluid" />
                <span>Transparency</span>
                </li>
                <li>
                <img src={valueicon7} alt="call" className="img-fluid" />
                <span>Affordability</span>
                </li>
              </ul>
              </div>
        </div>
        <div className="col-lg-12">
        <div className="peop-behnd row align-items-center">
        <div className="col-lg-7">
              <div className="legacy-care">
              <div className="common-heading"><h2> <span>People Behind </span>
              Over 5 decades ago,</h2></div>
              <p>when doctors relied on stethoscope and pulse as their primary investigation tools, one man set up a diagnostic laboratory, believing that the future of investigative medicine will rely upon laboratory tests as a primary diagnostic tool. Today, this laboratory has grown to incorporate the latest in diagnostic medicine, supporting clinicians across the region with reliable reports for accurate diagnosis and treatment of illnesses.</p> <br></br>
              <div className='cmn-buton'>
              <p>
              <a>View All</a>
              </p>
              </div>
              </div>
          </div>

          <div className="col-lg-5">
              <div className="legacy-mage">
              <img src={abtusimg} alt="call" className="img-fluid" /> 
              </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    </section>

   

    <section className='care-healthcare text-center'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
          <div className="common-heading"><h2> <span> We are the Parivar of </span><br></br> Anand Diagnostic Laboratory,<span> and<br></br> we ensure there is “</span><span className="yelow">CARE</span><span>" IN</span> HEALTHCARE</h2></div>
          </div>

          <div className="col-lg-12">
            <div className="care-hlthcare">
              <ul>
              <li>
              <img src={careng1} alt="call" className="img-fluid" />
              <h4>“Care” for our Patrons</h4>
              <Link to='/commitment'><img src={knwmre} alt="call" className="img-fluid" /></Link>
              </li>
              <li>
              <img src={careng2} alt="call" className="img-fluid" />
              <h4>“Care” for our Partners</h4>
              <Link to='/commitment'><img src={knwmre} alt="call" className="img-fluid" /></Link>
              </li>
              <li>
              <img src={careng3} alt="call" className="img-fluid" />
              <h4>“Care” for our Family</h4>
              <Link to='/commitment'><img src={knwmre} alt="call" className="img-fluid" /></Link>
              </li>
              <li>
              <img src={careng4} alt="call" className="img-fluid" />
              <h4>“Care” for our Associates</h4>
              <Link to='/commitment'><img src={knwmre} alt="call" className="img-fluid" /></Link>
              </li>
              <li>
              <img src={careng5} alt="call" className="img-fluid" />
              <h4>“Care” for our Legacy</h4>
              <Link to='/commitment'><img src={knwmre} alt="call" className="img-fluid" /></Link>
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
