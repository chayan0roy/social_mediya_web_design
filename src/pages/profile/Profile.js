import './Profile.css'
import Topbar from "../../components/topBar/Topbar";
import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/sideBar/Sidebar";
import Rightbar from "../../components/rightBar/Rightbar";
import { users, posts } from '../../Data';

export default function Profile() {
	return (
		<>
			<Topbar />
			<div className="profile">
				<Sidebar />
				<div className='profileRight'>
					<div className='profileRightTop'>
						<div className='profileCover'>
							<img src={posts[0].img} className='profileCoverImg'></img>
							<img src={users[0].img} className='profileUserImg'></img>
						</div>
						<div className='profileInfo'>
							<h4 className='profileInfoName'>Tara Roy</h4>
							<span className='profileInfoDesc'>Hello my friends!</span>
						</div>
					</div>
					<div className='profileRightBottom'>
						<Feed />
						<Rightbar profile/>
					</div>
				</div>
			</div>
		</>
	)
}
