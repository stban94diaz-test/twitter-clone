import { createClient } from "@/app/utils/supabase/sever"
import { redirect } from "next/navigation"
import { AuthButtonServer } from "../components/auth-button-server"
import { PostsList } from "../components/posts-list"

export default async function Posts() {
  const supabase = await createClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) redirect('/')

  const { data: posts } = await supabase
    .from('posts')
    .select('*, user:users(*)')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="max-w-[800px] mx-auto border-l border-r border-white/5 min-h-screen">
        <AuthButtonServer />
        <PostsList posts={posts} />
      </section>

    </main>
  )
}