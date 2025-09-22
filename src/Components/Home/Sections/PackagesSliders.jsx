import { Dna } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import Sliders from 'react-slick'
import {  usePackageSliderQuery } from '../../../services/apiMaster';
import PackageCard from '../../Containers/PackageCardComponent';
export default function PackagesSliders({ title, subTitle }) {
  var settings = {
    slidesToScroll: 1,
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    dots: false,
    arrows: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,

        }
      },
    ]
  };
  const location = useSelector((state) => state.TestLocation.TestLocation)
  const { data, isLoading, isSuccess } = usePackageSliderQuery({
    location : location,
    isPackage: 'Yes'
  }) 
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
    <section className="popular-packages">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="common-heading">
              <h2><span>{title}</span>{subTitle}</h2>
            </div>
            <Sliders {...settings} className="popular-lists">
              {data.data.map((item, index) => <PackageCard key={index} data={item} />)}
            </Sliders>
          </div>
        </div>
      </div>
    </section>
  )
}