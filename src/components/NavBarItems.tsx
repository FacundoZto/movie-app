'use client'

import Link from "next/link"
import { useSearchParams } from "next/navigation"

const NavBarItem = ({title, param}: {title: string, param: string}) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link 
      href={`/?genre=${param}`} 
      className={`hover:text-teal-500 ${genre === param ? "underline underline-offset-8 decoration-4 decoration-teal-500 rounded-lg transition-colors duration-200" : ""}`}>
        {title}
      </Link>
    </div>
  )
}

export default NavBarItem