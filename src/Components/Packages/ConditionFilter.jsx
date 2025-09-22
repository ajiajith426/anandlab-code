import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router"
import { setConditions, setPackageFilters } from "../../Redux/Actions/TestAction"
import { API_URL } from "../../Redux/Constant/ApiRoute"
import { CheckBox } from '../../utils/index'

function ConditionFilter({ setFilter, setBtnClear }) {
    const Conditions = useSelector((state) => state.conditions.data)
    const dispatch = useDispatch()
    const location = useLocation()
    const FetchConditions = () => {
        axios.get(API_URL.CONDITIONS_LIST).then((response) => {
            dispatch(setConditions(response.data))
        })
    } 
    const selectCheckBoxes = () => {
        var searchQuery  = location.search.replace('?','').replaceAll('=','_') 
        var checkboxes = document.querySelectorAll('input[type=checkbox]')
        for (var i = 0; i < checkboxes.length; i++) {
            searchQuery.split('&').map((item) => {
                item.split('_').map((row) => { 
                    if (checkboxes[i].value ==  row) {
                        checkboxes[i].checked = true;
                    }
                })
            }) 
        }
    }
    useEffect(() => {
        FetchConditions()
        selectCheckBoxes()
    }, [])
    return (
        <div>
            <h4>Conditions</h4>
            <ul style={{ maxHeight: "380px", overflowY: "auto" }}>
                {
                    Conditions !== undefined ?
                        Conditions.map((item, id) => (
                            <li key={id}>
                                <label className="cstm-chkbx">
                                    {item.name}
                                    <CheckBox name="conditions" value={item.name} setFilter={setFilter} setBtnClear={setBtnClear} />
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                        ))
                        : null
                }
            </ul>
        </div>
    )
}

export default ConditionFilter