import { type Post } from "../types/posts"
import PostCard from "./post-card"

export function PostsList({ posts }: { posts: Post[] | null }) {
  return (
    <>
      {
        posts?.map((post) => {
          const {
            id,
            content,
            user
          } = post
          const {
            name,
            user_name: userName,
            avatar_url: avatarUrl
          } = user || {}

          return (
            <PostCard
              key={id}
              userName={userName}
              avatarUrl={avatarUrl}
              name={name}
              content={content}
            />
          )
        })
      }
    </>
  )
}