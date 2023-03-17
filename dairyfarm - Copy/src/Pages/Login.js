import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
            {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
            <h1 className="display-3 text-white mb-4 animated slideInDown">Contact</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/">Pages</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Contact</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}
    </div>
  )
}
