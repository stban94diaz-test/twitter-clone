'use client'

import { useRouter } from "next/navigation"
import { User } from "@supabase/supabase-js"
import { createClient } from "../utils/supabase/client"
import { GithubIcon } from "./icons"
import { useEffect } from "react"
import { Button } from "@nextui-org/react"

export const AuthButtonClient = ({ user }: { user: User | null }) => {
  const router = useRouter()
  const supabase = createClient()

  const handleSignIn = async () => await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "/auth/callback"
    },
  })

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(() => {
      router.refresh()
    })

    return () => {
      authListener?.subscription.unsubscribe()
    }
  }, [router, supabase])

  return (
    <header>
      {user === null ? (
        <button onClick={handleSignIn} type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
          <GithubIcon />
          Iniciar sesión con Github
        </button>
      ) : (
        <Button className="bg-[#48474E] text-default-300" onClick={handleSignOut}>Cerrar sesión</Button>
      )}
    </header>
  )
}