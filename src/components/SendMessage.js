import React, { useState } from 'react'
import { db, auth } from '../firebase';
import firebase from 'firebase'
function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')
    async function handleSubmit(e) {
        e.preventDefault();
        console.log(scroll);
        const { uid, photoURL } = auth.currentUser
        await db.collection('msg').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
            <form onSubmit={handleSubmit} className="flex flex-row justify-center items-center bg-white h-16 rounded-full px-3">
                <div className="rounded-full flex flex-row">

                    <input value={msg} onChange={(e) => setMsg(e.target.value)} required className="rounded-l-full pl-4 h-12 bg-gray-100 focus:outline-none w-60 md:w-96" />

                    <div className=" bg-red-500 rounded-r-full appearance-none" type="submit"> <button type="submit" className="rounded-full h-12 w-16 text-white">Send</button></div>
                </div>
            </form>
    )
}

export default SendMessage
