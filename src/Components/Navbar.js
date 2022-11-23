import React ,{useState}from 'react'
import '../Assests/Style.css'
import logo from '../Assests/logo.jpg'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Link } from 'react-router-dom';
function Navbar() {
    const [isActive, setIsActive] = useState(false);

  return (
   <>
      <section id="header">
       <Link to="/"><img src={logo} className="logo"/></Link>  
       <div>
        <ul id="navbar" className={isActive ? "active":" "}>
            <li><Link to="/"  className="">Home</Link></li>
            <li><Link to="/clothes" className="">Clothes</Link></li>
            <li><Link to="/electronics" className="">Electronics</Link></li>
            <li><Link to="/furniture" className="">Furniture</Link></li>
            <li><Link to="/shoes" className="">Shoes</Link></li>
            <li id="lg-bag"><Link to="/cart"><ShoppingBagOutlinedIcon/></Link></li>
            <Link to="/" id="close" ><CloseOutlinedIcon onClick={()=>{setIsActive(false)}} /></Link>
        </ul>
       </div>
       <div id="mobile">
           <Link to="/cart" style={{margin:10}}><ShoppingBagOutlinedIcon/></Link>
           <MenuOpenOutlinedIcon style={{margin:10}} onClick={()=>{setIsActive(true)}}/>
       </div>
    </section></>
  )
}

export default Navbar