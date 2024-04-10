import { Axios } from 'axios';
import React, { useState } from 'react';

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '' 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    async function loginUser(username, password) {
        try {
            const response = await Axios.post('/api/login', {
                username: username,
                password: password
            });

            if (response.status === 200) {
                return response.data.token;
            } else {
                throw new Error('Login Faild !');
            }

        } catch (error) {
            console.log(error);
            throw error
        }
    }

    function saveUserDetailsToLocal(token) {
        localStorage.setItem('token', token);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const token=loginUser(formData.username,formData.password);
        saveUserDetailsToLocal(token);
        console.log(token);
        console.log(formData);
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
