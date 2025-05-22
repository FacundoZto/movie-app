'use client'
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { MdHome, MdInfo, MdLogin, MdFavorite } from "react-icons/md";
import MenuItem from "./MenuItem";
import DarkMode from "./DarkMode";

const Header = () => {
  const { data: session, status } = useSession();

  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={MdHome} />
        <MenuItem title="about" address="/about" Icon={MdInfo} />
        <MenuItem title="favorites" address="/favorites" Icon={MdFavorite} />
        {
          status === 'authenticated' ?
            <button
              onClick={() => signOut()}
              className="hover:text-teal-500 uppercase font-medium hidden sm:inline text-sm pt-px"
            >
              Log out
            </button>
            :
            <MenuItem title="login" address="/login" Icon={MdLogin} />
        }
      </div>
      <div className="flex gap-5 items-center">
        <DarkMode />
        <Link href={"/"} className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-teal-500 py-1 px-3 rounded-lg text-white">IMDb</span>
          <span className="text-xl hidden sm:inline" >Movies</span>
        </Link>
      </div>
    </div>
  )
}

export default Header;