"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  console.log(session);
  
  if (session) {
    return (
      <>
        <div className="w-64 h-40 border border-gray-500 flex flex-col justify-around items-center rounded-xl m-36">
          <div className="flex items-center justify-around w-full">
          {<img className="w-15 rounded-full" src={session.user.image} />} {session.user.name} <br />
          {session.user.email}
          </div>
          <button className=" px-4 py-3 bg-red-300 rounded-md" onClick={() => signOut()}>Sign out</button>
        </div>
      </>
    )
  }
  return (
    <>
    <div className="w-64 h-40 border border-gray-500 flex flex-col justify-around items-center rounded-xl m-36">
      Not signed in <br />
      <button className=" px-4 py-3 bg-red-300 rounded-md" onClick={() => signIn()}>Sign in</button>
      </div>
    </>
  )
}