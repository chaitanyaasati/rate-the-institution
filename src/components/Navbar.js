import React from "react";
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { useStateValue } from "../StateProvider";

const Navbar = () => {

    const [{user}, dispatch] = useStateValue();

    const checkMe = () => {
        console.log("I am clicked");
    }

    function stringToColor(string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.substr(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }

    function stringAvatar(name="Anonymous User") {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
      }
    
    return (
        <div className="nav">
            <img 
            className="nav__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
            <div className="nav__search">
                <input className="nav__search__text" type="text"/>
                <SearchIcon className="nav__search__submit nav__search__submit_bg" onClick={checkMe}/>
            </div>
            <div className="nav__menu">
                <Avatar {...stringAvatar(user)} />
            </div>
        </div>
    )
}

export default Navbar;