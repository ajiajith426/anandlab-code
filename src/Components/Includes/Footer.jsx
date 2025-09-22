import { useState } from 'react'
import send from './../../assets/images/send.png'
import playstore from './../../assets/images/playstore.png'
import ReachUs from '../Home/Sections/ReachUs'
import { Link } from 'react-router-dom'
import location from './../../assets/images/mob-ic-1.png';
import sky from './../../assets/images/mob-ic-4.png';
import cart from './../../assets/images/mob-ic-3.png';
import toll from './../../assets/images/mob-ic-5.png';
import user from './../../assets/images/mob-ic-2.png';
import { API_URL } from '../../Redux/Constant/ApiRoute'
import { toast } from 'react-hot-toast'
import { NewsletterResponse } from '../../Helpers/FormResponse'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from 'react-bootstrap'
import { Form } from 'react-component-form'
import { setTestLocation } from '../../Redux/Actions/TestAction' 
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { CgSpinner } from 'react-icons/cg';
import axios from 'axios';
export default function Footer() {
  const dispatch = useDispatch()
  const [LabLocation, setLabLocation] = useState(null);
  const TestLocation = useSelector((state) => state.TestLocation);
  const authUser = useSelector((state) => state.authUser);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const changeLocation = (data) => {
    dispatch(setTestLocation(data.location))
    localStorage.setItem('TestLocation', data.location)
    handleClose();
    toast.success('Location to be Changed')
  }
  const [Loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(Yup.object().shape({ email: Yup.string().required() }))
  })
  const SubscribeNewsLetter = (data) => {
    setLoading(true)
    axios.post(API_URL.NEWS_LETTER, data).then((response) => {
      if (response.data.Errors === false) {
        NewsletterResponse()
        NewsletterResponse() 
      } else {
        toast.success(response.data.Message)
      }
      reset()
      setLoading(false)
    })
  }
  return (
    <>
      <ReachUs />
      <footer>
        <div className="container">
          <div className="row no-gutters">
            <div className="col-sm-12 col-md-12 col-lg-12 p-0">
              <div className="footer-column row">
                <div className="col-lg-2">
                  <ul>
                    <h5>Quick Links</h5>
                    <li>
                      <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link to="/people-behind">People Behind</Link>
                    </li>
                    <li>
                      <Link to="/history">History</Link>
                    </li>
                    <li>
                      <Link to="/commitment">Commitment</Link>
                    </li>
                    <li>
                      <Link to="/accreditation">Accreditation</Link>
                    </li>
                    {/* <li>
                    <Link to="/">Book a Blood Test</Link>
                  </li> */}
                    <li>
                    {/* <Link to="/reports"> */}
                    <Link to="https://narllims.neubergdiagnostics.com/#/laboratory/public
" target="_blank">
                      Download Reports
                    </Link>
                    </li>
                    <li>
                      <Link to="/packages">Health Packages</Link>
                    </li>
                    <li>
                      <a href="https://www.anandlab.com/blog/" target="_blank">Blog</a>
                    </li>
                    <li>
                      <Link to="/careers">Careers</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul>
                    <h5>Patients</h5>
                    <li>
                      <Link to="/packages">Packages</Link>
                    </li>
                    <li>
                      <Link to="/for-patient">Explore all Tests</Link>
                    </li>
                    <li>
                      <Link to="/preparing-for-health-checkup">Preparing for Health Checkup</Link>
                    </li>
                    <li>                                     
                    {/* <Link to="/reports"> */}
                    <Link to="https://narllims.neubergdiagnostics.com/#/laboratory/public
" target="_blank">
                      Download Reports
                    </Link>
                    </li>
                    {/* <li>
                    <Link to="/">Book an Appointment </Link>
                  </li> */}
                    <li>
                      <Link to="/patients-consumers">Patient Care</Link>
                    </li>
                    <li>
                      <Link to="/feedback">Feedback</Link>
                    </li>
                    {/* <li>
                    <Link to="/">Special Offers</Link>
                  </li> */}
                    <li>
                      <a href="https://www.anandlab.com/blog/" target="_blank">Health Tips</a>
                    </li>
                    {/* <li>
                    <Link to="/">Diabetes Assessment Tool</Link>
                  </li> */}
                    <li>
                      <Link to="/faq">FAQs</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <ul>
                    <h5>Doctors</h5>
                    <li>
                      <a href="https://reports.anandlab.com/dos/" target="_blank">Directory of Service</a>
                    </li>
                    <li>
                      <Link to="/department">Department</Link>
                    </li>
                    <li>
                      <Link to="/hospital-or-lab-management">Hospital or Lab Management</Link>
                    </li>
                    <li>
                      <Link to="/clinical-lab-management">Clinician Lab Management</Link>
                    </li>
                    <li>
                      <Link to="/franchising-opportunities">Franchise Opportunities</Link>
                    </li>
                    <li>
                      <Link to="/research">Research</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-2">
                  <ul>
                    <h5>Reach Us</h5>
                    <li>
                      <Link to="/reach-us">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/find-lab">Reach our Lab</Link>
                    </li>

                    <li>
                      <Link to="/careers">Job Opportunities</Link>
                    </li>
                    <li>
                      <a href="http://www.naalm.com/academics/" target="_blank">Upgrade your Skills</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-2">
                  <ul>
                    <h5>Terms and Policies</h5>
                    <li>
                      <Link to="/cancellation-policy">Cancellation Policy</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/terms-conditions">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link to="/feedback">Feedback</Link>
                    </li>
                  </ul>
                  <h5 className="cips">Download App</h5>
                  <a href="https://play.google.com/store/apps/details?id=com.neubergdiagnostics" target="_blank"><img src={playstore} alt="" className="img-fluid" /></a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="footer-column subs-cribe">
                <h5>Subscribe to our newsletter</h5>
                <p>Sign Up for our newsletter to get the latest news and updates in your inbox.</p>
                <form onSubmit={handleSubmit(SubscribeNewsLetter)} className='position-relative'>
                  <input {...register('email')} type="email" placeholder="Enter Your E-mail Id" className={`form-control ${errors?.email && 'border border-danger'}`} />
                  {
                    Loading
                      ?
                      <button type="submit" disabled >
                        <CgSpinner className="fa-spin" size={25} color="#501e83" style={{ position: 'absolute', right: 0, top: -20 }} />
                      </button>
                      :
                      <button type="submit" >
                        <img src={send} className="img-fluid" />
                      </button>
                  }
                </form>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col">
              <div className="divider"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <div className="text-white footer-bottom-text text-center">
                &copy;  {new Date().getFullYear()} Anandlab. All Rights Reserved. Made with Passion by <Link to="https://www.pixel-studios.com/" target="_blank"><strong>Pixel Studios</strong></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>


      <div className="mobile-footer">
        <a onClick={handleShow} style={{ color: '#000', textTransform: 'capitalize' }}>
          <img src={location} alt="" className="img-fluid" />
          <span>{TestLocation !== null ? TestLocation.TestLocation.replaceAll('-', ' ') : null}</span>
        </a>
        {/* <Link to="/reports" data-toggle="tooltip" title="Download Your Reports"> */}
        <Link to="https://narllims.neubergdiagnostics.com/#/laboratory/public
" 
                target="_blank" data-toggle="tooltip" title="Download Your Reports">
          <img src={sky} alt="" className="img-fluid" />
        Reports
        </Link> 
        <a href="tel:18004251974" target="_blank" data-toggle="tooltip" title="Call Us"><img src={toll} alt="" className="img-fluid" />
          Toll-Free
        </a>
        {
          authUser.user.length === 0 && authUser.user !== null ?
            <Link to="/login" data-toggle="tooltip" title="Login to view your Profile">
              <img src={user} alt="" className="img-fluid" />
              <span>Login</span>
            </Link>
            :
            <Link to="/my-account" data-toggle="tooltip" title="view your Profile">
              <img src={user} alt="" className="img-fluid" />
              <span>Account</span>
            </Link>
        }
        <Link to="/my-cart" data-toggle="tooltip" title="Cart Details">
          <img src={cart} alt="" className="img-fluid" />
          Cart
          <span className='numb-circle'>10</span>
        </Link>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        className="otp-pops location-pops"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="row fully-bxn no-gutters">
            <div className="col-lg-12 seceter-frm text-center">
              <h4 className="mb-3">Please Select your Location</h4>
              <Form onSubmit={changeLocation} className='input-group'>
                {
                  localStorage.getItem('locations') ?
                    <select name="location" onChange={(e) => setLabLocation(e.target.value)} className='form-control form-control-lg'>
                      <option value=""> -- select -- </option>
                      {
                        JSON.parse(localStorage.getItem('locations')).map((location) => (
                          <option key={location.id} selected={LabLocation === location.location_slug} value={location.location_slug} >{location.location.toUpperCase()}</option>
                        ))
                      }
                    </select>
                    : null
                }
                <button className="btn-sm btn-primary"> Locate </button>
              </Form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
