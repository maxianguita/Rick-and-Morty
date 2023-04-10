import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import './Nav.css';


 const Nav = ({ onSearch }) => {
     return ( 
        <div class="header">
            
         <nav className="titulo">
             <Link to='/' style={{color:"white"}} >Logout </Link>
            <Link to='/about'style={{color:"white"}} >About</Link>
            <Link to='/home'style={{color:"white"}} >Home</Link>
            <Link to='/favorites'style={{color:"white"}} >Favorites</Link>
            
             <SearchBar onSearch={onSearch} />
         </nav>
         </div>
         
    )

 }

export default Nav;