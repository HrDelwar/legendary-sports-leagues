import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='text-center bg-dark text-white d-flex flex-column justify-content-center vh-100'>
            <h1>404</h1>
            <h3>Page Not Found!!</h3>
            <div className="">
                <Link to="/"><button className="btn btn-custom d-inline-block">Back</button></Link>
            </div>
        </div>
    );
};

export default NotFound;