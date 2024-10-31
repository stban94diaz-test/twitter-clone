'use server'

import { revalidatePath } from "next/cache"
import { createClient } from "../utils/supabase/sever"

export const addPost = async (formData: FormData) => {
  const content = formData.get('content')

  if (content === null || !Boolean(content?.toString().trim())) return

  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (user === null) return

  await supabase.from('posts').insert({
    content: content.toString(),
    user_id: user.id
  })

  revalidatePath('/')
}