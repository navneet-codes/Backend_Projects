import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  const linkClass = ({ isActive }) =>
    isActive ? "text-purple-500 underline" : "text-white";

  return (
    <div className=" w-full h-20 px-10 text-2xl font-mono flex flex-row gap-10 items-center ">
      <NavLink to="/create-post" className={linkClass}>
        Create Post
      </NavLink>
      <NavLink to="/feed" className={linkClass}>
        Feed
      </NavLink>
    </div>
  );
};

export default Header;
