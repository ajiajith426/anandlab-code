import { useDispatch, useSelector } from 'react-redux';
import { setPackageFilters } from '../../Redux/Actions/TestAction'

function PriceFilters({setFilter,setBtnClear}) {
    const packageFilters = useSelector((state) => state.packageFilters.filters)
    const dispatch = useDispatch()
    const handleChecked = (data) => {  
        setFilter('price',data)
        dispatch(setPackageFilters({...packageFilters,orderBy:data}))
    };
    return (
        <ul>
            <h4>Price Range</h4>
            <li>
                <label className="cstm-chkbx">
                    Low to High
                    <input type="radio" name="price_range" onChange={() => handleChecked('ASC')}/>
                    <span className="checkmark"></span>
                </label>
            </li>
            <li>
                <label className="cstm-chkbx">
                    High to low
                    <input type="radio" name="price_range" onChange={() => handleChecked('DESC')} />
                    <span className="checkmark"></span>
                </label>
            </li>
        </ul>
    )
}

export default PriceFilters