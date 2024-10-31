'use client'

import { Avatar } from "@nextui-org/react"
import { ComposePostButton } from "./compose-post-button"
import { useRef } from "react"
import { addPost } from "../actions/add-post-action"

export function ComposePost({
  avatarUrl
}: {
  avatarUrl?: string
}) {
  const ref = useRef<HTMLFormElement>(null)

  return (
    <form
      ref={ref}
      action={async (formData) => {
        await addPost(formData)
        ref.current?.reset()
      }}
      className="flex flex-row py-4 px-3 border-b border-white/5"
    >
      <Avatar radius="full" size="md" src={avatarUrl} className="mr-4" />
      <div className="flex flex-1 flex-col gap-y-4">
        <textarea
          name="content"
          rows={4}
          className="w-full text-2xl bg-black placeholder-gray-500 p-2"
          placeholder="¡¿Qué esta pasando?!"
        />
        <ComposePostButton />
      </div>
    </form>
  )
}