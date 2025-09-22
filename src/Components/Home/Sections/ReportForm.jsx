import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ReportForm() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(
            Yup.object().shape({
                loginid: Yup.string().required(),
                pwd: Yup.string().required(),
            })
        )
    })
    const submit = (data) => {
        axios.post('https://reports.anandlab.com/v3/wsLogin.asmx/ValidateLogin', data).then((response) => {
            const Result = JSON.parse(response.data.d)
            if (Result.Status == 'OK') {
                localStorage.setItem('report_session_id', Result.SessionID)
                toast.success(Result.Msg) 
                if (Result.UserType == 'pat') {
                    window.open(`https://reports.anandlab.com/v3/patient.html?sessionid=${Result.SessionID}`,'_blank');
                } else {
                    if (Result.payment_pending == 'Y') {
                        window.open(`https://reports.anandlab.com/v3/corporate_pending_bills.html?sessionid=${Result.SessionID}`,'_blank')
                    } else {
                        window.open(`https://reports.anandlab.com/v3/corporate_info.html?sessionid=${Result.SessionID}`,'_blank')
                    }
                }
            } else {
                toast.error(Result.Msg)
            }
            reset()
        })
    }
    const getReports = (id) => {
        axios.post('https://reports.anandlab.com/v3/wsLogin.asmx/GetReportStatusWalkIn', {
            psessionid: id
        }).then((response) => {
            const result = JSON.parse(response.data.d)
            localStorage.setItem('reports', JSON.stringify(result))
            getUserData(id)
        })
    }
    const getUserData = (id) => {
        axios.post('https://reports.anandlab.com/v3/wsLogin.asmx/GetUserDetails', {
            psessionid: id
        }).then((response) => {
            const result = JSON.parse(response.data.d)
            localStorage.setItem('report_user', JSON.stringify(result))
            navigate('/reports/account')
        })
    }
    return (
        <form onSubmit={handleSubmit(submit)} className="reports-frm">
            <div className="common-heading">
            <h2>
            <span> Get Your </span> Reports
            </h2>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">User ID</label>
                <input type="text" className={`form-control form-control ${errors.loginid && 'border-danger'}`} placeholder="Enter Your ID"   {...register('loginid')} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Access Code</label>
                <input type="password" className={`form-control form-control ${errors.pwd && 'border-danger'}`} placeholder="Enter Your Code" {...register('pwd')} />
            </div>
            <div className="text-center">
                <button type="submit" className="btn-primary w-100">SUBMIT</button>
            </div>
        </form>
    )
}

export default ReportForm