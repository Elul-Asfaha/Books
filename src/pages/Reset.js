import { sendPasswordResetEmail } from "firebase/auth"
import { Link } from "react-router-dom"
import { auth } from "../firebase"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";

const Reset=()=>{
    const [email,setEmail]=useState("")
    const [resetSentToggle,setResetSentToggle]=useState(false)
    const handleReset=(e)=>{
            e.preventDefault()
        sendPasswordResetEmail(auth,email).then(()=>{
            setResetSentToggle(true)
        }).catch(
            (error)=>{console.log(error)
        })
    }


    return(
        <section className="h-screen bg-slate-900">
            <div className="px-6 h-full text-white">
                <div
                    className=" flex xl:justify-center lg:justify-center justify-center items-center flex-wrap h-full g-6"
                >
                    <div className="shadow shadow-white p-5 xl:ml-20 xl:w-4/12 lg:w-5/12 md:w-7/12 mb-12 md:mb-0">
                        <Link to="/"
                             className="inline-block px-3 py-1 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                            <ArrowBackIcon/>
                        </Link>


                        {!resetSentToggle &&
                        <form onSubmit={handleReset}>
                            <div className="flex flex-row items-center justify-center">
                                <p className="text-lg mb-5">FORGOT PASSWORD?</p>
                            </div>
                
                            <div>
                                <p className="text-start font-semibold mb-2 text-gray-300">please enter your email adress below and we will send you information to recover your account</p>
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
                        
                            <div className="text-center lg:text-left">
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                        }

                        
                        {resetSentToggle &&
                        <div>
                           <div className="flex flex-row items-center justify-center">
                                <p className="text-lg mb-5">FORGOT PASSWORD?</p>
                            </div>
                         <p  className="text-start font-semibold my-2 text-gray-300">Your password reset Link has been sent to your email </p>
                            
                        </div>
                        }
                    
                    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reset