import { Link, NavLink, Outlet } from "react-router-dom";

import { IoLogoInstagram } from "react-icons/io5";
import { RiFacebookCircleLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";

import "./navigation.css";
import "../../index.css";

export default function Navigation() {
  return (
    <>
      <nav className="nav-wrapper">
        <Link to="/">
          <img src="/LOGO-03.png" width={200} />
        </Link>
        <div className="nav-sns-btn-area">
          <Link>
            <IoHomeOutline />
          </Link>
          <Link>
            <IoLogoInstagram />
          </Link>
          <Link>
            <RiFacebookCircleLine />
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
