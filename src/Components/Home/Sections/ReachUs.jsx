import { Link } from 'react-router-dom'
import call from '../../../assets/images/call.png'
import callUs from '../../../assets/images/call-us.png'
import mail from '../../../assets/images/mail.png'

export default function ReachUs() {
    return (
        <section className="reach-uslinks">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <div className="call-us">
                            <div className="row text-center">
                                {/* <div className="col-md-4">
                                    <Link to="tel:18004251974">
                                        <img src={call} alt="call" className="img-fluid mb-3" />
                                        <h4>1800 425 1974 <span>Sample Collections</span></h4>
                                    </Link>
                                </div> */}
                                <div className="col-md-6">
                                    <Link to="tel:+918035287579 ">
                                        <img src={callUs} width={60} alt="call" className="img-fluid mb-3" />
                                        <h4>+918035287579  <span>Call us</span></h4>
                                    </Link>
                                </div>
                                <div className="col-md-6">
                                    {/* <a href="mailto:info@anandlab.com">
                                        <img src={mail} alt="mail" className="img-fluid mb-3" />
                                        <h4 className='pb-1'>info@anandlab.com</h4>
                                    </a> */}

                                    {/* <a href="mailto:helpdesk@anandlab.com">
                                        <h4>helpdesk@anandlab.com
                                        <span className='pt-1'>Need support? Drop us an email</span></h4>
                                    </a> */}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="share-us">
                            <ul className="footer-socials">
                                <li>
                                    <Link to="https://www.facebook.com/anandlab" target="_blank"> <i className="fa fa-facebook" aria-hidden="true"></i> </Link>
                                </li>
                                <li>
                                    <Link to="https://twitter.com/anandlab" target="_blank"> <i className="fa fa-twitter" aria-hidden="true"></i> </Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/anandlab/" target="_blank"> <i className="fa fa-instagram" aria-hidden="true"></i> </Link>
                                </li>
                                <li>
                                    <Link to="https://www.linkedin.com/company/anand-diagnostic-laboratory---india" target="_blank"> <i className="fa fa-linkedin" aria-hidden="true"></i> </Link>
                                </li>
                                <li>
                                    <Link to="https://www.youtube.com/channel/UCtLXi-RRdZAoR9989vVHYKg" target="_blank"> <i className="fa fa-youtube-play" aria-hidden="true"></i> </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
