import { useRef, useState, useMemo } from "react";
import logo from "./../../assets/images/logo.png";
import logoberg from "./../../assets/images/logoberg.png";
import location from "./../../assets/images/location.png";
import sky from "./../../assets/images/sky.png";
import toll from "./../../assets/images/toll.png";
import user from "./../../assets/images/user.png";
import men4 from "./../../assets/images/men-4.png";
import dwd from "./../../assets/images/dwd.png";
import CartCount from "./CartCount";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-component-form";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { setTestLocation } from "../../Redux/Actions/TestAction";
import { toast } from "react-hot-toast";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import axios from 'axios'

export default function Header() {
  const authUser = useSelector((state) => state.authUser);
  const TestLocation = useSelector((state) => state.TestLocation);
  const navigate = useNavigate();
  const navElement = useRef();
  const toggleIcon = useRef();
  const [show, setShow] = useState(false);
  const [LabLocation, setLabLocation] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
  const changeLocation = () => {
    if (LabLocation) {
      dispatch(setTestLocation(LabLocation))
      localStorage.setItem('TestLocation', LabLocation)
      handleClose();
      toast.success('Location to be Changed')
    }
  }
  useMemo(() => {
    if (TestLocation !== null) {
      setLabLocation(TestLocation.TestLocation)
    }
  }, [])

  useMemo(() => {
    axios.get(API_URL.LOCATIONS).then((response) => {
      localStorage.setItem('locations', JSON.stringify(response.data.data))
    })
  }, []);

  function handleLink(e) {
    navElement.current.classList.remove("show");
    toggleIcon.current.classList.add("collapsed");
    let navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((navItem) => {
      if (navItem.classList.contains("active")) {
        navItem.classList.remove("active");
      }
    });
    let plusItems = document.querySelectorAll(".fa-minus");

    plusItems.forEach((plusItem) => {
      if (plusItem.classList.contains("fa-minus")) {
        plusItem.classList.remove("fa-minus");
        plusItem.classList.add("fa-plus");
      }
    });
  }

  function mobileToggle(e) {
    e.preventDefault();

    let root = e.target.parentElement.parentElement;
    let child = e.target;
    if (child.classList.contains("fa-plus")) {
      child.classList.remove("fa-plus");
      child.classList.add("fa-minus");
    } else {
      child.classList.add("fa-plus");
      child.classList.remove("fa-minus");
    }
    if (root.classList.contains("active")) {
      root.classList.remove("active");
      navElement.current.classList.remove("down-menu-open");
    } else {
      root.classList.add("active");
      navElement.current.classList.add("down-menu-open");
    }
  }
  return (
    <>
      <header id="header" className="main-header site-navbar">
        <div className="container">
          <div className="row w-100"> 
            <div className="col">
              <nav className="navbar navbar-default navbar-trans navbar-expand-lg">
                <Link to="https://www.neubergdiagnostics.com/" className="navbar-brand text-brand">
                  <img src={logoberg} alt="" className="img-fluid" />
                </Link>
                <div
                  className="navbar-collapse collapse justify-content-center1"
                  id="navbarDefault"
                  ref={navElement}
                >
                  <div className="row align-items-center1 no-disp-tabscrn  w-100">
                    {/* <div className="col">
                      <ul className="top-links text-center">
                        <li>
                          <input
                            type="text"
                            placeholder="Search for Health Packages / Tests / Labs"
                            readOnly
                            onClick={() => navigate('/for-patient')}
                          />
                        </li>
                      </ul>
                    </div> */}
                    {/* <div className="col-12">
                      <ul className="icns-lst text-center1">
                        <li>
                          <a onClick={handleShow}>
                            <img src={location} alt="" className="img-fluid" />
                            <span>{TestLocation !== null ? TestLocation.TestLocation.replaceAll('-', ' ') : null}</span>
                          </a>
                        </li>
                        <li> */}
                          {/* <Link to='/reports'> */}
                          {/* <Link to="https://narllims.neubergdiagnostics.com/#/laboratory/public" target="_blank">
                            <img src={sky} alt="" className="img-fluid" />
                            <span>Report</span>
                          </Link>
                        </li>
                        <li>
                          <a href="tel:18004251974">
                            <img src={toll} alt="" className="img-fluid" />
                            <span>Toll-free</span>
                          </a>
                        </li>
                        <li>
                          {
                            authUser.user.length === 0 && authUser.user !== null ?
                              <Link to="/login">
                                <img src={user} alt="" className="img-fluid" />
                                <span>Login</span>
                              </Link>
                              :
                              <Link to="/my-account">
                                <img src={user} alt="" className="img-fluid" />
                                <span>Account</span>
                              </Link>
                          }
                        </li> */}
                        {/* <li>
                          <CartCount />
                        </li> */}
                      {/* </ul>
                    </div> */}
                  </div>
                  <div className="">
                    <div className="">
                      
                    </div>
                  </div>
                </div>
                {/* <Link
                  onClick={handleLink}
                  to="/"
                  className="navbar-brand text-brand rit-sde"
                >
                  <img src={logoberg} alt="" className="img-fluid" />
                </Link> */}
                {/* <button
                  ref={toggleIcon}
                  className="navbar-toggler collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarDefault"
                  aria-controls="navbarDefault"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button> */}


                {/* <Link onClick={handleLink} className="srch-btn" to="/for-patient">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </Link> */}

                <div
                  className="modal fade cstm tpm-set"
                  id="srch"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="mdl-cnt">
                          <input
                            type="text"
                            placeholder="Search for Health Packages / Tests / Labs"
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

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
  );
}
