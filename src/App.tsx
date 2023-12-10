import { Suspense } from 'react'
import './App.css'
import { Posts } from './components/Posts/Posts'

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Posts />
    </Suspense>
  )
}

export default App
