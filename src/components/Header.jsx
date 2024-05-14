import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="relative flex w-full h-20 top-0 left-0">
      <div className="absolute flex py-2 px-6 w-full">
        <div className="w-1/3 my-auto text-4xl font-logo text-white italic">
          JerseyKit
        </div>
        <nav className="flex justify-center items-center w-1/3 text-center space-x-8 text-white border-white">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "border-b" : "")}
          >
            {/* <img
              alt="tshirt"
              src="/img/soccer-jersey.png"
              width={35}
              height={35}
            /> */}
            FRONT
          </NavLink>
          {/* <FontAwesomeIcon icon={faEllipsis} className="w-4 text-gray-300" /> */}
          <NavLink
            to={"/uniformback"}
            className={({ isActive }) => (isActive ? "border-b" : "")}
          >
            {/* <img alt="short" src="/img/shorts.png" width={35} height={35} /> */}
            BACK
          </NavLink>
          {/* <FontAwesomeIcon icon={faEllipsis} className="w-4 text-gray-300" />
          <Link href={""}>
            <img alt="socks" src="/img/socks.png" width={35} height={35} />
          </Link> */}
        </nav>
        <div className="w-1/3 my-auto flex justify-end">
          <div className="rounded-full bg-gray-200 w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

export default Header;
