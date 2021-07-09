import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MessageIcon from "@material-ui/icons/Message";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HeaderOption from './HeaderOption'
import { logout } from "./features/userSlice";
import { auth } from "./firebase";
import { selectUser } from "./features/userSlice";
import { useSelector, useDispatch } from "react-redux";

function Header() {
    const user=useSelector(selectUser)
    const dispatch = useDispatch()
    const logoutApp = () => {
        dispatch(logout())
        auth.signOut();
    }
    return (
      <div className="header">
        <div className="header_left">
          <img
            src="https://image.flaticon.com/icons/png/512/174/174857.png"
            alt=""
          />
          <div className="header_search">
            {/* Search icon */}
            <input type="text" placeholder='Search' />
            <SearchIcon />
          </div>
        </div>
        <div className="header_right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={MessageIcon} title="Message" />
          <HeaderOption Icon={NotificationsIcon} title="Message" />
          <HeaderOption avatar={true} title="Me" onClick={logoutApp}/>
        </div>
      </div>
    );
}

export default Header
