import { Link } from "react-router-dom";
import "./Navbar.scss";
import { MdOutlineArchitecture } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="container">
      <Link to="/" className="logo">
        <MdOutlineArchitecture className="title_icon" />
        rchiBees
      </Link>
      <ul className="menu_list">
        <Link to="/about">About</Link>
        <Link to="/archive">Archive</Link>
        <Link to="/news">News</Link>
        <Link to="/publication">Publication</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
