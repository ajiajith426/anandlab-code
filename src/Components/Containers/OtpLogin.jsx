import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { PutUser } from "../../Helpers/AuthUser";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setLoading } from "../../Redux/Actions/LoaderAction";
import { useForm } from "react-hook-form";  
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate(); 
  // const LoginWithOtp = () => {
  //   if(Otp == serverOtp) {
  //     dispatch(setAuthUser(AuthUser()))
  //     toast.success('Login Success')
  //     navigate("/my-cart");
  //   } else {
  //     toast.error('Ivalid OTP! Try again!')
  //     RemoveUser()
  //   }
  // }
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
 
  const { register, handleSubmit, formState: { errors } } = useForm({ 
    resolver: yupResolver(
      Yup.object().shape({
        email   : Yup.string().required()
      })
    )
  }) 
  const LoginWithOtp = (data) => {
    dispatch(setLoading(true))
    axios.post(API_URL.LOGIN_WITH_OTP, data).then((response) => {
      dispatch(setLoading(false))
      if (response.data.status) {
        localStorage.setItem('otp',response.data.otp)
        PutUser(response.data.data)
        navigate('/verify-otp')
        toast.success('Enter Your OTP !')
      } else {
        toast.error(response.data.message)
      }
    }).catch((errors) => {
      console.log(errors.response)
    });
  }
 
  return (
    <div>
      <section className="main-billfrm cmnmenu-topmargin">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="row fully-bxn no-gutters">
                <div className="col-lg-6">
                  <div className="dhoni-bgm">
                    <div className="common-heading">
                      <h2>
                        Welcome <span> to Neuberg Anand </span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="cir-frm">
                    <form onSubmit={handleSubmit(LoginWithOtp)}>
                      <div className="frm-fields row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="common-heading">
                            <h2>
                              Login <span> WITH OTP! </span>
                            </h2>
                          </div>
                          <div className="row">
                            <div className="form-data col-lg-12">
                              <input className={`input1001 ${errors.email && 'border-danger'}`} type="email" placeholder="Email" {...register('email')} />
                            </div>
                            <div className="form-data sbm col-lg-12">
                              <button type="submit" className="btn-primary btn-flx-full">SEND OTP</button>
                            </div>
                          </div>
                          <div className="col-lg-12 text-center mb-3">
                          </div>
                          <div className="col-lg-12 text-center p-0">
                            <div className="mid-poart">
                              <h5>or</h5>
                            </div>
                          </div>
                          <div className="col-lg-12 text-center p-0 mb-3">
                            <div className="login-btn">
                              <Link to="/login"> Login with Username & Password</Link>
                            </div>
                          </div>
                          <div className="col-lg-12 text-center">
                            <div className="user-regster">
                            New User ? <Link to="/register"> Register Here!</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </div >
  );
}
