import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'
import swal from 'sweetalert'

const Login = () => {
    const userRef = useRef()
    const errRef = useRef()
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()

    const [login, {isLoading}] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() =>{
        setErrMsg('')
    },[user, pwd])

    let errorTitle = "Opps Something Wrong"

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const userData = await login({user, pwd}).unwrap()
            dispatch(setCredentials({...userData, user}))
            setUser('')
            setPwd('')
            navigate('/dashboard')
        }catch(err){
            if(!err?.originalStatus){
                // setErrMsg('No Response');
                swal({
                    title: errorTitle,
                    text: "No Response",
                    icon: "error",
                    button: "close!",
                  });
            }else if(err.originalStatus?.status === 400){
                //setErrMsg('Missing Username or Password');
                swal({
                    title: errorTitle,
                    text: "Missing Username or Password",
                    icon: "failed",
                    button: "close!",
                  });
            }else if(err.originalStatus?.status === 401){
                //setErrMsg('Unauthorized')
                swal({
                    title:errorTitle,
                    text: "Unauthorized",
                    icon: "failed",
                    button: "close!",
                  });
            }else{
                // setErrMsg('Login Failed')
                swal({
                    title: errorTitle,
                    text: "Login Failed",
                    icon: "failed",
                    button: "close!",
                  });
            }

            errRef.current.focus();
        }
    }

    const handleUserInput = (e) => setUser(e.target.value)

    const handlePwdInput = (e) =>setPwd(e.target.value)

  const content = isLoading ? <h1> Loading ... </h1> : (
    <section className="h-screen">
            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        className="w-full"
                        alt="Phone image"
                        />
                    </div>
                    
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <input
                                type="text"
                                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Username"
                                value={user}
                                ref={userRef}
                                onChange={handleUserInput}
                                autoComplete="off"
                                required
                                />
                            </div>

                            
                            <div className="mb-6">
                                <input
                                type="password"
                                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Password"
                                value={pwd}
                                onChange={handlePwdInput}
                                autoComplete="off"
                                required
                                />
                            </div>

                            

                            <button
                                type="submit"
                                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                Sign in
                            </button>

                            <div
                                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                            >
                                <p className="text-center font-semibold mx-4 mb-0">OR</p>
                            </div>

                            <button
                                type="button"
                                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                Guest Mode
                            </button>
                            
                        </form>
                    </div>
                </div>
            </div>    
        </section>
  )

  return content
}

export default Login