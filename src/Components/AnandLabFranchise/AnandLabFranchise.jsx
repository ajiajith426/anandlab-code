import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-2.jpg";  

export default function AnandLabFranchise() {
  useEffect(() => {
    document.title = "Neuberg Anand Franchise";
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
                      <li> Neuberg Anand Franchise </li>
                    </ul>
                    <h1>
                    Become a Business Partner
                    </h1>
                </div>
            </div>
        </div>
        </div>
    </section>

    <section className='abt-secton forumn-frm'>
      <div className="container">
        <div className="row"> 
          <div className="col-lg-7">
          <div className="common-heading"><h2> <span className="inlne">Neuberg Anand </span>  Franchise</h2>
          <p>We are looking for Partners who can grow with us and help us expand our reach to offer state of the art diagnostic services available across the country. Today Anand Diagnostic Laboratory is a leading diagnostic player with over 100+ clinical laboratories and 1500+ collection centers across India. We invite you to be a franchisee and be part of this growth story.</p>
          <p>An association with us offers an ideal environment and platform for a partner to be part of the growing Indian healthcare industry. We offer exciting opportunities to enthusiastic individuals with a strong business acumen and interest in replicating the Anand Diagnostic Laboratory business model successfully in their locality.</p>
          </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-5">
            <div className="green-bg ps-rel franc-isemed animated fadeInRight">
              <h4 className="mb-3 text-center text-white">Partner Lead</h4>   
								<form name="contactform" method="post" action="#" id="contactform" > 
                    <div className="formdata"><input type="text" placeholder="Name" name="name" id="name" className="form-control jsrequired " /></div> 
                    <div className="formdata"><textarea className="form-control" placeholder="Address" name="msg" id="msg"></textarea></div>
                    <div className="formdata"><input type="tel" placeholder="Pin Code" name="mobile" id="mobile" className="form-control jsrequired " /></div>
                    <div className="formdata"><input type="text" placeholder="State" name="name" id="name" className="form-control jsrequired " /></div>
                    <div className="formdata"><input type="text" placeholder="City" name="name" id="name" className="form-control jsrequired " /></div>
                    <div className="formdata"><input type="text" placeholder="Ownership" name="name" id="name" className="form-control jsrequired " /></div>
                    <div className="formdata"><input type="text" placeholder="Profession" name="name" id="name" className="form-control jsrequired " /></div>
                    <div className="formdata"><input type="text" placeholder="Select association with LPL" name="name" id="name" className="form-control jsrequired " /></div>
                    <div className="formdata"><input type="tel" placeholder="Enter Your Mobile Number" name="mobile" id="mobile" className="form-control jsrequired " /></div>
                    <div className="formdata"> <input type="email" placeholder="Enter Your Email ID" name="email" id="email"  className="form-control jsrequired " /></div> 
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
