import { Link, useLocation, useNavigate } from "react-router-dom";
import TestCard from "../../Containers/TestCardComponent";
import loaderGif from '../../../assets/images/loader-2.gif'
import { API_URL } from "../../../Redux/Constant/ApiRoute";
import { setAllTestDetails } from "../../../Redux/Actions/TestAction";
import { setTestFilters } from '../../../Redux/Actions/TestAction';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useMemo, useState } from "react";

export default function TestHealthPackages(props) {
  const testListing = useSelector((state) => state.TestList.testList);
  const filters = useSelector((state) => state.filters.filters);
  const dispatch = useDispatch()
  const [Loader, setLoader] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const fetchLabTests = () => {
    var get_params = (searchParams.toString()).replace('/for-patient');
    var api_url = API_URL.TEST_LISTS+'?'+get_params;
    setLoader(true)
    axios.get(api_url).then((response) => {
      setLoader(false)
      dispatch(setAllTestDetails(response.data));
    });
  }

  const filterProducts = (sort_value) => {
    searchParams.set('orderBy', sort_value);
    var redirectUrl = '/for-patient?'+ searchParams.toString();
    navigate(redirectUrl);
    dispatch(setTestFilters({ redirectUrl}))
  }

  const loadMore = (page) => {
    searchParams.set('page', page);
    var redirectUrl = '/for-patient?'+ searchParams.toString();
    navigate(redirectUrl);
    dispatch(setTestFilters({ redirectUrl}))
  }
  useMemo(() => fetchLabTests(), [filters])
  
  return (
    <section className="">
      <div className="container">
        <div className="row my-3">
          <div className="col-lg-6">
            <div className="test-lst">
              <ul>
                <li className="active">
                  <Link to="/">TEST LIST</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 pr-0">
            <div className="col">
              <div className="serch-filter text-right">
                Sort By
                <select value={searchParams.get('orderBy') || ''}  className="form-control" onChange={(e) => filterProducts(e.target.value)} >
                  <option value=""> -- Choose --</option>
                  <option value="DESC"> Price : High-Low</option>
                  <option value="ASC" selected>  Price : Low-High</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {
            testListing !== undefined && testListing.data.length > 0
              ? testListing.data.map((test, index) => (
                <div className="col-lg-3" key={index}>
                  <TestCard test={test} />
                </div>
              ))
              : 
              <div className="col-sm-12 text-center">
                No Result Found
              </div>
          }
        </div>
        <div className="load-mrebtn text-center">
          
          {
            Loader === true  ?
              <a> <img src={loaderGif} width="28px" alt="loader" /> Loading ....</a>
              : 
              testListing !== undefined && testListing.has_loading == 'yes' &&
              <a onClick={() => loadMore(testListing.page)}> Load More</a>
          }
        </div>
      </div>
    </section>
  );
}