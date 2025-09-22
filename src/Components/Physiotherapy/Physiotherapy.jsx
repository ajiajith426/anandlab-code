import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-2.jpg"; 
import theraphy1 from "../../assets/images/phy-1.jpg"; 
import theraphy2 from "../../assets/images/phy-2.jpg"; 
import theraphy3 from "../../assets/images/phy-3.jpg"; 

export default function Physiotherapy() {
  useEffect(() => {
    document.title = "Physiotherapy";
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
                      <li> Health Checkup </li>
                      <li> / </li>
                      <li> Physiotherapy </li>
                    </ul>
                    <h1>
                    Can be started over night, But It<br></br> takes years to build an Institution.
                    </h1>
                </div>
                </div>
            </div>
        </div>
        </div>
</section>  

<section className='people-function phsiyo-therphy'> 
<div className="container">
    <div className="row"> 
        <div className="col-lg-12">
            <div className="common-heading"><h2> <span className='inlne'>Our</span> Services </h2></div>
                 <p>Anand Diagnostic Laboratory strives for excellence in patient care with its highly efficient and accuracy-oriented processes. Our advanced state-of-the-art technology helps the patients in achieving a detailed and progressive inference. Here is a list of our extensive range of services.</p>
        </div>  
        
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="common-heading"> 
            <br></br><br></br>
            </div>
            <div className="knoledge-hub">
              <img src={theraphy1} alt="" className="img-fluid"/>
              <div className="know-hub">
                <h4>Manual Therapy</h4> 
                <p><a href="/manual-therapy">Know More</a></p>
              </div>
            </div>
          </div>  
        
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="common-heading"> 
            <br></br><br></br>
            </div>
            <div className="knoledge-hub">
              <img src={theraphy2} alt="" className="img-fluid"/>
              <div className="know-hub">
                <h4>Exercise Therapy</h4> 
                <p><a href="/exercise-therapy">Know More</a></p>
              </div>
            </div>
          </div>  
        
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="common-heading"> 
            <br></br><br></br>
            </div>
            <div className="knoledge-hub">
              <img src={theraphy3} alt="" className="img-fluid"/>
              <div className="know-hub">
                <h4>Electrotherapy</h4> 
                <p><a href="/electrotherapy">Know More</a></p>
              </div>
            </div>
          </div>

    </div>
</div>
</section>     
    </div>
  )
}
