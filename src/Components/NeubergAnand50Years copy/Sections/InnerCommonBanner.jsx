
// import { Link } from "react-router-dom";
import bannerbgimage from "../../../assets/images/50-yrs-banner-new.jpg";
// import bannerimage from "../../../assets/images/illustration-for-50-yrs-banner.png";
// import border from "../../../assets/images/50-yrs-line.png";

export default function
  () {
  return (
    <section className='inner-banner'>
      <img src={bannerbgimage} alt="call" className="img-fluid w-100" />
      {/* <div className="inner-caption">
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-7 d-flex align-items-center">
              <div className="caption-details bnr-txt">
                <h1>
                  Featured <br />
                  Workshops
                </h1>
                <img src={border} alt="call" className="line-image" />
              </div>
            </div>
            <div className="col-6 col-sm-5">
              <div className="bannner-img">
                <img src={bannerimage} alt="call" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  )
}
