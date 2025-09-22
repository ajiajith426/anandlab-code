import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router';
import bannerimage from "../../assets/images/inner-banner-2.jpg";
import axios from "axios";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { useDispatch } from "react-redux";
import { setLoading } from "../../Redux/Actions/LoaderAction";
import { ContentContainer } from "../../Helpers";

export default function FindLab() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [Lab, setLab] = useState([]);
  const [LabLocation, setLabLocation] = useState([]);

  const getLocation = () => {
    dispatch(setLoading(true))
    if (location.state.LocationId === null) {
      axios.get(API_URL.GET_LAB_LOCATION).then((response) => {
        dispatch(setLoading(false))
        setLabLocation(response.data);
      });
    } else {
      axios.get(`${API_URL.GET_LAB_LOCATION}/${location.state.LocationId}`).then((response) => {
        dispatch(setLoading(false))
        setLab(response.data);
      });
    }
  };
  useEffect(() => {
    if (location.state === null) {
      navigate('/')
    } else {
      getLocation();
    }
    document.title = "FindLab";
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <section className="inner-banner">
        <img src={bannerimage} alt="call" className="img-fluid" />
        <div className="inner-caption">
          <div className="container">
            <div className="row">
              <div className="caption-details bnr-txt">
                <ul>
                  <li>
                    <Link to="/"> Home </Link>
                  </li>
                  <li> / </li>
                  <li> Find our Lab </li>
                </ul>
                <h1>
                  Can be started overnight, but it<br></br> 
                  takes years to build an institution. 
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="people-function phsiyo-therphy">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="common-heading">
                <h2>
                  <span className="inlne">Our</span> {Lab.length !== 0 ? Object.entries(Lab)[0][0] : null} Locations
                </h2>
              </div>
              <p>
                Anand Diagnostic Laboratory strives for excellence in patient
                care with its highly efficient and accuracy-oriented processes.
                Our advanced state-of-the-art technology helps the patients in
                achieving a detailed and progressive inference. Here is a list
                of our extensive range of services.
              </p>
            </div>
            <div className="col-lg-12">
              {
                LabLocation.length !== 0 ?
                  Object.entries(LabLocation).map((branch,index) => (
                    <div key={index}>
                      <div className="row g-5 border-bottom border-top py-3">
                        <div className="col-12"><h4 className="py-3 m-0">{branch[0]}</h4></div>
                        {
                          branch[1].map((item, i) => {
                            return <LocationCard  key={i} item={item} />;
                          })
                        }
                      </div>
                    </div>
                  ))
                  : null
              }
            </div>
            {Lab.length !== 0
              ?
                <div className="row g-5 border-bottom py-3">
                  {
                    Object.entries(Lab)[0][1].map((item, i) => {
                      return <LocationCard  key={i} item={item} />;
                    })
                  }
                </div>
              : null}
          </div>
        </div>
      </section>
    </div>
  );
}

const LocationCard = (props) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 my-3">
      <div className="locate-box border">
        <h3>
          {props.item.BranchName} <span> {props.item.BranchCity}, {props.item.State} - {props.item.Pincode} </span>
        </h3>
        <ul>
          <ContentContainer data={props.item.BranchAddress}>
            <li><i className="fa fa-map-marker" ></i>{props.item.BranchAddress}</li>
          </ContentContainer> 
          <ContentContainer data={props.item.BranchTimings}>
            <li><i className="fa fa-clock-o"></i>{props.item.BranchTimings}</li>
          </ContentContainer>
          <ContentContainer data={props.item.BrachContact}>
            <li><i className="fa fa-phone"></i>{props.item.BrachContact}</li>
          </ContentContainer>
          <ContentContainer data={props.item.BranchEmail}>
            <li><i className="fa fa-envelope"></i>{props.item.BranchEmail}</li>
          </ContentContainer>
        </ul>
      </div>
    </div>
  )
}