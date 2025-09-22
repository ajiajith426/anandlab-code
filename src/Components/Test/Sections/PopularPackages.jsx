import React from 'react'
import PackageCard from '../../Containers/PackageCardComponent'
import Sliders from 'react-slick'

export default function () {
  var settings = {
    slidesToScroll: 1,
    infinite:true,
    slidesToShow: 4,
    focusOnSelect: true, 
    autoplay: true,
    dots: false,
    arrows: true,
    autoplaySpeed: 3000,
    responsive: [
          {
              breakpoint: 1024,
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
  return (
    <section className="popular-packages">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="common-heading">
            <h2><span>Popular </span> Health Packages </h2>
            </div>
            <br/>
            <Sliders {...settings} className="popular-lists">
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
            </Sliders>
          </div>
        </div>
      </div>
      </section>
  )
}
