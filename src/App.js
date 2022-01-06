import React, { useEffect, useState } from 'react'
import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Chat from './components/Chat'
import SignIn from './components/SignIn'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [user] = useAuthState(auth)
  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user])
  if (loading) {
    return (
      <div className="w-full flex flex-col habijabi shadow-lg items-center bg-white sm:rounded-3xl sm:my-7 justify-center lg:h-screen">
        <p className="font-bold">Loading...</p>
      </div>
    )
  }
  return (
    <div className="flex habijabi w-screen overflow-hidden items-center justify-center bg-gray-50 sm:h-screen">
      <div className="flex w-full habijabi sm:h-full">
        {user ? <Chat /> : <SignIn />}
      </div>
    </div>
  )
}