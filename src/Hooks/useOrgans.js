import axios from "axios";
import { useQuery } from "react-query";
import { API_URL } from "../Redux/Constant/ApiRoute";

const useOrgans = () => {
    const { isLoading, error, data, isFetching } = useQuery("organs", () =>
        axios.get(API_URL.ORGAN_LIST).then((res) => res.data) 
    ); 
    return {isLoading, error, data, isFetching};
}
export default useOrgans