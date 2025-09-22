import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-2.jpg";  

export default function HeadOffice() {
  useEffect(() => {
    document.title = "Head Office & Other Locations";
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
                      <li> <Link to='/reach-us'> Reach us </Link></li>
                      <li> / </li> 
                      <li> Head Office & Other Locations </li>
                    </ul>
                    <h1>
                    Corporate Partnerships
                    </h1>
                </div>
            </div>
        </div>
        </div>
    </section>

    <section className='abt-secton forumn-frm'>
      <div className="container">
        <div className="row"> 
          <div className="col-lg-8">
          <div className="common-heading"><h2> <span className="inlne"> Head Office </span> & Other Locations</h2>
          <p>We are looking for Partners who can grow with us and help us expand our reach to offer state of the art diagnostic services available across the country. Today Anand Diagnostic Laboratory is a leading diagnostic player with over 100+ clinical laboratories and 1500+ collection centers across India. We invite you to be a franchisee and be part of this growth story.</p>
          <p>An association with us offers an ideal environment and platform for a partner to be part of the growing Indian healthcare industry. We offer exciting opportunities to enthusiastic individuals with a strong business acumen and interest in replicating the Anand Diagnostic Laboratory business model successfully in their locality.</p>
          </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="green-bg ps-rel animated fadeInRight">
              <h4 className="mb-3 text-center text-white">Interested? <br/>Let's get talking!</h4>   
								<form name="contactform" method="post" action="#" id="contactform" > 
                                <div className="formdata"><input type="text" placeholder="Name" name="name" id="name" className="form-control jsrequired " /></div>
                                <div className="formdata"><input type="tel" placeholder="Enter Your Mobile Number" name="mobile" id="mobile" className="form-control jsrequired " /></div>
                                <div className="formdata"> <input type="email" placeholder="Enter Your Email ID" name="email" id="email"  className="form-control jsrequired " /></div>
                                <div className="formdata"><input type="text" placeholder="Company Name" name="name" id="name" className="form-control jsrequired " /></div>
                                <div className="formdata"><input type="text" placeholder="Designation" name="name" id="name" className="form-control jsrequired " /></div>  
                                <div className="formdata"><textarea className="form-control" placeholder="Message" name="msg" id="msg"></textarea></div>
                                <div className="formdata"> <input type="button" name="submit" value="Submit" onClick="submit_contact();" /></div>
                            </form>
                            </div>
                        </div>

        </div>
      </div>
    </section>

  
 
    

    </div>
  )
}
