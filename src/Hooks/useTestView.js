import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setTestDetails } from "../Redux/Actions/TestAction";
import { API_URL } from "../Redux/Constant/ApiRoute";

const useTestView = () => { 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const TestLocation = useSelector((state) => state.TestLocation);
    const getTestDetails = async (TestId) => {
        const response = await axios.post(`${API_URL.TEST_DETAILS}/${TestId}`, {
            TestLocation: TestLocation != undefined ? TestLocation?.TestLocation : 'bangalore'
        }).catch((err) => console.log(err));
        if (response.data.status) {
            dispatch(setTestDetails(response.data.data));
        } else {
            navigate('/')
        }
        return response.data
    };
    const query = useMutation(getTestDetails, {
        onSuccess: data => {
            console.log(data,'success');
        },
        onError: () => {
            alert("there was an error")
        },
        onSettled: () => {
            queryClient.invalidateQueries('create');
        }
    }); 
    return query;
}
export default useTestView