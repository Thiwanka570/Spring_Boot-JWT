import React, { Component } from 'react'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: null,
            password: null,
            role: null,
            token: null,
            auth: false,
        }
    }
    render() {
        return (
            <div>
                <div>
                    <h2>Login</h2>
                    <form >
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                required
                            />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default Login;