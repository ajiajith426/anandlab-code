
import { Link } from "react-router-dom";
import bannerimage from "../../../assets/images/inner-banner-12.webp"

export default function 
() {
  return (
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
                      <li> Patients </li>
                      <li> / </li>
                      <li> Drive Through Blood Collection </li>
                    </ul>
                    <h1>
                    Anand Diagnostics Laboratory is one of the<br></br> largest diagnostics company in India   
                    </h1>
                </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}
