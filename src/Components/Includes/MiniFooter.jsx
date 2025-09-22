import React from 'react';
import { Link } from "react-router-dom";

const MiniFooter = () => {
    return (
        <footer className='pb-1'>
            <div className="row">
                <div className="col-sm-12 col-md-12">
                    <div className="text-white footer-bottom-text text-center">
                        &copy;  {new Date().getFullYear()} Anandlab. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default MiniFooter