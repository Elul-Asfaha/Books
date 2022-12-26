import { signInWithEmailAndPassword } from "firebase/auth"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { provideData } from "../App"
import { auth } from "../firebase"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


const Login=()=>{
    const provided=useContext(provideData)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [incorrectCredentials,setIncorrectCredentials]=useState(false)
    const handleLogin=(e)=>{
            e.preventDefault()
        signInWithEmailAndPassword(auth,email,password).then((Credential)=>{
            provided.setVerifiedUser(true);
            provided.setUser(Credential.user.email)
                    }).catch(
            (error)=>{
                setIncorrectCredentials(true)
        })
    }


    return(
        <section className="h-screen bg-slate-900">
            <div className="px-6 h-full text-white">
                <div
                    className=" flex xl:justify-center lg:justify-center justify-center items-center flex-wrap h-full g-6"
                >
                    <div className="shadow shadow-white p-5 xl:ml-20 xl:w-4/12 lg:w-5/12 md:w-7/12 mb-12 md:mb-0">
                        <form onSubmit={handleLogin}>
                            <div className="flex flex-row items-center justify-center">
                                <p className="text-lg mb-0 mr-4">SIGN IN</p>
                            </div>
                
                            <div
                            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                            >
                            </div>
                
                            <div className="mb-6">
                                <input
                                    type="Email"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Email"
                                    id="Email"
                                    onChange={(e)=>setEmail(e.target.value)}

                                    required
                                />
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

                            {incorrectCredentials &&
                            <div className="text-red-600 flex align-center justify-center">
                                <ErrorOutlineIcon/>
                                <p className="text-center text-red-600">
                                    Email or Password is incorrect
                                </p>
                                
                                </div>
                                }
                            <div className="flex justify-between items-center mb-6">

                            
                                <div className="form-group form-check">
                                    <input
                                    type="checkbox"
                                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    />
                                    <label className="form-check-label inline-block text-white-300" htmlFor="exampleCheck2"
                                    >Remember me</label                    >
                                </div>
                                <Link to="/reset" className="text-gray-400">Forgot password?</Link>
                            </div>

                
                            <div className="text-center lg:text-left">
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                    Login
                                </button>
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Don't have an account? 
                                    <Link to="/Register"
                                    className="ml-1 text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                    >
                                        Register
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login