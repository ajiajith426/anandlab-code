import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { CheckCartBucket } from '../../Helpers';
import { addToCart, removeFromCart, setTestCartList } from '../../Redux/Actions/TestAction';
import { API_URL } from '../../Redux/Constant/ApiRoute';

export default function CartBtn(props) {
    const dispatch  = useDispatch();
    const user      = localStorage.getItem('user')

    const addToCartItem = () => {
        if(user !== null ) {
            axios.post(API_URL.ADD_TO_CART,{
                user_id : JSON.parse(user).id,
                test_id : props.testData.id,
                test_type : props.testData.IsPackage == 'No' ? 'TEST' : 'PACKAGE',
            }).then((response) => {
                console.log(response.data)
            }) 
        }  
        dispatch(addToCart(props.testData));
        dispatch(
            setTestCartList(
                JSON.parse(localStorage.getItem("CartTestList"))
            )
        );
    }

    const removeToCart = () => {
        if(user !== null ) {
            axios.post(API_URL.REMOVE_TO_CART,{
                user_id : JSON.parse(user).id,
                test_id : props.testData.id,
                test_type : props.testData.IsPackage == 'No' ? 'TEST' : 'PACKAGE',
            }).then((response) => {
                console.log(response.data)
            })
        }
        dispatch(removeFromCart(props.testData));
        dispatch(setTestCartList(JSON.parse(localStorage.getItem("CartTestList"))));
    }
    if(CheckCartBucket(props.testData.TestId))  {
        return (
            <button  className="cart-btn remove-btn" onClick={() => removeToCart()}>
                <small><i className="fa fa-times mr-2"></i>Remove</small>
            </button>
        )
    } else  {
        return (
            <button className="cart-btn text-white choose-your-package" onClick={() => addToCartItem()} >
                <i className="fa fa-cart-plus mr-1"></i>ADD
            </button>
        )
    }
}