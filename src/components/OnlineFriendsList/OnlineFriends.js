import './OnlineFriends.css'

export default function OnlineFriends({usr}) {
  return (
        <li className='rightbarFriend'>
          <div className='rightbarProfileImageContainer'>
            <img src={usr.img} className='rightbarProfileImage'></img>
            <span className='rightbarOnline'></span>
          </div>
          <span className='rightbarUsername'>{usr.name}</span>
        </li>
    )
}
