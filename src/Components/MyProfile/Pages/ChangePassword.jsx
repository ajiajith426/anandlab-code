import { Form } from 'react-component-form' 
import {API_URL} from '../../../Redux/Constant/ApiRoute'
import { toast } from 'react-hot-toast';
import AuthUser from "../../../Helpers/AuthUser";
import axios from 'axios';

export default function ChangePassword() {
  const ChangeMyPassword = (data,formElement) => {
    axios.post(API_URL.CHANGE_MY_PASSWORD + AuthUser().id,data).then((response) => { 
      if(response.data.status) {
        toast.success(response.data.message)
        formElement.reset()
      }
    }).catch((errors) => {
      if(errors.response.data.errors.confirm_password) {
        toast.error(errors.response.data.errors.confirm_password[0])
      }
      if(errors.response.data.errors.old_password) {
        toast.error(errors.response.data.errors.old_password[0])
      }
    })
  }
  return (
    <div>
      <div className="card shadow border">
        <div className="card-body">
          <Form onSubmit={ChangeMyPassword}>
            <div className="row m-0 mb-3">
              <div className="col-md-3">
                <b>Old Password</b>
              </div>
              <div className="col p-0">
                <input
                  type="password"
                  className="form-control"
                  name="old_password" 
                  placeholder='Enter your password'
                />
              </div>
            </div>
            <div className="row m-0 mb-3">
              <div className="col-md-3">
                <b>New Password</b>
              </div>
              <div className="col p-0">
                <input
                  type="password"
                  className="form-control"
                  name="new_password" 
                  placeholder='Enter your new password'
                />
              </div>
            </div>
            <div className="row m-0 mb-3">
              <div className="col-md-3">
                <b>Confirm Password</b>
              </div>
              <div className="col p-0">
                <input
                  type="password"
                  className="form-control"
                  name="confirm_password" 
                  placeholder='Re-enter your new password'
                />
              </div>
            </div> 
            <button
              type="submit"
              className="btn-primary rounded px-3 py-2 float-right"
            >
              Update
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}
