import React, { Component } from 'react';

class Login extends Component{
    render() {
        return (
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center">Sign In</h1>
                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                                Username or Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username or Email" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
                            <p className="text-red text-xs italic">Please choose a password.</p>
                        </div>
                        <div className="flex items-center justify-between">
                        <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button" >
                            Sign In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                            Forgot Password?
                        </a>
                        </div>
                    </div>
                </div>
            </div>
                
        );
    }
}

export default Login;