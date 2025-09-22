import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router"
import { setAuthUser } from "../Redux/Actions/TestAction";

function AuthRoutes() {
    const AuthUser = localStorage.getItem('user')
    const dispatch = useDispatch();
    if (AuthUser !== null)  {
        dispatch(setAuthUser(JSON.parse(AuthUser)))
        return <Outlet />
    };
   return <Navigate replace to="/login" />
}

export default AuthRoutes