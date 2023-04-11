import './Feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import { posts } from '../../Data' 

export default function Feed() {
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share></Share>
        {
          posts.map(p => (
            <Post key={p.id} post= {p}/>
          ))
        }
      </div>
    </div>
  )
}
