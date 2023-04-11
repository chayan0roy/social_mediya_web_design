import { useState } from 'react'
import './Post.css'
import { MoreVert } from '@mui/icons-material'
import { DATA } from '../../Data'
import { users } from '../../Data' 

export default function Post({post, key}) {

const [like, setLike] = useState(post.like);
const [isliked, setIsLiked] = useState(false);

const likeHandler = ()=>{
    setLike(isliked ? like - 1 : like + 1);
    setIsLiked(!isliked)
}

  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>
                <div className='postTopLeft'>
                    <img src={users.filter(u=>u.id === post.userId)[0].img} className='postProfileImg'></img>
                    <span className='postUserName'>{users.filter(u=>u.id === post.userId)[0].name}</span> 
                    <span className='postDate'>{post.date}</span> 
                </div>
                <div className='postTopRight'>
                    <MoreVert/>
                </div>
            </div>
            <div className='postCenter'>
                <span className='psotText'>{post?.desc}</span>
                <img src={post.img} className='postImage'></img>
            </div>
            <div className='postBottom'>
                <div className='postBottomLeft'>
                    <img src={DATA.icon[0]} className='likeCommentIcon' onClick={likeHandler}></img>
                    <img src={DATA.icon[1]} className='likeCommentIcon' onClick={likeHandler}></img>
                    <span className='postLikeCounter'>{like} People Like it</span>
                </div>
                <div className='postBottomRight'>
                    <img src={DATA.icon[0]} className='likeCommentIcon'></img>
                    <span className='postComment'>{post.comment} Comment</span>
                </div>
            </div>
        </div>
    </div>
  )
}
