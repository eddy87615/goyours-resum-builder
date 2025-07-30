import { Link, NavLink, Outlet } from "react-router-dom";

import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";

import "./navigation.css";
import "../../index.css";

export default function Navigation() {
  return (
    <>
      <nav className="nav-wrapper">
        <Link to="/">
          <img src="/LOGO-03.png" width={100} />
        </Link>
        <div className="nav-sns-btn-area">
          <Link to="https://www.goyours.tw/" target="_blank">
            <AiOutlineHome />
          </Link>
          <Link to="https://www.instagram.com/goyoursjp/" target="_blank">
            <FaInstagram />
          </Link>
          <Link to="https://www.facebook.com/goyoursjp/" target="_blank">
            <RiFacebookCircleLine />
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
