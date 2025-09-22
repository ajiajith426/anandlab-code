import axios from "axios";
import { useQuery } from "react-query";
import { API_URL } from "../Redux/Constant/ApiRoute";

const useTopTests = () => {
    const { isLoading, error, data, isFetching } = useQuery("topBookedTest", () =>
        axios.post(API_URL.TOP_BOOKED_TEST).then((res) => res.data) 
    ); 
    return {isLoading, error, data, isFetching};
}
export default useTopTests