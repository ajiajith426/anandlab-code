import { API_URL } from "./Redux/Constant/ApiRoute";
import logo from './assets/images/logo.png';
import  toast  from "react-hot-toast";
import { useSelector } from "react-redux";
export function assets(params) {
  // params  =>  Image | File Url 
   if(params.includes("http")) {
      return params;
   }
   return API_URL.ASSETS + params;
}

export function Loading() {
   return (
      <div className="preloader_wrapper_bg">
         <div className="preloader_wrapper">
            <img src={logo} alt="" className="img-fluid"/>
         </div>
      </div>
   );
}

export function CheckCartBucket(TestId) {
   const cartItems  = useSelector((state) => state.TestCartList.cartTest) 
   let currentCart = JSON.parse(localStorage.getItem('CartTestList'));
   if(currentCart !== null) {
      function isExists(CurrentTest) {
         return CurrentTest.TestId === TestId;
      }
      var Result = currentCart.find(isExists)
      if(Result !== undefined) { 
         return true
      } else {
         return false
      }
   }else {
      return false
   }
}

export function AddToCartList(test) {
   if(localStorage.getItem('CartTestList') === undefined || localStorage.getItem('CartTestList') == null) {
      localStorage.setItem('CartTestList', JSON.stringify([]));
   }
   if(localStorage.getItem('CartTestList') !== undefined || localStorage.getItem('CartTestList') != null) {
       let currentCart = JSON.parse(localStorage.getItem('CartTestList'));
       localStorage.setItem('CartTestList', JSON.stringify([...currentCart,test]));
   }
    
   toast.success('Test Added Successfully!');
   return true
}


export function RemoveToCartList(test) {
   toast.error('Test Removed Successfully!');
  
   let currentCart = JSON.parse(localStorage.getItem('CartTestList'));

   function isExists(CurrentTest) {
      return CurrentTest.TestId === test.TestId;
   }
   
   if(currentCart !== null) {
      var Result = currentCart.find(isExists)
      var index  = currentCart.indexOf(Result)
      currentCart.splice(index, 1)
      localStorage.setItem('CartTestList', JSON.stringify(currentCart)); 
      return currentCart
   }
    
   if(currentCart.length === 0) {  
      localStorage.removeItem('CartTestList')
   }
}

export const  Validate = (data) => {
   var error = 0
   Object.entries(data).map((item) => {
      if(data[item[0]] === null || data[item[0]] === undefined || data[item[0]] === '') {
         error ++
         toast.error(`${item[0].replace('_', ' ')} is Required!`);
      }
   }); 
   if(error === 0) {
      return true
   } 
   return false
} 

export const ContentContainer = (props) => {
   if(props.data !== '' && props.data !== undefined && props.data !== null) {
      return props.children
   } else {
      return null
   }
}