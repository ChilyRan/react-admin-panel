import React, { useContext } from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{textDecoration:'none'}}>
          <div className="logo">Chily</div>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
        <Link to="/" style={{textDecoration:'none'}} >
            <li>
                <DashboardIcon className='icon'/>
                <span>Dashboard</span>
            </li>
        </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{textDecoration:'none'}}>
            <li>
              <PersonOutlineIcon className='icon'/>
                <span>Users</span>
            </li>
          </Link>
        <Link to="/products" style={{textDecoration:'none'}}>
            <li>
              <StoreIcon className='icon'/>
                <span>Producs</span>
            </li>
        </Link>
            <li>
              <ViewStreamOutlinedIcon className='icon'/>
                <span>Orders</span>
            </li>
            <li>
              <LocalShippingIcon className='icon'/>
                <span>Delivery</span>
            </li>
          <p className="title">USEFUL</p>

            <li>
              <AssessmentRoundedIcon className='icon'/>
                <span>Stats</span>
            </li>
            <li>
              <NotificationsNoneRoundedIcon className='icon'/>
                <span>Notifications</span>
            </li>
          <p className="title">SERVICE</p>

            <li>
              <SettingsSystemDaydreamOutlinedIcon className='icon'/>
                <span>System Health</span>
            </li>
            <li>
              <PsychologyOutlinedIcon className='icon'/>
                <span>Logs</span>
            </li>
            <li>
              <SettingsApplicationsRoundedIcon className='icon'/>
                <span>Settings</span>
            </li>
          <p className="title">USER</p>

            <li>
              <AccountCircleOutlinedIcon className='icon'/>
                <span>Profile</span>
            </li>
            <li>
              <LogoutOutlinedIcon className='icon'/>
                <span>Logout</span>
            </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={() => dispatch({type:"DARK"})}></div>
        {/* <div className="colorOption"></div> */}
      </div>
      
    </div>
  )
}

export default Sidebar