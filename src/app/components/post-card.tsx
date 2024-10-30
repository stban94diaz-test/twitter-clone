'use client'

import { Card, CardHeader, CardBody, CardFooter, Avatar } from "@nextui-org/react"
import { IconHeart, IconMessageCircle, IconRepeat } from "@tabler/icons-react"
import Link from "next/link"

export default function PostCard({
  userName,
  avatarUrl,
  name,
  content
}: {
  userName?: string,
  avatarUrl?: string,
  name?: string,
  content: string
}) {
  return (
    <Card className="bg-transparent shadow-none hover:bg-slate-800 transition border-b border-white/5 rounded-none">
      <CardHeader className="justify-between">
        <div className="flex gap-x-2">
          <Link href={`/${userName}`}>
            <Avatar radius="full" size="md" src={avatarUrl} />
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-300">{name}</h4>
            <h5 className="text-small tracking-tight text-default-400">{userName}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-white">
        <p>
          {content}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <IconMessageCircle className="w-4 h-4" />
        <IconHeart className="w-4 h-4" />
        <IconRepeat className="w-4 h-4" />
      </CardFooter>
    </Card>
  )
}
