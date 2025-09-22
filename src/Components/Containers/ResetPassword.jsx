import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_URL } from '../../Redux/Constant/ApiRoute'
import axios from "axios";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { CgSpinner } from "react-icons/cg";
import { useEffect } from "react";

function ResetPassword() {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    const location = useParams()
    const navigate = useNavigate()
    const [Loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(
            Yup.object().shape({
                new_password: Yup.string().required().min(3),
                confirmPassword: Yup.string().required().oneOf([Yup.ref('new_password')], 'Passwords does not match'),
            })
        )
    })
    const RestAccountPassword = (data) => {
        setLoading(true)
        axios.post(API_URL.RESET_PASSWORD + location.customer_id, data).then((response) => {
            if (response.data.status) {
                navigate('/login')
                toast.success(response.data.message)
            } else {
                toast.error(response.data.message)
            }
            setLoading(false)
        })
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
                                        <form onSubmit={handleSubmit(RestAccountPassword)}>
                                            <div className="frm-fields row clearfix">
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <div className="common-heading">
                                                        <h2>
                                                            Reset Password <span> Here! </span>
                                                        </h2>
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-data col-lg-12">
                                                            <input className={`input1001 ${errors.new_password && 'border-danger'}`} type="password" placeholder="Enter the new password .." {...register('new_password')} />
                                                        </div>
                                                        <div className="form-data col-lg-12">
                                                            <input className={`input1001 ${errors.confirmPassword && 'border-danger'}`} type="text" placeholder="Re-enter the new password .." {...register('confirmPassword')} />
                                                        </div>
                                                        <div className="form-data sbm col-lg-12">
                                                            {
                                                                Loading === true
                                                                    ?
                                                                    <button type="submit" disabled className="btn-primary btn-flx-full">
                                                                        <CgSpinner className="fa-spin mr-2" />
                                                                        Loading ...
                                                                    </button>
                                                                    :
                                                                    <button type="submit" className="btn-primary btn-flx-full">
                                                                        RESET
                                                                    </button>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 text-center mb-3">
                                                        <div className="user-regster">
                                                            Back to Login ? <Link to="/login"> click Here!</Link>
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
        </div>
    )
}

export default ResetPassword