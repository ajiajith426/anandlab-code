import { Accordion, Alert, Form, Modal } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import axios from "axios";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function ReportAccount() {
    const navigate   = useNavigate()
    const report     = JSON.parse(localStorage.getItem('reports'))
    const reportUser = JSON.parse(localStorage.getItem('report_user'))

    const { register: changeRegister, handleSubmit: changeHandleSubmit, formState: { errors: changeError }, reset: changeReset } = useForm({
        resolver: yupResolver(
            Yup.object().shape({
                pnew_pwd: Yup.string().required(),
                pold_pwd: Yup.string().required(),
                confirmPassword: Yup.string().required().oneOf([Yup.ref('pnew_pwd')], 'Passwords does not match'),
            })
        )
    })

    const assetPath = (path) => {
        return `https://reports.anandlab.com/v3/${path.split(':')[1].replace('|', '')}`
    }
    const changePasword = (data) => {
        axios.post('https://reports.anandlab.com/v3/wsLogin.asmx/ChangePassword', {
            pnew_pwd: data.pnew_pwd,
            pold_pwd: data.pnew_pwd,
            psessionid: localStorage.getItem('report_session_id')
        }).then((response) => {
            const result = JSON.parse(response.data.d)
            if (result.Status === 'OK') {
                toast.success('Your Password Changed!')
                changeReset()
            } else {
                toast.error(result.Status)
            }
        })
    }
    const [show, setShow] = useState(false);
    const LogoutAccount = () => {
        Swal.fire({
            title: "Are you sure !",
            text: 'want logout reports account ?',
            allowOutsideClick: false,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            confirmButtonText: "Yes, Logout!",
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("report_user");
                localStorage.removeItem("reports");
                localStorage.removeItem("report_session_id");
                toast.success('Logout Success !')
                navigate('/reports')
            }
        });
    }
    console.log(reportUser,'reportUser')
    console.log(report,'report')
    if (reportUser === null && report === null) return <Navigate to="https://reports.anandlab.com/V3/" replace={true} />
    // if (reportUser === null && report === null) return <Navigate to="/reports" replace={true} />
    if (reportUser !== null && report !== null) return (
        <div>
            <section className="main-billfrm cmnmenu-topmargin">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <Alert variant="success">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5>
                                        {reportUser.UserName}
                                    </h5>
                                    <button className="border btn-light rounded" onClick={LogoutAccount}>
                                        <b><i className="fa fa-power-off mr-2"></i> Logout</b>
                                    </button>
                                </div>
                            </Alert>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Report Information</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="mb-4 d-flex justify-content-between align-items-center">
                                            <h6 className="m-0">Reports Status : <div className="badge bg-success text-white ml-2">{report.ReportStatus}</div></h6>
                                            <Link to={assetPath(report.ReportList)} target="_blank" download className="btn-primary">
                                                <i className="fa fa-file-text-o mr-2" aria-hidden="true"></i>
                                                My Report
                                            </Link>
                                        </div>
                                        <table className="table table-borderless m-0">
                                            <tbody>
                                                <tr>
                                                    <td>Lab ID</td>
                                                    <td>:</td>
                                                    <th>{report.LabID}</th>
                                                </tr>
                                                <tr>
                                                    <td>Reg.Date</td>
                                                    <td>:</td>
                                                    <th>{report.RegDate}</th>
                                                </tr>
                                                <tr>
                                                    <td>Delivery Date</td>
                                                    <td>:</td>
                                                    <th>{report.DeliveryDate}</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Change Password</Accordion.Header>
                                    <Accordion.Body>
                                        <form onSubmit={changeHandleSubmit(changePasword)}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Old password</Form.Label>
                                                <Form.Control type="password" className={`${changeError.pold_pwd && 'border-danger'}`} placeholder="Type here.." {...changeRegister('pold_pwd')} required />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>New password</Form.Label>
                                                <Form.Control type="password" className={`${changeError.pnew_pwd && 'border-danger'}`} placeholder="Type here.." {...changeRegister('pnew_pwd')} required />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>New password</Form.Label>
                                                <Form.Control type="password" className={`${changeError.confirmPassword && 'border-danger'}`} placeholder="Type here.." {...changeRegister('confirmPassword')} required />
                                            </Form.Group>
                                            <button type="submit" className="btn-primary ">Reset Password</button>
                                        </form>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe src={assetPath(report.ReportList)} frameborder="0" width='100%' height='100%'></iframe>
                </Modal.Body>
            </Modal>
        </div>
    ) 
}

export default ReportAccount