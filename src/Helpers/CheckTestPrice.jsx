import { useSelector } from "react-redux";

function CheckTestPrice(props) {
    const TestLocation = useSelector((state) => state.TestLocation);
    var CurrentTestPrice = props.test.test_price[0].TestPrice
    props.test.test_price.map((item, i) => {
        if (item.TestLocation === TestLocation.TestLocation) {
            CurrentTestPrice = item.TestPrice
        }
    })
    return CurrentTestPrice
}

export default CheckTestPrice