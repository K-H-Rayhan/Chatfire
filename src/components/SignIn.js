import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import { auth } from '../firebase'
import '../index.css'
function SignIn() {
    const [msg, setMsg] = useState('')
    const [matach, setMatch] = useState(false)
    const pass = 7406;
    function handleSubmit(e) {
        e.preventDefault();
        msg == pass ? setMatch(true) : alert("Wrong Password");
    }
    function handleSignIn() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithRedirect(provider)
    }
    return (
        <div className="w-full flex flex-col habijabi shadow-lg items-center bg-white sm:rounded-3xl sm:my-7 justify-center lg:h-screen">

            {matach ? <button onClick={handleSignIn} className="" className=" bg-red-600 w-2/4 h-14 text-white font-bold sm:1/3">Login with Google</button>
                : <form onSubmit={handleSubmit} className="flex flex-row justify-center items-center bg-white h-16 rounded-full px-3"><div className="rounded-full flex flex-row">
                        <input value={msg} onChange={(e) => setMsg(e.target.value)} required className="rounded-l-full pl-4 h-12 bg-gray-100 focus:outline-none w-60 md:w-96" placeholder="Password" />
                        <div className=" bg-red-500 rounded-r-full px-3" type="submit"> <button type="submit" className="rounded-full h-12 w-16 text-white">Confirm</button></div>
                    </div>
                </form>}
        </div>
    )
}

export default SignIn
