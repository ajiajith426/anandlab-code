
import { Link } from "react-router-dom";
import bannerimage from "../../../assets/images/inner-banner-13.webp"

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
                      <li><Link to='/'></Link> Solutions </li>
                      <li> / </li>
                      <li><Link to='/'></Link> Patient Care </li>
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
  )
}
