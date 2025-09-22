import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthUser, { RemoveUser } from "../../Helpers/AuthUser";
import { toast } from "react-hot-toast";
import { setAuthUser } from "../../Redux/Actions/TestAction";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

export default function Login() {
  useEffect(() => window.scroll(0, 0) , [])
  const navigate = useNavigate(); 
  const dispatch = useDispatch(); 
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        otp: Yup.number().required()
      })
    )
  }) 
  const OtpVerfiycation = (data) => {
    if (data.otp == localStorage.getItem('otp')) {
      dispatch(setAuthUser(AuthUser()))
      toast.success('Login Success')
      navigate("/my-cart");
    } else {
      toast.error('Ivalid OTP! Try again!')
      RemoveUser()
    }
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
                    <form onSubmit={handleSubmit(OtpVerfiycation)}>
                      <div className="frm-fields row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="common-heading">
                            <h2>
                              Enter Your <span>  OTP </span>
                            </h2>
                          </div>
                          <div className="row">
                            <>
                              <div className="form-data col-lg-12">
                                <input className={`input1001 ${errors.otp && 'border-danger'}`} type="tel" placeholder="Received OTP" {...register('otp')} />
                              </div>
                              <div className="form-data sbm col-lg-12">
                                <input type="submit" value="Verfiy OTP"/>
                              </div>
                            </>
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
