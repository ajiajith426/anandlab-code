import {  useState } from 'react'
import map from '../../../assets/images/map.png'
import { useNavigate } from 'react-router';
import { toast } from "react-hot-toast";
import { useCitiesQuery } from '../../../services/apiMaster';

export default function FindLocation() {
  const navigate = useNavigate();
  const [LocationId, setLocationId] = useState(null)
  const findALocation = () => {
    if (LocationId) {
      navigate('/find-lab', { state: { LocationId: LocationId } })
    } else {
      toast.error('You need to choose a city first')
    }
  }
  const { data, isSuccess } = useCitiesQuery()
  if (isSuccess) return (
    <section className="maping">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="map-imge text-center">
              <img src={map} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="location-detailsx text-center">
              <div className="common-heading">
                <h2><span> The Anand Lab</span> Network</h2>
              </div>
              <p>We are focused on uniting borders across <br />geographies to make better diagnosis a reality. </p>
              <div className="input-group">
                <select className='form-control' onChange={(e) => setLocationId(e.target.value)}>
                  <option value="">-- choose your city --</option>
                  {Object.entries(data).map((item, i) => <option key={i} value={item[1]}>{item[0]}</option>)}
                </select>
                <button onClick={findALocation} className='btn-warning rounded'>Find a Location</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
