import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Dna } from 'react-loader-spinner'
import { useNavigate } from 'react-router'
import Sliders from 'react-slick'
import { useOrgansQuery } from '../../../services/apiMaster'

export default function CheckupsSliders() {
    const Navigate = useNavigate()
    const { data, isLoading, isSuccess } = useOrgansQuery()
    const settings = {
        slidesToScroll: 1,
        infinite: true,
        slidesToShow: 7,
        autoplay: true,
        dots: false,
        autoplaySpeed: 1600,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,

                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,

                }
            },
        ]
    };
    if (isLoading) return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '40vh' }}>
            <Dna
                visible={true}
                height="120"
                width="120"
                ariaLabel="dna-loading"
                wrapperClass="dna-wrapper"
            />
        </div>
    )
    if (isSuccess) return (
        <section className="helth-chkup">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="common-heading">
                            <h2><span>Choose Your </span> Health Checkups / Screenings For </h2>
                        </div>
                        <br />
                        <Sliders className="body-parts text-center"  {...settings}>
                            {
                                data.map((item, i) => (
                                    <div key={i} className="parts-seq" onClick={() => Navigate(`/for-patient?OrganName=${item.name}`)}>
                                        <LazyLoadImage src={item.image} width="70px"  height="70px" effect="blur" className="img-fluid mb-2" />
                                        <span><b>{item.name}</b></span>
                                    </div>
                                ))
                            }
                        </Sliders>
                    </div>
                </div>
            </div>
        </section>
    )
}
