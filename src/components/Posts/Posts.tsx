import { useEffect, useState } from 'react'
import styles from './Post.module.css'

interface IPost {
  userId: number
  id: string
  title: string
  body: string
}
export const Posts = (): React.ReactElement => {
  const [posts, setPosts] = useState<IPost[]>([])
  const endpoint = 'https://jsonplaceholder.typicode.com/posts'
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(endpoint)
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <div className={styles.posts}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <h3>id: {post.id}</h3>
          <h3>title: {post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}
