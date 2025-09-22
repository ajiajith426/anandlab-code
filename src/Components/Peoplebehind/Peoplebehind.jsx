import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-1.webp";
import people1 from "../../assets/images/people-1.jpg";
import people2 from "../../assets/images/people-2.jpg";
import people3 from "../../assets/images/people-13.jpg";
import people4 from "../../assets/images/aishu.jpg";
import people11 from "../../assets/images/people-11.jpg";
import people12 from "../../assets/images/people-12.jpg";
import people0 from "../../assets/images/people-0.jpg";
import people9 from "../../assets/images/people-9.jpg";
import people10 from "../../assets/images/people-14.jpg";
import people15 from "../../assets/images/people-15.jpg";
import { MdEmail } from 'react-icons/md'

export default function Peoplebhind() {
    useEffect(() => {
        document.title = "People Behind";
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
                                        <li className='act-aslink'> People Behind </li>
                                    </ul>
                                    <h1>
                                        Delivering Reliable, Fast and Affordable<br></br> Diagnostic services since 1974
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='people-function'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 p-0">
                            <div className="col-lg-12">
                                <div className="common-heading"><h2> <span className='inlne'>The Core</span> Management </h2></div>
                                <p>About 5 decades ago, when doctors relied on the stethoscope and pulse as their primary investigation tools, one man set up a diagnostic laboratory believing that the future of investigative medicine lies on laboratory tests as a primary diagnostic tool. Today Anand laboratory has grown to incorporate the latest in diagnostic medicine, supporting clinicians across the region with reliable reports for accurate diagnosis and treatment of illnesses.</p>
                            </div>


                            <div className="row">

                                <div className="col-sm-12 col-md-6 col-lg-3 aos-init aos-animate mb-4" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
                                    <div className="box-fixer nwe-fex">
                                        <a href="" data-toggle="modal" data-target="#ram">
                                            <img src={people1} alt="call" className="img-fluid" />
                                            <h4>Dr A V Ramaprasad, <span> Founder & Director</span></h4>
                                            {/* <a href='mailto:sujayprasad@anandlab.com' className='d-flex align-items-center mt-2 small'><MdEmail className='mr-2 m-0' size={22} />sujayprasad@anandlab.com </a> */}
                                        </a>
                                    </div>
                                </div>

                                <div className="modal fade cstm" id="ram" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title cs-tm" id="exampleModalLabel">Dr A V Ramaprasad,
                                                    <span>Founder & Director</span>
                                                    {/* <a href='mailto:sujayprasad@anandlab.com' className='d-flex align-items-center mt-2 small'><MdEmail className='mr-2 m-0' size={22} />sujayprasad@anandlab.com </a> */}
                                                </h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="mdl-img">
                                                    <img src={people1} alt="call" className="img-fluid" />
                                                </div>
                                                <div className="mdl-cnt">
                                                    <p>Dr Ramaprasad is the Founder and Director of Anand Diagnostic Laboratory. From its humble beginnings in 1974, ADL has grown leaps and bounds over the years under his vision and leadership. Dr Ramaprasad started ADL at a time when laboratory medicine was emerging as a new speciality. He saw the future of lab medicine and dedicated his life to building an institution on the foundation of sound ethics and values to build a brand that will epitomize good laboratory medicine. To this day, Anand Diagnostic Laboratory sustains these values in all its interactions within the organization and beyond.</p>

                                                    <p>Prior to this venture, Dr Ramaprasad was a well-respected teacher in the academic field. He taught Biochemistry, Pathology and Microbiology at prestigious institutions like Bangalore Medical College, KMC, Hubli and JNMC, Belgaum to graduate and postgraduate students, many of whom are currently either teaching or practising laboratory medicine. Dr Ramaprasad obtained his MD in Pathology and Bacteriology from Kasturba Medical College (KMC), Mangalore in 1966.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-3 aos-init aos-animate mb-4" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
                                    <div className="box-fixer nwe-fex">
                                        <a href="" data-toggle="modal" data-target="#jay">
                                            <img src={people3} alt="call" className="img-fluid" />
                                            <h4>Dr N Jayaram, <span> Managing Director </span></h4>
                                            {/* <a href='mailto:jayaram@anandlab.com' className='d-flex align-items-center mt-2 small'><MdEmail className='mr-2 m-0' size={22} />jayaram@anandlab.com </a> */}
                                        </a>
                                    </div>
                                </div>

                                <div className="modal fade cstm" id="jay" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title cs-tm" id="exampleModalLabel">Dr N Jayaram,
                                                    <span>Managing Director</span>
                                                    {/* <a href='mailto:jayaram@anandlab.com' className='d-flex align-items-center mt-2 small'><MdEmail className='mr-2 m-0' size={22} />jayaram@anandlab.com </a>*/}
                                                </h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="mdl-img">
                                                    <img src={people3} alt="call" className="img-fluid" />
                                                </div>
                                                <div className="mdl-cnt">
                                                    <p>Dr Jayaram is the silent force behind the operational excellence of the lab. He joined Anand Diagnostic Laboratory in 1988 and has ever since followed the footsteps of his mentor Dr Ramaprasad. <br />
                                                        Together they were instrumental in bringing operational excellence to the laboratory and expanding into specialized tests ranging from Renal transplantation, Cytopathology, Histopathology and many other areas.<br />
                                                        Dr Jayaram is a certified lead assessor for NABL accreditation and has conducted assessments both in India and overseas. He is also actively involved in training other laboratory personnel on accreditation and internal audit requirements. He is academically very active and participates regularly in national and international scientific meetings as faculty.</p>
                                                    <p>Dr Jayaram obtained his MD in Pathology from the Post Graduate Institute of Medical Education and Research, Chandigarh. Subsequently, he also acquired additional experience in Cytopathology and Immunopathology from the same institution.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-3 aos-init aos-animate mb-4" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
                                    <div className="box-fixer nwe-fex">
                                        <a href="" data-toggle="modal" data-target="#suj">
                                            <img src={people2} alt="call" className="img-fluid" />
                                            <h4>Dr Sujay Prasad, <span> Technical Director</span></h4>
                                            {/* <a href='mailto:sujayprasad@anandlab.com' className='d-flex align-items-center mt-2 small'><MdEmail className='mr-2 m-0' size={22} />sujayprasad@anandlab.com </a> */}
                                        </a>
                                    </div>
                                </div>

                                <div className="modal fade cstm" id="suj" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title cs-tm" id="exampleModalLabel">Dr Sujay Prasad,
                                                    <span>Technical Director</span>
                                                    {/* <a href='mailto:sujayprasad@anandlab.com' className='d-flex align-items-center mt-2 small'><MdEmail className='mr-2 m-0' size={22} />sujayprasad@anandlab.com </a> */}
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div className="modal-body">
                                                <div className="mdl-img">
                                                    <img src={people2} alt="call" className="img-fluid" />
                                                </div>
                                                <div className="mdl-cnt">
                                                    <p>Dr Sujay Prasad is the creative force behind new innovations, technology initiatives and business process improvements at Anand Diagnostic Laboratory.<br />
                                                        He has been instrumental in expanding the service capability of ADL, from facility expansion to the acquisition of state-of-the-art equipment.<br />
                                                        With his zero-tolerance attitude to errors, he has designed innovative methods with a focus on minimizing errors across all operating processes.<br />
                                                        He oversees all IT initiatives and has implemented interesting IT-enabled ideas, such as automated report printing kiosks and online results reporting, much ahead of the industry adoption. He is also a certified lead assessor for NABL accreditation and has conducted technical assessments overseas.</p>

                                                    <p>Dr Sujay Prasad obtained his MD in Pathology from Mumbai University and joined Anand Diagnostic Laboratory in 1995.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-3 aos-init aos-animate mb-4" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
                                    <div className="box-fixer nwe-fex">
                                        <a href="" data-toggle="modal" data-target="#she">
                                            <img src={people4} alt="call" className="img-fluid" />
                                            <h4>Aishwarya Vasudevan, <span> Group COO </span></h4>
                                            {/* <a href='mailto:aishwarya@neubergdiagnostics.com' className='d-flex align-items-center mt-2 small'><MdEmail className='mr-2 m-0' size={22} />aishwarya@ neubergdiagnostics.com </a> */}

                                        </a>
                                    </div>
                                </div>

                                <div className="modal fade cstm" id="she" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title cs-tm" id="exampleModalLabel">Aishwarya Vasudevan, <span> Group COO </span>
                                                    {/* <a href='mailto:aishwarya@neubergdiagnostics.com' className='d-flex align-items-center mt-2 small'><MdEmail className='mr-2 m-0' size={22} />aishwarya@neubergdiagnostics.com </a> */}
                                                </h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="mdl-img">
                                                    <img src={people4} alt="call" className="img-fluid" />
                                                </div>
                                                <div className="mdl-cnt">
                                                    <p>With over 16 years of experience, Aishwarya Vasudevan - Group COO, comes with a rich background in P&L, Sales, Marketing, Operations, Training, Customer Engagement and Quality.<br /><br />
                                                        She has strong credentials in consumer healthcare and has successfully developed and launched sales strategies, innovative marketing & branding solutions, and is very passionate about ensuring flawless adherence to quality and protocols.<br /><br />
                                                        She is also an accomplished Trainer, and has conducted corporate workshops and trained employees of many corporates, including Dell, Accenture, Infosys and Mahindra. She also comes with sound knowledge of running a customer-centric call centre. She has successfully managed an aggressive expansion of centres within record turn-around time. BTL Marketing is another area of expertise that she brings to the table, along with extensive knowledge in Market research , Target group marketing , Product launches and driving Brand perception management. <br /><br />
                                                        Aishwarya believes that the key to every successful business is unwavering passion for customer excellence, and her corporate journey has allowed her to set up many systems to study, measure and improve customer delight. Her previous organisations include GE, Marico, Dr. Batra’s Positive Health Clinics etc . Her tenacity, innovative thinking and team management skills are what makes her unique and very valuable to our team.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-3 aos-init aos-animate mb-4" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
                                    <div className="box-fixer nwe-fex">
                                        <a href="javascript:void(0)" className='no-hover'>
                                            <img src={people12} alt="call" className="img-fluid" />
                                            <h4>Elizabeth Thomas <span>Associate Vice President - Operations</span></h4>
                                            {/* <a href='mailto:elizabeth@neubergdiagnostics.com' className='d-flex align-items-center mt-2 small'><MdEmail className='mr-2 m-0' size={22} />elizabeth@neubergdiagnostics.com </a> */}
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3 aos-init aos-animate mb-4" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
                                    <div className="box-fixer nwe-fex">
                                        <a href="javascript:void(0)" className='no-hover'>
                                            <img src={people15} alt="call" className="img-fluid" />
                                            <h4>Keerti Saha <span>GM - Human Resources</span></h4>
                                            {/* <a href='mailto:keerti.saha@neubergdiagnostics.com' className='d-flex align-items-center mt-2 small'><MdEmail className='mr-2 m-0' size={22} />keerti.saha@ neubergdiagnostics.com </a> */}
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3 aos-init aos-animate mb-4" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
                                    <div className="box-fixer nwe-fex">
                                        <a href="javascript:void(0)" className='no-hover'>
                                            <img src={people10} alt="call" className="img-fluid" />
                                            <h4>Govindaraj V <span>Associate General Manager - IT</span></h4>
                                            {/* <a href='mailto:govindaraj.v@neubergdiagnostics.com' className='d-flex align-items-center mt-2 small'><MdEmail className='mr-2 m-0' size={22} />govindaraj.v@ neubergdiagnostics.com </a> */}
                                        </a>
                                    </div>
                                </div>

                                {/* <div className="col-sm-12 col-md-6 col-lg-3 aos-init aos-animate mb-4" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
<div className="box-fixer nwe-fex">
<a href="javascript:void(0)" className='no-hover'>
<img src={people9} alt="call" className="img-fluid" />
<h4>Vaatsalya Vasanth <span>Deputy General Manager - Marketing</span></h4>
</a> 
</div>
</div> */}


                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}
