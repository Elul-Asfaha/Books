import { createUserWithEmailAndPassword } from "firebase/auth"
import {  useState } from "react"
import { Link } from "react-router-dom"
import { auth } from "../firebase"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const SignUp=()=>{

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    const [emailInUse,setEmailInUse]=useState(false)
    const [registartionSuccessfull,setRegistrationSucessfull]=useState(false)
    const handleSignUp=(e)=>{
        e.preventDefault();

        createUserWithEmailAndPassword(auth,email,password).then(

            setRegistrationSucessfull(true)
            ).catch((error)=>{
                setEmailInUse(!emailInUse)
                return; 
            })
        
            setEmail("")
            setPassword("")
            setConfirmPassword("")
            
    }

    return(
        <section className="h-screen bg-slate-900 relative">
            <div className="px-6 h-full text-white">
                <div
                    className="flex xl:justify-center lg:justify-center justify-center items-center flex-wrap h-full g-6"
                >
                    <div className="shadow shadow-white  p-5 xl:ml-20 xl:w-4/12 lg:w-4/12 md:w-7/12 mb-12 md:mb-0 ">
                        <Link to="/"
                             className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block px-3 py-1 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        <ArrowBackIcon/>
                        </Link>
                        {!registartionSuccessfull?
                        <form onSubmit={handleSignUp} autoComplete="off">
                            <div className="flex flex-row items-center justify-center lg:justify-center mb-6">
                                <p className="text-lg mb-0 mr-4">CREATE NEW ACCOUNT</p>
                           
                            </div>
                       
                            <div className="mb-6">
                                <input
                                    type="Email"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    required
                                />
                                {emailInUse?
                                <div
                                className="mb-4 rounded-lg bg-danger-100 pt-2 px-6 text-base text-red-700"
                                role="alert">
                                    Email Already In Use
                                </div>:''
                                }
                            </div>
                            
                            <div className="mb-6">
                                <input
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <input
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e)=>setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                
                            <div className="text-center lg:text-left">
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                                >
                                        Register
                                </button>
                            </div>
                        </form>:''}
                        {registartionSuccessfull?
                                <div
                                className="mb-4 rounded-lg bg-danger-100 pt-2 px-6 text-base text-lg text-green-700"
                                role="alert">
                                    Successfully registered
                                </div>:''
                                }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp