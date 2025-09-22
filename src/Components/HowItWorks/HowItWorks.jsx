import GlobalStyle from "./HowItWorks.module.css";
import how_work1 from '../../assets/images/landing_pages/Share-your-details.png';
import how_work2 from '../../assets/images/landing_pages/Schedule-the-test.png';
import how_work3 from '../../assets/images/landing_pages/visit-your-home-1.png';
import how_work4 from '../../assets/images/landing_pages/visit-your-home.png';
import how_work5 from '../../assets/images/landing_pages/Get-your-reports.png';


const HowItWorks = () => {
    return (
        <div className={`container py-5`}>
            <div className="row">
                <div className={`col-12 mb-4`} >
                    <h3 className={`${GlobalStyle.purple_text} fw-bold text-center ${GlobalStyle.section_heading}`}>How It Works </h3>
                </div>

                <div className="col-md col-sm-4">
                    <div className={`${GlobalStyle.how_it_work_module}`}>
                        <img src={how_work1} alt="icon" className="d-block mx-auto mb-4 img-fluid" />
                        <span>Share your details with us</span>
                    </div>
                </div>
                <div className="col-md col-sm-4">
                    <div className={`${GlobalStyle.how_it_work_module}`}>
                        <img src={how_work2} alt="icon" className="d-block mx-auto mb-4 img-fluid" />
                        <span>Schedule the test at your home</span>
                    </div>
                </div>
                <div className="col-md col-sm-4">
                    <div className={`${GlobalStyle.how_it_work_module}`}>
                        <img src={how_work3} alt="icon" className="d-block mx-auto mb-4 img-fluid" />
                        <span>Our representative would visit your home</span>
                    </div>
                </div>
                <div className="col-md col-sm-4">
                    <div className={`${GlobalStyle.how_it_work_module}`}>
                        <img src={how_work4} alt="icon" className="d-block mx-auto mb-4 img-fluid" />
                        <span>We process your samples at our labs</span>
                    </div>
                </div>
                <div className="col-md col-sm-4">
                    <div className={`${GlobalStyle.how_it_work_module}`}>
                        <img src={how_work5} alt="icon" className="d-block mx-auto mb-4 img-fluid" />
                        <span>Get your reports online</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks