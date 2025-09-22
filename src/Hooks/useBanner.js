import axios from "axios";
import { useQuery } from "react-query";
import { API_URL } from "../Redux/Constant/ApiRoute";

const useBanner = () => {
    const { isLoading, error, data, isFetching, isSuccess } = useQuery("banners", () =>
        axios.get(API_URL.BANNERS).then((res) => res.data)
    );
    return { isLoading, error, data, isFetching, isSuccess };
}
export default useBanner