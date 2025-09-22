import axios from 'axios'
import { API_URL } from '../../../Redux/Constant/ApiRoute'
import { FormResponse } from '../../../Helpers/FormResponse'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { setLoading } from "../../../Redux/Actions/LoaderAction";
import { useState } from 'react';

export default function BannerForm() {
    const dispatch = useDispatch();
    const [testOption, setTestOption] = useState([])
    const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp', 'pdf', 'xls'] };
    function isValidFileType(fileName, fileType) {
        return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
    }
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(
            Yup.object().shape({
                name: Yup.string().required(),
                mobile: Yup.string().matches(/^[6-9]\d{9}$/).required(),
                location: Yup.string().required(),
                test_name: Yup.string().required(),
                comments: Yup.string(),
                reportFile: Yup.mixed().required()
                    .test("is-valid-type", "Not a valid image type", value => isValidFileType(value && value[0]?.name.toLowerCase(), "image"))
            })
        )
    })
    const submitBanner = (formData) => {
        dispatch(setLoading(true))
        const data = {
            name      : formData.name,
            mobile    : formData.mobile,
            location  : formData.location,
            test_name : formData.test_name,
            comments  : formData.comments,
            page_url  : window.location.href,
            reportFile: formData.reportFile[0]
        }
        axios.post(API_URL.BANNER_FROM, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then((response) => {
            dispatch(setLoading(false))
            FormResponse()
            reset()
        }).catch((error) => {
            console.log(error.message)
        });
    }
    const findTest = (inputValue) => {
        axios.get(`${API_URL.TEST_LISTS}?TestName=${inputValue}`).then((response) => {
            setTestOption(response.data.data)
        });
    }
    return (
        <div className='banner-form'>
            <form onSubmit={handleSubmit(submitBanner)}>
                <div className="frm-fields row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h4 className='cont-frmhed'>Book Home Collection</h4>
                        <div className="form-data">
                            <input className={`input100 ${errors?.name && 'border-bottom border-danger'}`} placeholder="Name" {...register('name')} />
                        </div>
                        <div className="form-data">
                            <input className={`input100 ${errors?.mobile && 'border-bottom border-danger'}`} type="tel" placeholder="Mobile" {...register('mobile')} />
                        </div>
                        <div className="form-data">
                            <select className={`input100 ${errors?.location && 'border-bottom border-danger'}`} id="location" name="location"  {...register('location')}>
                                <option value=""> -- select -- </option>
                                {
                                    localStorage.getItem('locations') ?
                                        JSON.parse(localStorage.getItem('locations')).map((location) => (
                                            <option key={location.id} value={location.location_slug} >{location.location.toUpperCase()}</option>
                                        ))
                                        : null
                                }
                            </select>
                        </div>
                        <div className={`form-data file-upload ${errors?.reportFile && 'border-bottom border-danger'}`}>
                            <input type="file" name="reportFile"  {...register('reportFile')} />
                        </div>
                        <div className="form-data">
                            <input list='testlist' onKeyUp={(e) => findTest(e.target.value)} className={`input100 ${errors?.test_name && 'border-bottom border-danger'}`} placeholder="Select Test Name" {...register('test_name')} />
                            <datalist id="testlist">
                                {
                                    testOption.length > 0 ?
                                        testOption.map(item => <option value={item.TestName}></option>)
                                        : null
                                }
                            </datalist>
                        </div>
                        <div className="form-data">
                            <input className={`input100 ${errors?.comments && 'border-bottom border-danger'}`} placeholder="Comments" {...register('comments')} />
                        </div>
                        <div className="form-data sbm">
                            <input type="submit" name="submit" value="SUBMIT" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
