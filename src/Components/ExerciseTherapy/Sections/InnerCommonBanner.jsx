
import { Link } from "react-router-dom";
import bannerimage from "../../../assets/images/inner-banner-1.jpg"

export default function 
() {
  return (
    <section className='inner-banner'>
        <img src={bannerimage} alt="call" className="img-fluid" />
        <div className="inner-caption">
        <div className="container">
            <div className="row">
            <div className="caption-details bnr-txt">
                <ul>
                      <li><Link to='/'> Home </Link></li>
                      <li> / </li> 
                      <li> Health Checkup </li>
                      <li> / </li>
                      <li> Physiotherapy </li>
                      <li> / </li>
                      <li> Exercise Therapy  </li>
                    </ul>
                    <h1>
                    Can be started over night, But It<br></br> takes years to build an Institution.   
                    </h1>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}
