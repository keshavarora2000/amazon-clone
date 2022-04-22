import React from 'react'

import amazonLogo from '../../amazon_nav_logo.png'

import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import LocationOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'

import { useSelector, useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import { logoutInitiate } from '../../redux/actions'

const Header = () => {
  const dispatch = useDispatch();
  
  const handleAuth = () => {
      dispatch(logoutInitiate());
  }

  const { user } = useSelector((state) => state.data);
  const { basket } = useSelector((state) => state.data);


  return (
    <nav className='header'>
        <Link to='/'>
            <img 
                className='header-logo'
                src={amazonLogo}
                alt="amazon logo"
            />
        </Link>
        <div className='header-option' style={{marginRight: "-10px"}}>
            <LocationOutlinedIcon />
        </div>
        <div className='header-option'>
            <div className='header-option1'>Hello</div>
            <div className='header-option2'>Select Your Address</div>    
        </div>
        <div className='search'>
            <select>
                <option>All</option>
            </select>
            <input type="text" className='searchInput'/>
            <SearchIcon className='searchIcon'/>
        </div>
        <div className='header-nav'>
            <Link to="/login" className='header-link'>
                <div onClick={handleAuth} className='header-option'>
                    <div className='header-option1'>Hello {`${user ? user.email : 'Guest'}`}</div>
                    <div className='header-option2'>{`${user ? 'Sign Out' : 'Sign In'}`}</div>    
                </div>
            </Link>
            <Link to="/orders" className='header-link'>
                <div className='header-option'>
                    <div className='header-option1'>Returns</div>
                    <div className='header-option2'>& Orders</div>    
                </div>
            </Link>
            <Link to="/login" className='header-link'>
                <div className='header-option'>
                    <div className='header-option1'>Your</div>
                    <div className='header-option2'>Prime</div>    
                </div>
            </Link>
            <Link to="/checkout" className='header-link'>
                <div className='header-basket'>
                    <ShoppingCartOutlinedIcon />
                    <span className='header-option2 basket-count'>{basket && basket.length}</span>    
                </div>
            </Link>
        </div>
    </nav>
  )
}

export default Header