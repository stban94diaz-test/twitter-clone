'use client'
import { useFormStatus } from "react-dom"

export const ComposePostButton = () => {
  const { pending } = useFormStatus()
  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-sky-500 font-bold rounded-full px-5 py2 self-end disabled:opacity-50 disabled:pointer-events-none"
    >
      {pending ? 'Posteando...' : 'Postear'}
    </button>
  )
}