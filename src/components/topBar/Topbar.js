import './Topbar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material'
import { DATA } from '../../Data'

export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className='topbarLeft'>
            <span className='logo'>Clone With React</span>
        </div>
        <div className='topbarCenter'>
            <div className='searchBar'>
                <Search className='searchIcon'></Search>
                <input placeholder='Search here...' className='searchInput'></input>
            </div>
        </div>
        <div className='topbarRight'>
            <div className='topbarLinks'>
                <span className='topbarLink'>Homepage</span>
                <span className='topbarLink'>Timeline</span>
            </div>
            <div className='topbarIcons'>
                <div className='topbarIconItem'>
                    <Person></Person>
                    <span className='topbarIconBatch'>1</span>
                </div>
                <div className='topbarIconItem'>
                    <Chat/>
                    <span className='topbarIconBatch'>2</span>
                </div>
                <div className='topbarIconItem'>
                    <Notifications/>
                    <span className='topbarIconBatch'>1</span>
                </div>
            </div>
            <img src={DATA.person[0]} className='topbarImg'></img>
        </div>
    </div>
  )
}
