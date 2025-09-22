import axios from 'axios';
import {API_URL} from '../../../Redux/Constant/ApiRoute'
import { toast } from 'react-hot-toast';
import AuthUser, { PutUser } from "../../../Helpers/AuthUser";
import { useForm } from "react-hook-form";  
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

export default function AccountInformation() {
  const customer  = AuthUser(); 
  const { register, handleSubmit, formState: { errors } } = useForm({ 
    resolver: yupResolver(
      Yup.object().shape({
        name         : Yup.string().required(),
        primary_email: Yup.string().required(),
        mobile       : Yup.number().required(),
        email        : Yup.string().required(),
        first_name   : Yup.string().required(),
        last_name    : Yup.string().required(),
        phone_number : Yup.number().required(), 
        address      : Yup.string().required(),
        city_town    : Yup.string().required(),
        state        : Yup.string().required(),
        pin_code     : Yup.number().required()
      })
    ),
    defaultValues: {
      name         : customer.name,
      primary_email: customer?.email,
      mobile       : customer?.mobile,
      email        : customer?.customer_details?.email,
      first_name   : customer?.customer_details?.first_name,
      last_name    : customer?.customer_details?.last_name,
      phone_number : customer?.customer_details?.phone_number,
      address      : customer?.customer_details?.address,
      city_town    : customer?.customer_details?.city_town,
      state        : customer?.customer_details?.state,
      pin_code     : customer?.customer_details?.pin_code,
      id:customer.id
    }
  }) 
  const UpdateInfo = (data) => {
    axios.post(API_URL.UPDATE_MY_PROFILE,data).then((response) => {
      if (response.data.status) { 
        toast.success(response.data.message)
        PutUser(response.data.data) 
      }
    });
  } 
  
  return (
    <div>
      <div className="card shadow border">
        <div className="card-body">
          <form onSubmit={handleSubmit(UpdateInfo)}>
            <h6 className='p-3' style={{ color: "#5c2d91" }}><b>Account Details</b></h6>
            <div className="row m-0 mb-2">
              <div className="col-md-3">
                <b>Name</b>
              </div>
              <div className="col p-0">
                <input type="text" className={`form-control  ${errors.name && 'border-danger'}`} {...register('name')} />
              </div>
            </div>
            <div className="row m-0 mb-2">
              <div className="col-md-3">
                <b>Email</b>
              </div>
              <div className="col p-0">
                <input type="text" className="form-control" value={customer?.email} disabled/>
              </div>
            </div>
            <div className="row m-0 mb-2">
              <div className="col-md-3">
                <b>Mobile</b>
              </div>
              <div className="col p-0">
                <input type="text" className={`form-control  ${errors.mobile && 'border-danger'}`} {...register('mobile')}/>
              </div>
            </div>
            <h6 className='p-3' style={{ color: "#5c2d91" }}><b>Billing Account Details</b></h6>
            <div className="row m-0 mb-2">
              <div className="col-md-3">
                <b>First Name</b>
              </div>
              <div className="col p-0">
                <input type="text" className={`form-control  ${errors.first_name && 'border-danger'}`}  {...register('first_name')} />
              </div>
            </div>
            <div className="row m-0 mb-2">
              <div className="col-md-3">
                <b>Last Name</b>
              </div>
              <div className="col p-0">
                <input type="text" className={`form-control  ${errors.last_name && 'border-danger'}`} {...register('last_name')}/>
              </div>
            </div>
            <div className="row m-0 mb-2">
              <div className="col-md-3">
                <b>Email</b>
              </div>
              <div className="col p-0">
                <input type="text" className={`form-control  ${errors.email && 'border-danger'}`}  {...register('email')}/>
              </div>
            </div>
            <div className="row m-0 mb-2">
              <div className="col-md-3">
                <b>Phone Number</b>
              </div>
              <div className="col p-0">
                <input type="text" className={`form-control  ${errors.phone_number && 'border-danger'}`}   {...register('phone_number')} />
              </div>
            </div>
            <div className="row m-0 mb-2">
              <div className="col-md-3">
                <b>Address</b>
              </div>
              <div className="col p-0">
                <input type="text" className={`form-control  ${errors.address && 'border-danger'}`}  {...register('address')} />
              </div>
            </div>
            <div className="row m-0 mb-2">
              <div className="col-md-3">
                <b>City / Town</b>
              </div>
              <div className="col p-0">
                <input type="text" className={`form-control  ${errors.city_town && 'border-danger'}`}  {...register('city_town')} />
              </div>
            </div>
            <div className="row m-0 mb-2">
              <div className="col-md-3">
                <b>State</b>
              </div>
              <div className="col p-0">
                <input type="text" className={`form-control  ${errors.state && 'border-danger'}`} {...register('state')}/>
              </div>
            </div>
            <div className="row m-0 mb-2">
              <div className="col-md-3">
                <b>Pincode</b>
              </div>
              <div className="col p-0">
                <input type="text" className={`form-control  ${errors.pin_code && 'border-danger'}`}  {...register('pin_code')} />
              </div>
            </div> 
            <button type="submit" className='btn-primary rounded px-3 py-2 float-right'>Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}
