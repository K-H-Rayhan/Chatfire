import React, { useEffect, useState, useRef } from 'react'
import { auth, db } from '../firebase'
import SendMessage from './SendMessage'
import '../index.css'

function Chat() {
    const scroll = useRef()
    const [msg, setMsg] = useState([])
    useEffect(() => {
        db.collection('msg').orderBy('createdAt', "desc").limit(30).onSnapshot(snapshot => {
            setMsg(snapshot.docs.reverse().map(doc =>
                doc.data()
            ))
        })
    }, [])
    return (
        <div className="w-full habijabi flex flex-col shadow-lg bg-white lg:h-screen">
            <div className="border-b-2 h-20">
                <div className=" my-2 mx-5 text-red-600 flex flex-row justify-between "><button onClick={() => { auth.signOut() }} className="">SignOut</button>
                    <img src={auth.currentUser.photoURL} alt="" className=" shadow-sm border-gray-50 border-2 rounded-full w-14" />
                </div>
            </div>
            <div className=" text-black overflow-scroll scrollbar-none w-full pl-5 pr-5">
                {msg.reverse().map(({ text, photoURL, uid }) => (
                    <div key={Math.random()} className={`${uid === auth.currentUser.uid ? 'justify-end' : ''} flex flex-row `}>
                        <div className={`${uid === auth.currentUser.uid ? 'rounded-br-3xl rounded-tl-3xl rounded-bl-3xl flex flex-row-reverse shadow-md items-center  bg-indigo-600 text-white pl-7 pr-3' : ' pr-7 pl-3 shadow-md flex flex-row rounded-br-3xl rounded-bl-3xl  items-center  rounded-tr-3xl '} mt-3 py-2`}>
                            <img src={photoURL} alt="" className=" w-9 rounded-full " />
                            <p className={`${uid === auth.currentUser.uid ? 'mr-2' : 'ml-2'}`}>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className=" border-t-2 h-20 w-full flex flex-row items-center justify-center">
                <SendMessage scroll={scroll} />
            </div>
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat
