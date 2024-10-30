'use client'

import { useEffect, useState } from "react"
import { createClient } from "../utils/supabase/client"
import { GithubIcon } from "./icons"
import { Session } from "@supabase/supabase-js"
import { redirect } from "next/navigation"

export const AuthButton = () => {
  const [session, setSession] = useState<Session | null>(null)
  const supabase = createClient()

  const handleSignIn = async () => await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "/auth/callback"
    },
  })

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    redirect('/login')
  }

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession()
      if (error) {
        console.error(error)
        setSession(null)
      } else {
        setSession(data.session)
      }
    }

    getSession()
  }, [supabase.auth])

  return (
    <header>
      {session === null ? (
        <button onClick={handleSignIn} type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
          <GithubIcon />
          Iniciar sesión con Github
        </button>
      ) : (
        <button onClick={handleSignOut}>Cerrar sesión</button>
      )}
    </header>
  )
}