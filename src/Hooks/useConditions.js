import axios from "axios";
import { useQuery } from "react-query";
import { API_URL } from "../Redux/Constant/ApiRoute";

const useConditions = () => {
    const { isLoading, error, data, isFetching } = useQuery("conditions", () =>
        axios.get(API_URL.CONDITIONS_LIST).then((res) => res.data) 
    ); 
    return {
        isLoading, error, data, isFetching 
    }
}
export default useConditions