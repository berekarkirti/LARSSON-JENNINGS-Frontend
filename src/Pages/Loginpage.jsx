import React, { useState } from 'react';
import { auth, provider, signInWithPopup } from '../Services/firebase';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Styles/Loginpage.css';
import { FcGoogle } from 'react-icons/fc';

const Loginpage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const res = { token: '3127121320' };
       
        if (res.token) {
            localStorage.setItem('token', res.token);
            window.location.href = '/';
        } else {
            alert('Login failed');
        }
    };

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const token = result.user.accessToken;
                localStorage.setItem('token', token);
                window.location.href = '/';
            })
            .catch((error) => {
                console.error("Google login error:", error.message);
                alert('Google login failed');
            });
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/loginpage';
    };

    return (
        <div>
            <Navbar />
            <div className="container d-flex justify-content-center align-items-center" id='kirti-login'>
                <div className="row w-100">
                    <div className="form">
                        <h1 className="text-center">Login</h1>
                        <form className="login-form" onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="mb-3 text-end">
                                <a href="#" className="forgot-password">Forgot your password?</a>
                            </div>
                            <button type="button" onClick={handleGoogleLogin} className="btn btn-dark w-100 mb-3 d-flex align-items-center justify-content-center">
                                <b>Login with <FcGoogle size={24} className="me-2" /></b>
                            </button>
                            <button type="submit" className="btn btn-dark w-100 mb-3">Login</button>
                            <button type="button" onClick={handleLogout} className="btn btn-dark w-100 mb-3">Logout</button>
                            <div className="d-flex justify-content-between">
                                <a href="#" className="create-account">Create account</a>
                                <a href="#" className="return-store">Return to Store</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Loginpage;
