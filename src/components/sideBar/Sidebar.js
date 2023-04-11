import './Sidebar.css';
import { RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from '@mui/icons-material'
import { users } from '../../Data';
import CloseFriends from '../closeFriends/CloseFriends';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <RssFeed className='sidebarIcon'/>
            <span className='sidebarListItemText'>Feed</span>
          </li>
          <li className='sidebarListItem'>
            <Chat className='sidebarIcon'/>
            <span className='sidebarListItemText'>Chat</span>
          </li>
          <li className='sidebarListItem'>
            <PlayCircleFilledOutlined className='sidebarIcon'/>
            <span className='sidebarListItemText'>Videos</span>
          </li>
          <li className='sidebarListItem'>
            <Group className='sidebarIcon'/>
            <span className='sidebarListItemText'>Groups</span>
          </li>
          <li className='sidebarListItem'>
            <Bookmark className='sidebarIcon'/>
            <span className='sidebarListItemText'>Bookmark</span>
          </li>
          <li className='sidebarListItem'>
            <HelpOutline className='sidebarIcon'/>
            <span className='sidebarListItemText'>Questions</span>
          </li>
          <li className='sidebarListItem'>
            <WorkOutline className='sidebarIcon'/>
            <span className='sidebarListItemText'>Jobs</span>
          </li>
          <li className='sidebarListItem'>
            <Event className='sidebarIcon'/>
            <span className='sidebarListItemText'>Event</span>
          </li>
          <li className='sidebarListItem'>
            <School className='sidebarIcon'/>
            <span className='sidebarListItemText'>Course</span>
          </li>
        </ul>
        <button className='sidebarBtn'>Show More</button>
        <hr className='sidebarHr'/>
        <ul className='sidebarFrienndList'>
          {
            users.map(u=>(
              <CloseFriends usr={u} key={u.id}/>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
