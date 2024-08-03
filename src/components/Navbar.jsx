import { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Context } from '../context/contextApi';
import Loader from '../shared/Loader';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHandler = (e) => {
    if ((e?.key === "Enter" || e === "searchButton") && (searchQuery?.length > 0)) {
      navigate(`/searchResult/${searchQuery}`);
    }
  }

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu)
  }

  const { pathName } = useLocation();
  const pageName = pathName?.split("/")?.filter(Boolean)?.[0];

  return (
    <div className='flex flex-row items-center justify-between sticky top-0 z-10 h-14 px-4 md:px-5 bg-white dark:bg-black'>
      {loading && <Loader />}

      <div className='flex h-5 items-center'>
        {pageName !== "video" && (
          <div
            className='flex md:hidden md:mr-4 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:[#303030]/[0.6]'
            onClick={mobileMenuToggle}>
            {mobileMenu ? (
              <CgClose className='text-white text-xl' />
            ) : (
              <SlMenu className='text-white text-xl' />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar