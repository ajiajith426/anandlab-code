import { useState } from 'react'
import Sliders from 'react-slick'
import videoBg from '../../../assets/images/video-bg.jpg'
import playButton from '../../../assets/images/play-icon.png'
import { Modal } from 'react-bootstrap';

export default function AboutUs() {
  const [show, setShow] = useState(false);
  var settings = {
    slidesToScroll: 1,
    infinite: true,
    slidesToShow: 1,
    focusOnSelect: true,
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  }
  return (
    <section className="testimonials">
      <div className="container-fluid pr-0">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="testi-section">
              <div className="common-heading">
                <h2>
                  <span>What Our Customers</span>
                  Say About Us
                </h2>
              </div>
              <br />
              <Sliders {...settings} className="testimonial-topics">
                <div className="testims">
                  I opted for the home sample collection service with Neuberg Anand Reference Laboratory for the first time. I was impressed by the exceptional service delivered by the technician. His professionalism, courtesy, and punctuality were noteworthy.
                  <span>Mr. Ramakrishnan Sridher</span>
                </div>
              </Sliders>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 h-100">
            <div className="testivideo-section h-100">
              <img src={videoBg} className="h-100 w-100" />
              <div className="plying-btn text-center">
                <img src={playButton} onClick={() => setShow(true)} className="img-fluid" style={{ cursor: 'pointer' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-lg"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Body className='pt-3'>
          <div className="w-100 h-100">
            <Sliders {...{
              slidesToScroll: 1,
              slidesToShow: 1,
              dots: false,
              arrows: true,
            }}  >


              <iframe width="100%" height="450px" autoplay src="https://www.youtube.com/embed/lsopBNmF__A" title="Anand Lab Corporate Film" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

              <iframe width="100%" height="450px" autoplay src="https://www.youtube.com/embed/8zghk5E9YtE" title="Anand Lab Corporate Film" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

              <iframe width="100%" height="450px" autoplay src="https://www.youtube.com/embed/7-svwO0D5Nk" title="Anand Lab Corporate Film" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </Sliders>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  )
}
