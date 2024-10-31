import { createClient } from "@/app/utils/supabase/sever"
import { redirect } from "next/navigation"
import { AuthButtonServer } from "../components/auth-button-server"
import { PostsList } from "../components/posts-list"
import { ComposePost } from "../components/compose-post"

export default async function Posts() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user === null) redirect('/')

  const { data: posts } = await supabase
    .from('posts')
    .select('*, user:users(*)')
    .order('created_at', { ascending: false })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="max-w-[800px] w-full mx-auto border-l border-r border-white/5 min-h-screen">
        <ComposePost avatarUrl={user?.user_metadata?.avatar_url} />
        <PostsList posts={posts} />
        <AuthButtonServer />
      </section>

    </main>
  )
}