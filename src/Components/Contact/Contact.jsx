import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-16.webp";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { CgSpinner } from 'react-icons/cg';
import axios from 'axios';
import { API_URL } from '../../Redux/Constant/ApiRoute';
import { FormResponse } from '../../Helpers/FormResponse';
import Helmet from "react-helmet";

export default function Contact() {
    const [Loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(
            Yup.object().shape({
                name: Yup.string().required(),
                email: Yup.string().required(),
                mobile: Yup.string().required(),
                location: Yup.string(),
                message: Yup.string()
            })
        )
    })
    const contactUsFrom = (data) => {
        setLoading(true)
        axios.post(API_URL.REACH_US, data).then((res) => {
            FormResponse()
            setLoading(false)
            reset()
        })
    }

    useEffect(() => {
        document.title = "Reach Us - Blood Tests At Home | Anand Diagnostic Laboratory";
        window.scroll(0, 0)
    }, []);
    return (
        <div>
            <Helmet>
                <title>Reach Us - Anand Diagnostic Laboratory Services</title>
                <meta name="description" content="To get in touch with us, please submit the form below or send us an email or talk to us on the phone. We take all customer communications seriously."></meta>
            </Helmet>
            <section className='inner-banner'>
                <img src={bannerimage} alt="call" className="img-fluid" />
                <div className="inner-caption">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="caption-details bnr-txt">
                                    <ul>
                                        <li><Link to='/'> Home </Link></li>
                                        <li> / </li>
                                        <li><Link to='/'></Link> Contact Us </li>
                                    </ul>
                                    <h1>
                                        How Can we help You?
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section cont-acts">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-12">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-4 col-lg-4">
                                            <div className="contact-box animated fadeInUp">
                                                <p><i className="fa fa-map-marker" aria-hidden="true"></i><strong>No 54, Anand Tower, Bowring hospital road, Shivaji Nagar, Bangalore – 560001</strong></p>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 col-lg-4">
                                            <div className="contact-box animated fadeInUp">
                                                <p><i className="fa fa-phone" aria-hidden="true"></i>General : 18004251974</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 col-lg-4">
                                            <div className="contact-box animated fadeInUp">
                                                <p><i className="fa fa-clock-o" aria-hidden="true"></i>
                                                    Mon - Fri : 7:00 a.m – 7:00 p.m <br></br>
                                                    Sundays & Holidays : 7:00 a.m – 1:00 p.m
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="mb-5 animated fadeInUp"><hr /></div>
                                    <h5 className="animated fadeInUp mb-3 text-center"><strong>Health and Customer Care Enquiry</strong></h5>
                                    <p className="text-center">Need assistance or want to share your Health experience with us? You can call us or email us:</p>
                                    <div className="row justify-content-center">
                                        <div className="col-sm-12 col-md-12 col-lg-6">
                                            <div className="contact-box animated fadeInUp">
                                                <p>
                                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                                    <span>
                                                        <a href="mailto:info@anandlab.com" target="_blank">info@anandlab.com</a>
                                                        <br />
                                                         //<a href="mailto:helpdesk@anandlab.com" target="_blank">helpdesk@anandlab.com</a>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="mb-5 animated fadeInUp"><hr /></div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-8">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15551.398949025306!2d77.606148!3d12.981461!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33ceeda312ca9a2c!2sAnand%20Diagnostic%20Laboratory%20(A%20Neuberg%20Associate)!5e0!3m2!1sen!2sin!4v1656335670159!5m2!1sen!2sin" className="contact-map" allowFullScreen loading="lazy"></iframe>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-4">
                                    <div className="green-bg animated fadeInRight">
                                        <h4 className="mb-3 text-white">Get in Touch</h4>
                                        <form onSubmit={handleSubmit(contactUsFrom)}>
                                            <div className="formdata">
                                                {errors?.name ? <i className='text-warning danger text-capitalize small'>*{errors?.name?.message}</i> : ''}
                                                <input {...register('name')} type="text" placeholder="Enter Your Name" className='form-control' />
                                            </div>
                                            <div className="formdata">
                                                {errors?.email ? <i className='text-warning danger text-capitalize small '>*{errors?.email?.message}</i> : ''}
                                                <input {...register('email')} type="email" placeholder="Enter Your Email ID" className='form-control' />
                                            </div>
                                            <div className="formdata">
                                                {errors?.mobile ? <i className='text-warning danger text-capitalize small '>*{errors?.mobile?.message}</i> : ''}
                                                <input {...register('mobile')} type="tel" placeholder="Enter Your Mobile Number" className='form-control' />
                                            </div>
                                            <div className="formdata">
                                                {errors?.location ? <i className='text-warning danger text-capitalize small '>{errors?.location?.message}</i> : ''}
                                                <input {...register('location')} type="text" placeholder="Enter Your Location" className='form-control' />
                                            </div>
                                            <div className="formdata">
                                                {errors?.message ? <i className='text-warning danger text-capitalize small '>{errors?.message?.message}</i> : ''}
                                                <textarea {...register('message')} className='form-control' placeholder="Message"></textarea>
                                            </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}
