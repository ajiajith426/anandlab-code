import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from '../../Redux/Constant/ApiRoute'
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { useEffect } from "react";
function ForgotPassword() {
    useEffect(() => window.scroll(0, 0) , [])
    const navigate = useNavigate()
    const [Loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(
            Yup.object().shape({
                email: Yup.string().required(),
            })
        )
    })
    const SendRestLink = (data) => {
        setLoading(true)
        axios.post(API_URL.FORGOT_PASSWORD, {
            ...data,
            origin: window.location.origin
        }).then((response) => {
            if (response.data.status) {
                navigate('/')
                toast.success('Reset Mail was sent, Check Your Inbox !')
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
                                        <form onSubmit={handleSubmit(SendRestLink)}>
                                            <div className="frm-fields row clearfix">
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <div className="common-heading">
                                                        <h2>
                                                            Reset Your Account <span> Here! </span>
                                                        </h2>
                                                    </div>
                                                    <div className="row">
                                                        <div className="form-data col-lg-12">
                                                            <input className={`input1001 ${errors.email && 'border-danger'}`} type="email" placeholder="Email" {...register('email')} />
                                                        </div>
                                                        <div className="form-data sbm col-lg-12">
                                                            {
                                                                Loading === true
                                                                    ?
                                                                    <button type="submit" disabled className="btn-primary btn-flx-full">
                                                                        <CgSpinner className="fa-spin mr-2" />
                                                                        Sending ...
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

export default ForgotPassword