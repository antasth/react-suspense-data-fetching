import { suspend } from 'suspend-react'
import styles from './Post.module.css'

interface IPost {
  userId: number
  id: string
  title: string
  body: string
}

const endpoint = 'https://jsonplaceholder.typicode.com/posts?_limit=5'

const getData = async (): Promise<IPost[] | undefined> => {
  try {
    const response = await fetch(endpoint)
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export const Posts = (): React.ReactElement => {
  console.log('render')

  const posts = suspend(getData, [])

  return (
    <div className={styles.posts}>
      {posts &&
        posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <h3>id: {post.id}</h3>
            <h3>title: {post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  )
}
