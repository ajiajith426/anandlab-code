import './loader.css'
import 'animate.css';
const Loader = () => {
    return  (
        <div className='appLoader animate__animated animate__fadeIn'>
            <img src={require('../../../src/assets/images/logoberg.png')}  width="200px"  alt='loader'/>
            <div className='loaderDotContainer'>
                <div className="loaderDot"></div>
                <div className="loaderDot"></div>
                <div className="loaderDot"></div> 
            </div>
        </div>
    )
}
export default Loader