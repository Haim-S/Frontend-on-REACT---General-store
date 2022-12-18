import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { LinkStyle, ShowCartStyle, CountShopingCartStyle } from './NavbarStyle';
import { Link } from 'react-router-dom';
import { navbarLinks } from '../../../constant/navbarLinks';
import { UseContextControllers } from '../../../context/contextController';
import "./Navbar.css"


const Navbar = () => {

  const cart = UseContextControllers().cart;

  return (
    <nav>
       <div className='container-login'>
        
<LinkStyle>Support</LinkStyle>
<LinkStyle>Rgister</LinkStyle>
<LinkStyle>Login</LinkStyle>
        </div> 
<from>
    <div className='container-search'>
        {/* <img style={{width: "50px", marginRight: "40px"}} src='https://i.pinimg.com/originals/b3/cc/d5/b3ccd57b054a73af1a0d281265b54ec8.jpg'/> */}
    <button><MenuIcon/></button>
    <input/>
    <button><SearchIcon/></button>
    <div className='ShoppingCart'>
      
    <CountShopingCartStyle>{cart.length}</CountShopingCartStyle>
    
    <Link to={"/cart"}>
    <ShowCartStyle>
    {""}
    </ShowCartStyle>
    <ShoppingCartOutlinedIcon style={{cursor: "pointer", marginTop: "13px"}}/>
    </Link>
    </div>
    
    </div>
<div className='container-btn'>
  {navbarLinks.map((link, index) => (
<LinkStyle to={link.paht} key={index}>{link.label}</LinkStyle>
))}
</div>
</from>
    </nav>
  )
}

export default Navbar