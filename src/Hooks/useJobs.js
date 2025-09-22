import axios from "axios";
import { useQuery } from "react-query";
import { API_URL } from "../Redux/Constant/ApiRoute";

const useJobs = () => {
    const { isLoading, error, data, isFetching } = useQuery("Jobs", () =>
        axios.get(API_URL.CAREERS).then((res) => res.data.data)
    );
    return {isLoading, error, data, isFetching};
}
export default   useJobs