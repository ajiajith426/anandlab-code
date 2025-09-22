
import { Link } from "react-router-dom";
import bannerimage from "../../../assets/images/inner-banner-5.webp"

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
                  <li> Doctors </li>
                  <li> / </li>
                  <li> Department </li>
                </ul>
                <h1>
                  Transformimg Lives with <br />Technology and Advancements
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
