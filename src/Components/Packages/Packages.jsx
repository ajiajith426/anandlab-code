import React, { useEffect, useState } from "react";
import loaderGif from '../../assets/images/loader-2.gif'
import { Link, useLocation, useNavigate } from "react-router-dom";
import bannerimage from "../../assets/images/inner-banner-10.webp";
import axios from "axios";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import PackageCardComponent from "../Containers/PackageCardComponent";
import { useDispatch, useSelector } from "react-redux";
import GenderFilter from "./GenderFilter";
import ConditionFilter from "./ConditionFilter";
import OrganFilter from "./OrganFilter";
import PriceFilters from "./PriceFilters";
import { Dna } from "react-loader-spinner";
import { useMemo } from "react";
import Helmet from "react-helmet";

export default function Packages() {
  useEffect(() => {
    document.title = "Book Health Checkup Packages - Anand Diagnostic Laboratory";
    window.scroll(0, 0);
  }, [])

  const dispatch = useDispatch()
  const [Packages, setPackages] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [EmptyData, setEmptyData] = useState(false)
  const [btnClear, setBtnClear] = useState(false)
  const [isActive, setActive] = useState(false);
  const packageFilters = useSelector((state) => state.packageFilters.filters)
  const [Loader, setLoader] = useState(false)
  const [loadMore, setLoadMore] = useState(true)
  const [limit, setLimit] = useState(10)
  const navigate = useNavigate();
  const location = useLocation();

  const [currentLocation, setCurrentLocation] = useState(location.search)

  const setFilter = (type, value) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(type, typeof (value) === 'object' ? value.join("_") : value);
    setCurrentLocation(`?${searchParams.toString()}`)
    navigate(`/packages?${searchParams.toString()}`);
  }

  const fetchPackages = () => {
    setisLoading(true)
    axios.get(API_URL.PACKAGES_LIST + currentLocation ?? "").then((response) => {
      setPackages(response.data.data)
      setisLoading(false)
      setLimit(response.data.count)
      setLoadMore(response.data.next_data)
      setEmptyData(response.data.count === 0 ? true : false)
    });
  };
  const clearAllFilters = () => {
    var checkboxes = document.querySelectorAll('input:checked')
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type == 'checkbox') {
        checkboxes[i].checked = false;
      }
    }
    setCurrentLocation('');
    setBtnClear(false)
    setLoadMore(false)
    navigate('/packages')
  } 
  useMemo(() => {
    fetchPackages()
  }, [packageFilters, currentLocation])

  return (
    <div>
          <Helmet> 
      <title>Book Health Checkup Packages - Anand Diagnostic Laboratory</title> 
      <meta name="description" content="Anand Diagnostic Laboratory offers full body checkup online. Our experts provide diagnosis and consultations, and you can book health check packages at your preferred date and time."></meta>
    </Helmet>
      <section className="inner-banner">
        <img src={bannerimage} alt="call" className="img-fluid" />
        <div className="inner-caption">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="caption-details bnr-txt">
                  <ul>
                    <li>
                      <Link to="/"> Home </Link>
                    </li>
                    <li> / </li>
                    <li> Patients </li>
                    <li> / </li>
                    <li> Packages </li>
                  </ul>
                  <h1>
                    Health packages for<br></br> you and your family
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="filtering-packages filtering-lsts">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="common-heading">
                <h2>
                  <span>MAKING </span>
                  <span className="yelow">GOOD HEALTH </span> a Priority!
                </h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="totl-pkglst">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div className="mobileFilter" onClick={() => setActive(!isActive)}>Filter <i className="fa fa-filter"></i></div>
                    <div className={isActive ? 'filter-lists Products-factory-lsts active' : 'filter-lists Products-factory-lsts'} id="packagesFilters">
                      <div className="mobileFilterClose" onClick={() => setActive(!isActive)}>X</div>
                      <h3>
                        Filters
                        {
                          btnClear ?
                            <button onClick={clearAllFilters} className="btn-sm btn-danger float-right rounded"><i className="fa fa-times"></i> Clear</button>
                            : null
                        }
                      </h3>
                      <GenderFilter setBtnClear={setBtnClear} setFilter={setFilter} />
                      {/* <ConditionFilter setBtnClear={setBtnClear} setFilter={setFilter} /> */}
                      {/* <OrganFilter setBtnClear={setBtnClear} setFilter={setFilter} /> */}
                      <PriceFilters setFilter={setFilter} />
                    </div>
                  </div>
                  <div className="col-9" style={{ position: 'relative' }}>
                    {
                      isLoading === true ?
                        <div className="text-center" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, width: '100%', paddingTop: 30, height: '100%', background: '#ffffff70' }}>
                          <Dna
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="dna-loading"
                            wrapperStyle={{ marginTop: 20 }}
                            wrapperclassName="dna-wrapper"
                          />
                        </div>
                        : null
                    }
                    {EmptyData === true ?
                      <h5 className="py-3">No Result Found !</h5>
                      : null}
                    <div className="Products-factory-functions">
                      <div className="row">
                        {
                          Packages.length !== 0
                            ?
                            Packages.map((item, index) => <div key={index} className="col-lg-4"><PackageCardComponent data={item} /></div>)
                            : null
                        }
                      </div>
                      <div className="load-mrebtn text-center">
                        {
                          Loader === true ?
                            <a> <img src={loaderGif} width="28px" alt="loader" /> Loading ....</a>
                            : loadMore ? <a onClick={() => {
                              setFilter('limit', limit + 10)
                            }}> Load More</a> : ""
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}