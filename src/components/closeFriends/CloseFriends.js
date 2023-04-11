import './CloseFriends.css'

export default function CloseFriends({usr, key}) {
  return (
    <li className='sidebar_friend'>
        <img src={usr.img} className='sidebarFriendImg'/>
        <span className='sidebarFriendName'>{usr.name}</span>
    </li>
  )
}
