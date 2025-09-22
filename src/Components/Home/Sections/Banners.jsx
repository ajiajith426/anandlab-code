import { assets } from '../../../../src/Helpers'
import BannerForm from './BannerForm'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Dna } from 'react-loader-spinner' 
import { useBannersQuery } from '../../../services/apiMaster'
import ReportForm from './ReportForm'

const Banners = () => {
    const { data, isLoading, isSuccess } = useBannersQuery()
    if (isLoading) return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
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
        <div className="banner-conceptual">
            <div id="home-banner-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                <ul className="carousel-indicators">
                    {
                        data.data.map((banner, index) => (
                            <li key={index} data-target="#home-banner-carousel" data-slide-to={index} className={index == 0 ? "active" : null}></li>
                        ))
                    }
                </ul>
                <div className="carousel-inner" style={{ "background": "linear-gradient(#503390,#7e2e91)" }}>
                    {
                        data.data.map((banner, index) => (
                            <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item"}>
                                <div className="row">
                                    <a className="col-sm-12 col-md-12 col-lg-12 p-0" href={banner.Url} target="_blank">
                                        <LazyLoadImage
                                            src={`${assets(window.innerWidth > 980 ? banner.DesktopImage : banner.MobileImage)}`}
                                            width={'100%'}
                                        />
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* ========= Banner Form ========= */}
            {/* <BannerForm />  */}
           {/* <div className='banner-form reports-addon'>
               <ReportForm />
           </div> */}
            {/* ========= End : Banner Form ========= */}
        </div>
    )
}
export default Banners