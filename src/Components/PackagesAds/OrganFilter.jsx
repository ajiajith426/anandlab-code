import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOrgans } from '../../Redux/Actions/TestAction'
import { API_URL } from '../../Redux/Constant/ApiRoute'
import { CheckBox } from '../../utils'

function OrganFilter({setFilter,setBtnClear}) {
    const Organs         = useSelector((state) => state.organs.data)
    const dispatch       = useDispatch()
    const FetchOrgans = () => {
        axios.get(API_URL.ORGAN_LIST).then((response) => {
            dispatch(setOrgans(response.data))
        })
    } 
    useEffect(() => {
        FetchOrgans()
    }, [])
    return (
        <ul>
            <h4>Organs</h4>
            {
                Organs !== undefined ?
                    Organs.map((item,id) => (
                        <li key={id}>
                            <label className="cstm-chkbx">
                                {item.name}
                                <CheckBox name="organs" value={item.name} setFilter={setFilter} setBtnClear={setBtnClear} />
                                <span className="checkmark"></span>
                            </label>
                        </li>
                    ))
                : null
            }
        </ul>
    )
}

export default OrganFilter