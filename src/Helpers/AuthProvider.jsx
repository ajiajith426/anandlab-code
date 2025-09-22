import React from "react";
import AuthUser from "./AuthUser";
import { useNavigate } from "react-router";

function AuthProvider( props) {
    localStorage.setItem('path',props.path)
    const navigate = useNavigate()
    if(AuthUser()) {
        return (
            <div>
                {props.children}
            </div>
        );
    } else {
        navigate('/login',{to : 'checkout'})
    }
}

export default AuthProvider;
