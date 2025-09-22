import axios from "axios";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { API_URL } from "../Redux/Constant/ApiRoute";

const useTopPackages = () => {
    const TestLocation = useSelector((state) => state.TestLocation );
    const { isLoading, error, data, isFetching } = useQuery("topPackages", () =>
        axios.post(API_URL.TOP_BOOKED_TEST, {
            TestLocation: TestLocation?.TestLocation,
            IsPackage: 'Yes',
        }).then((res) => res.data)
    );
    return { isLoading, error, data, isFetching };
}
export default useTopPackages