import styles from './Post.module.css'

interface IPost {
  userId: number
  id: string
  title: string
  body: string
}
// const endpoint = 'https://jsonplaceholder.typicode.com/posts'
//     const getData = async () => {
//       try {
//         const response = await fetch(endpoint)
//         const data = await response.json()
//         const posts = data
//         return posts
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     getData()

let posts: IPost[]
const promise = new Promise((resolve) => {
  setTimeout(() => {
    posts = [{ userId: 6, id: '5', title: 'Title', body: 'body' }]
    resolve()
  }, 2000)
})
export const Posts = (): React.ReactElement => {
  console.log('render')

  if (!posts) {
    console.log('posts', posts)
    throw promise
  }
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
