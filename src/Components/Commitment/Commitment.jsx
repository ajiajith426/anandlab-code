import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-18.webp"; 
import commi1 from "../../assets/images/comite-1.jpg"; 
import commi2 from "../../assets/images/comite-2.jpg"; 
import commi3 from "../../assets/images/comite-3.jpg"; 
import commi4 from "../../assets/images/comite-4.jpg"; 
import commi5 from "../../assets/images/comite-5.jpg"; 


export default function Commitment() {
   useEffect(() => {
      document.title = "Commitment";
      window.scroll(0,0)
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
                      <li> Commitment </li>
                    </ul>
                    <h1>
                    Delivering Reliable, Fast and Affordable <br></br>Diagnostic services since 1974
                    </h1>
                </div>
                </div>
            </div>
        </div>
        </div>
</section>  

<section className="section section-top-btm">
<div className="container">

<div className="col-lg-12 text-center">
            <div className="common-heading"><h2> <span className='inlne'>Our</span> Commitment </h2></div>
            <p><i>We are the parivar of Anand Diagnostic Laboratory, and we ensure there is 'Care' in healthcare.</i></p><br></br>
        </div>
   <div className="row align-items-center flex-column-reverse flex-md-row">

      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
         <div className="rnge-prds text-left">
            <div className="common-title drk animated fadeInUp mb-3">
               <h4>'Care' for our Patrons</h4>
            </div>
            <div className="common-para1 drk">
               <p className="animated fadeInUp">We believe that our foremost duty is to serve the people that entrust us with their health needs. We care about offering a safe, secure, complete and confident service experience to our patrons. We care about taking every measure to earn our patrons’ trust, and leave no stone unturned to ensure that this trust is not lost. We care about providing reliable results at an affordable cost and maintain transparency throughout the service experience.</p>
            </div>
         </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
         <div className="prdts-img animated fadeInRight">
         <img src={commi1} alt="call" className="img-fluid" />
         </div>
      </div>            
   </div>
   <div className="row resp-nne">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 animated fadeInUp"><br></br><br></br><hr/></div>
   </div>
</div>
</section> 

<section className="range-of-products section-top-btm pt-0">
<div className="container">
   <div className="row align-items-center flex-md-row">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
         <div className="prdts-img animated fadeInRight">
         <img src={commi2} alt="call" className="img-fluid" />
         </div>
      </div>   
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
         <div className="rnge-prds text-left">
            <div className="common-title drk animated fadeInUp mb-3">
               <h4>'Care' for our Partners</h4>
            </div>
            <div className="common-para1 drk">
               <p className="animated fadeInUp">We are responsible for enabling our partners to provide the same quality of care to their patrons by offering them the same level of quality and reliability in services given to our patrons. We care about maintaining robust logistics and communication channels to ensure timely delivery of services. We assure that due respect is given to every biological material that comes to our facility for testing, and ensure that client information remains confidential.</p>
            </div>
         </div>
      </div>         
   </div>
   <div className="row resp-nne">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 animated fadeInUp"><br></br><br></br><hr/></div>
   </div>
</div>
</section>  

<section className="section range-of-products section-top-btm pt-0">
<div className="container">
   <div className="row align-items-center flex-column-reverse flex-md-row">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
         <div className="rnge-prds text-left">
            <div className="common-title drk animated fadeInUp mb-3">
               <h4>'Care' for our Family</h4>
            </div>
            <div className="common-para1 drk">
               <p className="animated fadeInUp">We, as a family, enable each other to work towards delivering the promises made to our patrons and our partners. We care about the wellbeing of each other and provide due assistance to our colleagues when needed. We believe that every human being deserves to be treated with respect and care, and this includes every individual who works with us in this establishment.</p>
            </div>
         </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
         <div className="prdts-img animated fadeInRight">
         <img src={commi3} alt="call" className="img-fluid" />
         </div>
      </div>            
   </div>
   <div className="row resp-nne">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 animated fadeInUp"><br></br><br></br><hr/></div>
   </div>
</div>
</section> 

<section className="range-of-products section-top-btm pt-0">
<div className="container">
   <div className="row align-items-center flex-md-row">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
         <div className="prdts-img animated fadeInRight">
         <img src={commi4} alt="call" className="img-fluid" />
         </div>
      </div>   
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
         <div className="rnge-prds text-left">
            <div className="common-title drk animated fadeInUp mb-3">
               <h4>'Care' for our Associates</h4>
            </div>
            <div className="common-para1 drk">
               <p className="animated fadeInUp">We take care to choose associates and vendors who align with our vision of providing the best in class service to our patrons at the right cost. We ensure that we evaluate the latest developments in healthcare services regularly and introduce those new products and services that we believe will be helpful for our patrons and partners.</p>
            </div>
         </div>
      </div>         
   </div>
   <div className="row resp-nne">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 animated fadeInUp"><br></br><br></br><hr/></div>
   </div>
</div>
</section>  

<section className="section range-of-products section-top-btm pt-0">
<div className="container">
   <div className="row align-items-center flex-column-reverse flex-md-row">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
         <div className="rnge-prds text-left">
            <div className="common-title drk animated fadeInUp mb-3">
               <h4>'Care' for our Legacy</h4>
            </div>
            <div className="common-para1 drk">
               <p className="animated fadeInUp">We care about functioning in an ethical environment where there is no scope for questionable practices. We believe in spreading goodwill amongst everybody that we interact with. We care about giving back to the community that has supported us in our journey, reducing our carbon footprint to reduce the damage caused to the planet, and above all, we care about upholding our integrity by ensuring there is transparency in all our activities.</p>
            </div>
         </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
         <div className="prdts-img animated fadeInRight">
         <img src={commi5} alt="call" className="img-fluid" />
         </div>
      </div>            
   </div>
   <div className="row resp-nne">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 animated fadeInUp"><br></br><br></br><hr/></div>
   </div>
</div>
</section> 

</div>

)
}
