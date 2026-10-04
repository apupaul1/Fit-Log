import Link from "next/link";
import NavLinks from "./NavLinks";
import Stat from "./Stat";
import Logo from '../../assets/logo.png'
import Image from "next/image";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLinks href="/">Workouts</NavLinks>
      </li>
      <li>
        <NavLinks href="/my-plan">My Plan</NavLinks>
      </li>
    </>
  );

  return (
    <div className="border-b border-[#2D313B] opacity-95 lg:px-20 bg-black">
      <div className="navbar shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 space-y-3 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <h1>
            <Link href={'/'} className="font-bold text-xl tracking-wider inline-flex gap-1">
              <Image src={Logo} alt="logo"></Image>
              FITLOG</Link>
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center gap-3">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <Stat></Stat>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
