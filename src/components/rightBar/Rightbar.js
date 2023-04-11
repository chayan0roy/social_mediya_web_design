import './Rightbar.css'
import { DATA } from '../../Data'
import { users } from '../../Data'
import OnlineFriends from '../OnlineFriendsList/OnlineFriends'

export default function Rightbar({ profile }) {
	const HomeRightbar = ()=>{
		return (
			<>
				<div className='birthdayContainer'>
					<img src={DATA.icon[2]} className='birthdayImg'></img>
					<span className='birthdayText'><b>Roy</b> and <b>3 others Friends</b> have a birthday today</span>
				</div>
				<img src={DATA.add[0]} className='rightbarAdd'></img>
				<h4 className='rightbarTitle'>Online Friends</h4>
				<ul className='rightbarFriendList'>
					{
						users.map(u => (
							<OnlineFriends key={u.id} usr={u} />
						))
					}
				</ul>
			</>
		)
	};

	const ProfileRightbar = () => {
		return (
		  <>
			<h4 className="rightbarTitle">User information</h4>
			<div className="rightbarInfo">
			  <div className="rightbarInfoItem">
				<span className="rightbarInfoKey">City:</span>
				<span className="rightbarInfoValue">India</span>
			  </div>
			  <div className="rightbarInfoItem">
				<span className="rightbarInfoKey">From:</span>
				<span className="rightbarInfoValue">Kolkata</span>
			  </div>
			  <div className="rightbarInfoItem">
				<span className="rightbarInfoKey">Relationship:</span>
				<span className="rightbarInfoValue">Single</span>
			  </div>
			</div>
			<h4 className="rightbarTitle">User friends</h4>
			<div className="rightbarFollowings">
			  <div className="rightbarFollowing">
				<img src={users[0].img} className="rightbarFollowingImg"/>
				<span className="rightbarFollowingName">John Carter</span>
			  </div>
			  <div className="rightbarFollowing">
			  	<img src={users[1].img} className="rightbarFollowingImg"/>
				<span className="rightbarFollowingName">John Carter</span>
			  </div>
			  <div className="rightbarFollowing">
			  	<img src={users[2].img} className="rightbarFollowingImg"/>
				<span className="rightbarFollowingName">John Carter</span>
			  </div>
			  <div className="rightbarFollowing">
			  	<img src={users[3].img} className="rightbarFollowingImg"/>
				<span className="rightbarFollowingName">John Carter</span>
			  </div>
			  <div className="rightbarFollowing">
			  	<img src={users[4].img} className="rightbarFollowingImg"/>
				<span className="rightbarFollowingName">John Carter</span>
			  </div>
			  <div className="rightbarFollowing">
			  	<img src={users[5].img} className="rightbarFollowingImg"/>
				<span className="rightbarFollowingName">John Carter</span>
			  </div>
			</div>
		  </>
		);
	  };

	  
	return (
		<div className='rightBar'>
			<div className='rightbarWrapper'>
				{profile ? <ProfileRightbar /> : <HomeRightbar />}
			</div>
		</div>
	)
}
