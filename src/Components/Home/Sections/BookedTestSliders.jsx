import { Link, useNavigate } from "react-router-dom";
import Sliders from "react-slick";
import CartBtn from "../../Containers/CartBtn";
import { Dna } from "react-loader-spinner";
import { useTestSliderQuery } from "../../../services/apiMaster";
import { useSelector } from "react-redux";
export default function BookedTestSliders({ title, subTitle }) {
  var settings = {
    slidesToScroll: 1,
    infinite: true,
    slidesToShow: 4,
    focusOnSelect: false,
    autoplay: true,
    dots: false,
    arrows: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const navigate  = useNavigate()
  const location = useSelector((state) => state.TestLocation.TestLocation)
  const { data, isLoading, isSuccess } = useTestSliderQuery({
    location : location,
    isPackage: 'No'
  })
  console.log("data", data);
  if (isLoading) return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '40vh' }}>
      <Dna
        visible={true}
        height="120"
        width="120"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  )
  if (isSuccess) return (
    <section className="diagnostics text-left">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="common-heading">
              <h2>
                <span>{title} </span> {subTitle}
              </h2>
            </div>
            {data.data !== null ? (
              <Sliders {...settings} className="topbooked-cases">
                {data.data.map((test, index) => (
                  <div className="case p-3" key={index}>
                    <div className="link" onClick={() => navigate(`/test/${test.TestSlug}`)}>
                      <h3 className="text-capitalize">
                        {`${test.TestName}`}
                      </h3>
                      <h4 className="text-capitalize">
                        {`${test.BasicInstruction.substring(0, 38)}...`}
                      </h4>
                      <h5>
                        <span className="strke">
                        </span> &nbsp;
                        <span> ₹ {test.TestPrice}</span>
                      </h5>
                    </div>
                    <p className="d-flex">
                      <CartBtn testData={test} />
                      <Link to={`/test/${test.TestSlug}`} className="bg-trsnper ml-2">
                        <small>Know More</small>
                      </Link>
                    </p>
                  </div>
                ))}
              </Sliders>
            ) : null}
          </div>
          <div className="col-lg-12">
            <div className="vew-aal mt-5 text-center">
              <Link to="/for-patient"> View All</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
