import axios from "axios";
import { useQuery } from "react-query";
import { API_URL } from "../Redux/Constant/ApiRoute";

const useJobDetails = (id) => {
    const { isLoading, error, data, isFetching } = useQuery("Jobs", () =>
        axios.get(API_URL.CAREERS_DEATILS + id).then((res) => res.data.job) 
    ); 
    return {isLoading, error, data, isFetching};
}
export default useJobDetails