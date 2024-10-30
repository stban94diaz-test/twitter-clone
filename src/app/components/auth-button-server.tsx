import { createClient } from "@/app/utils/supabase/sever"
import { AuthButtonClient } from "./auth-button-client"

export const AuthButtonServer = async () => {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <AuthButtonClient user={user} />
  )
}