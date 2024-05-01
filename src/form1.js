import React, { useState } from "react";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const Pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const validateForm = () => {
        let hasErrors = false;

        if (!email.trim()) {
            setErrors(prevErrors => ({ ...prevErrors, email: 'Enter an email' }));
            hasErrors = true;
        } else if (!Pattern.test(email)) {
            setErrors(prevErrors => ({ ...prevErrors, email: 'Enter a valid email' }));
            hasErrors = true;
        } else {
            setErrors(prevErrors => ({ ...prevErrors, email: '' }));
        }

        if (!password.trim()) {
            setErrors(prevErrors => ({ ...prevErrors, password: 'Enter a password' }));
            hasErrors = true;
        } else if (password.trim().length < 8) {
            setErrors(prevErrors => ({ ...prevErrors, password: 'Password must be 8 characters' }));
            hasErrors = true;
        } else {
            setErrors(prevErrors => ({ ...prevErrors, password: '' }));
        }

        return hasErrors;
    };

    const handleEmailChange = (e) => {
        const { value } = e.target;
        setEmail(value);

        if (!value.trim()) {
            setErrors(prevErrors => ({ ...prevErrors, email: 'Enter an email' }));
        } else if (!Pattern.test(value)) {
            setErrors(prevErrors => ({ ...prevErrors, email: 'Enter a valid email' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, email: '' }));
        }
    };

    const handlePasswordChange = (e) => {
        const { value } = e.target;
        setPassword(value);

        if (!value.trim()) {
            setErrors(prevErrors => ({ ...prevErrors, password: 'Enter a password' }));
        } else if (value.trim().length < 8) {
            setErrors(prevErrors => ({ ...prevErrors, password: 'Password must be 8 characters' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, password: '' }));
        }
    };

    const handleLogin = () => {
        const hasErrors = validateForm();

        if (!hasErrors) {
            // Perform login action
        }
    };

    return (
        <div className="mt-5">
            <div className="w-25 mt-5 m-auto border pt-4 ">
                <div className="p-5">
                    <div className="text-center">
                        <label>Login Form</label>
                    </div>
                    <div className="mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="form-control"
                        />
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="form-control"
                        />
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
