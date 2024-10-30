import { createClient } from "@/app/utils/supabase/sever"
import { redirect } from "next/navigation"
import { AuthButtonServer } from "./components/auth-button-server"

export default async function Home() {
  const supabase = await createClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (session !== null) redirect('/posts')

  return (
    <section className="grid place-content-center min-h-screen">
      <h1 className="text-xl font-bold mb-4 text-center">Inicia sesión en DevTer</h1>
      <AuthButtonServer />
    </section>
  )
}
