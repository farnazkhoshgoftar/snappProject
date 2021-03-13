import React from 'react';
import { Link } from "react-router-dom";
import './menu.css'
const Menu=()=>{

    return(
        <ul className="navbarMenu">
              <li>
                <Link to="/blog">بلاگ</Link>
              </li>
              <li>
                <Link to=''>فرصت های شغلی</Link>
              </li>
              <li>
                <Link to=''>درباره ما</Link>
              </li>
              <li>
                <Link to=''>تماس با ما</Link>
              </li>
              <li>
                <Link to=''>پیوستن به ناوگان اسنپ</Link>
              </li>
              <li>
                <Link to=''>پنل سازمانی</Link>
                </li>
              <li className="line">
                <div></div>
              </li>
              <li>
                <Link to=''>باشگاه رانندگان</Link>
              </li>
            </ul>
    )
}
export default Menu;