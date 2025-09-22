import axios from "axios";
import { useState } from "react";
import { FaMinus, FaPlus, FaPhone, FaPhoneAlt } from "react-icons/fa";
import { API_URL } from "../Redux/Constant/ApiRoute";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { CgSpinner } from 'react-icons/cg';
import { FormResponse } from '../Helpers/FormResponse';
import ReCAPTCHA from 'react-google-recaptcha';

function FloatingForm() {
    const [open, setOpen] = useState(true)
    const [Loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(
            Yup.object().shape({
                name: Yup.string().required(),
                email: Yup.string(),
                mobile: Yup.string().matches(/^[6-9]\d{9}$/).required(),
            })
        )
    })
    const contactUsFrom = (data) => {
        setLoading(true)
        data.page = 'CALL BACK FORM - FOOTER'
        data.page_url = window.location.href
        axios.post(API_URL.REACH_US, data).then((res) => {
            // FormResponse()
            setLoading(false)
            reset()
            setOpen(!open)
        })
    }


    const [recaptchaValue, setRecaptchaValue] = useState(null);

    const handleRecaptchaChange = (value) => {
        console.log('Captcha value:', value);
        setRecaptchaValue(value);
    };

    return (
        <div className="womensdayawrap">
            <div className={open == true ? 'womendaycontent d-none' : 'womendaycontent conthgt'}>
                <div className="green-bg animated fadeInRight">
                    <h4 className="mb-3 text-white">Book Home Collection</h4>
                    <form onSubmit={handleSubmit(contactUsFrom)}>
                        <div className="formdata">
                            {errors?.name ? <small className='text-danger'>{errors?.name?.message}</small> : ''}
                            <input {...register('name')} type="text" placeholder="Enter Your Name" className='form-control' />
                        </div>
                        <div className="formdata">
                            {errors?.mobile ? <small className='text-danger'>{'mobile is required'}</small> : ''}
                            <input {...register('mobile')} type="tel" placeholder="Enter Your Mobile Number" className='form-control' />
                        </div>

                        <ReCAPTCHA
                            sitekey="6Lf_BRIqAAAAAOD6XxxBdBiNnV0EuYM0Hsg1wp_M" // Replace with your actual site key
                            onChange={handleRecaptchaChange}
                        />
                        <div className="formdata">
                            {
                                Loading === true
                                    ?
                                    <button type="submit" disabled className="btn-primary btn-flx-full">
                                        <CgSpinner className="fa-spin mr-2" />
                                        Loading ...
                                    </button>
                                    :
                                    <button type="submit" className="btn-primary btn-flx-full">
                                        Submit
                                    </button>
                            }
                        </div>
                    </form>
                </div>
            </div>
            {/* <div className="womensdayawrapsec" onClick={() => setOpen(!open)} > */}
            <a className="womensdayawrapsec" href="tel:+918035287579">
                <span>
                    <img src={require('../../src/assets/images/call-girl.png')} className="img-responsive" alt="Call" />
                    <div className="mob-rlce">Reach Us</div>
                </span>
                <span>
                    <h2>Call Us</h2>
                    <p>For Home Collection</p>
                </span>
                {/* {open ? <FaPlus /> : <FaMinus />} */}
                {open ? <FaPhoneAlt /> : <FaPhoneAlt />}
            </a>
        </div>
    )
}

export default FloatingForm