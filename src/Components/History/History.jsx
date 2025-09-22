import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-2.webp"; 
import ngblogo from "../../assets/images/logoberg.png"; 


export default function History() {
    useEffect(() => {
        document.title = "History";
        window.scroll(0,0)
      }, []);
  return (
    <div>

      <section className='inner-banner'>
    <img src={bannerimage} alt="call" className="img-fluid" />
        <div className="inner-caption">
        <div className="container">
            <div className="row">
                <div className="caption-details bnr-txt">
                    <ul>
                      <li><Link to='/'> Home </Link></li>
                      <li> / </li>   
                      <li><Link to='/about-us'> About Us </Link></li>
                      <li> / </li>
                      <li> History </li>
                    </ul>
                    <h1>
                    Delivering Reliable, Fast and Affordable<br></br> Diagnostic services since 1974
                    </h1>
                </div>
            </div>
        </div>
        </div>
</section>  

<section className='history-function'>
    <div className="container">
        <div className="row">
        <div className="col-lg-12">
            <div className="common-heading"><h2> <span className='inlne'>Our</span> History </h2></div>
            <p>Anand Diagnostic Laboratory’s exulting expertise in the field of investigative medicine and diagnostic testing comes with a strong groundwork for the dedicated set-up of the organisation. Our experience and establishments that have been milestones in this domain have been mapped out below.</p><br></br>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12">
				<h1 className="text-red text-center">Our Journey</h1>
				<ul className="timeline">
					<li className="timeline-left">
						<h6 className="text-red">1970 - 1980</h6>
						<h3>Established <br></br> Anand Diagnostic Laboratory</h3>
					</li>
					<li className="timeline-right">
						<h6> 1974</h6>
						<ul className="list-style1">
						    <li>Established Anand Diagnostic Laboratory</li>
						    <li>One of the first few stand-alone laboratories in Karnataka set up by a pathologist</li>
						</ul> <br></br>
						<h6> 1980</h6>
						<ul className="list-style1">
						    <li>First to start Radio Immunoassay for diagnosis as a private field in Karnataka</li>
						</ul>
					</li>
					
					<li className="timeline-left">
						<h6 className="text-red">1981 - 1990</h6>
                        <h3>New & Larger Premises</h3>
					</li>
					<li className="timeline-right">
						<h6>1987</h6>
						<ul className="list-style1">
						    <li>Moved to new & larger premises.</li>
						    <li>Started Auto analyser for Chemistry and established Radiology and imaging services</li>
						</ul> <br></br>
						<h6> 1988</h6>
						<ul className="list-style1">
						    <li>First lab to start Immunofluorescence, tissue typing / Cross matching for transplant workup</li>
						</ul>
					</li>
					
					<li className="timeline-left">
						<h6 className="text-red">1991 - 2000</h6>
                        <h3>Started Auto analyser</h3>
					</li>
					<li className="timeline-right">
						<h6>1993</h6>
						<ul className="list-style1">
						    <li>Started Auto analyser for Chemistry and established Radiology and imaging services</li>
						</ul> <br></br>
						<h6> 1997</h6>
						<ul className="list-style1">
						    <li>Started PCR testing for Tuberculosis</li>
						</ul> <br></br>
						<h6> 1998</h6>
						<ul className="list-style1">
						    <li>Introduced bar-coding in registration for positive identification of patient samples and upgraded Lab Information System (LIS)</li>
						</ul> <br></br>
						<h6> 2000</h6>
						<ul className="list-style1">
						    <li>First to provide microscopic image capture and print system for biopsy material and e-mail microscopic images.</li>
						    <li>First to provide report kiosk for 'any time report collection' in addition to web facilitation for viewing and downloading reports and receipt of reports through SMS.</li>
						</ul>
					</li>
					
					<li className="timeline-left">
						<h6 className="text-red">2001 - 2010</h6>
                        <h3> first NABL accredited </h3>
					</li>
					<li className="timeline-right">
						<h6>2001</h6>
						<ul className="list-style1">
						    <li>The very first NABL accredited lab in South India.</li>
                            <li>Started Home collection & sample pickup facility. Started web based test reports.</li>
						</ul> <br></br>
						<h6> 2003</h6>
						<ul className="list-style1">
						    <li>Renovated Lab to open hall concept and expanded client waiting lounge.</li>
                            <li>Started sample pick up from labs</li>
						</ul> <br></br>
						<h6> 2005</h6>
						<ul className="list-style1">
						    <li>Started collection centres</li>
						</ul> <br></br>
						<h6> 2006</h6>
						<ul className="list-style1">
						    <li>Integrated system for Chemistry and Immunoassay</li>
						</ul> <br></br>
						<h6> 2015</h6>
						<ul className="list-style1">
						    <li>Relocated to Bowring Tower, a 60,000 Sq. Ft. facility in Shivaji Nagar, Bangalore.</li>
						</ul> <br></br>
						<h6 className='mb-3'> 2017</h6>
						<ul className="list-style1">
						<img src={ngblogo} alt="call" className="img-fluid mb-2" />
						    <li>Anand Diagnostic Laboratory joined hands with Neuberg Diagnostics and became Neuberg Anand Reference Laboratory.</li>
						</ul> <br></br>
						<h6> 2020</h6>
						<ul className="list-style1">
						    <li>First lab in Karnataka to get ICMR approval for COVID RT-PCR testing.</li>
						</ul> <br></br>
						<h6> 2022</h6>
						<ul className="list-style1">
						    <li>Started franchise centres across Karnataka</li>
						</ul>
					</li>
 
				</ul>	
			</div>
        </div>
    </div>
</section>

    </div>
  )
}
