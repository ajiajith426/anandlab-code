import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-2.jpg";  

export default function CancellationPolicy() {
  useEffect(() => {
    document.title = "Cancellation Policy";
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
                      <li> Cancellation Policy </li>
                    </ul>
                    <h1>
                    Can be started over night, But It<br></br> takes years to build an Institution.
                    </h1>
                </div>
            </div>
        </div>
        </div>
</section>  

<section className='people-function phsiyo-therphy'> 
<div className="container">
    <div className="row"> 
        <div className="col-lg-12">
            <div className="common-heading"><h2> <span className='inlne'>Cancellation</span> Policy</h2></div>
                 <p>Anand Diagnostics Laboratory Private  Limited believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:</p>
                 <p>1.The customer is eligible for a 100% refund if,</p>
                 <div className="detilos-expl indication-details policeis-migrate">
                  <ul>
                    <li>If the order is cancelled any time after the transaction and 24 hours before the phlebotomist visit to the customers house</li>
                    <li>If customer has done multiple bookings due to system error</li>
                    <li>If booking has been done and there is no phlebotomist available in that area/time slot</li>
                    </ul>
                    </div>
                    
                    <p>2. If the order is cancelled when Phlebo visits the patient premises but the booking is cancelled and sample is not collected, only home collection charges will be levied as per the existing policy<br></br><br></br>
3. When the tests are unreported due to technical reasons, </p>
<div className="detilos-expl indication-details policeis-migrate">
                  <ul>
                    <li>Sample collected, processed but fully cancelled by the laboratory (all tests unreported) due to technical reasons
                     <ul className="no-cllas">
                      <li> Centers shall collect the fresh specimen and process for free of cost. Alternatively, the patient also reserves the right to ask for refund which shall be granted in full to him/her as the case may be. The specimen re-collection has to be done within 15 days, post which no retesting is possible.</li>
                      </ul> 
                      </li> 
                    <li>Sample collected, processed but partly cancelled by the laboratory (one or more tests unreported) due to technical reasons
                    <ul className="no-cllas">
                      <li> Centers shall collect the fresh specimen and process the unreported test(s) free of cost. Alternatively, the patient also reserves the right to ask for a refund of unreported test(s) only, which will be calculated as per its catalogue rate (excluding collection charges), corrected to its weighted average in the order value. The specimen re-collection has to be done within 15 days, post which no retesting is possible.</li>
                      </ul>
                    </li>
                    </ul>
                    </div>
<p>4. If the order is cancelled after the sample is picked up, 100% of the payment will be deducted as cancellation fee<br></br><br></br>
5. When a request for refund reaches the company, amount paid will be credited into patient account/card for within a maximum of 14 (Business days) days from date of cancellation<br></br><br></br>
6. There shall be no provisions for refund after 15 days from the date of preferred slot have been booked by patient<br></br><br></br>
7. Cancellations received after the stated deadline will not be eligible for a refund<br></br><br></br>
8. Requests for refund must include the name of the attendee and/or transaction number. Details to be sent to hc@anandlab.com<br></br><br></br>
<strong>If anything is unclear or you have more questions, feel free to contact our customer support team on 18004251974.</strong>
</p> 
        </div>    
    </div>
</div>
</section>     
    </div>
  )
}
