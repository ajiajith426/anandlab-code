import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import maintenancegif from "../../assets/images/maintenance-page.gif";

const MaintenancePage = () => {
    const location = useLocation();

    //   useEffect(() => {
    //     // Track visit here (e.g., send data to your tracking tool or analytics)
    //     console.log("Old URL clicked:", location.pathname);
    //     // Add your tracking code here, such as Google Analytics or custom tracking logic.
    //   }, [location]);

    return <div className='container maintenance-container'>
        <div className="row align-items-center">
            <div className="col-lg-5 col-md-6 col-12">
                <img src={maintenancegif} className="img-fluid" alt="" />
            </div>

            <div className="col-lg-7 col-md-6 col-12 pb-5 pb-md-0">
                <h3 className='maintenance-page'>This page is currently under Maintenance</h3>
            </div>
        </div>
    </div>;
};

export default MaintenancePage;
