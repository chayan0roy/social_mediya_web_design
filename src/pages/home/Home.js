import Topbar from "../../components/topBar/Topbar";
import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/sideBar/Sidebar";
import Rightbar from "../../components/rightBar/Rightbar";
import './Home.css';

export default function Home() {
  return (
    <>
      <Topbar/>
      <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>
    </>
  )
}
