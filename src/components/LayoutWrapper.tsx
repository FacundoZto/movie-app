'use client';

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import SearchBox from "@/components/SearchBox";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const loginPage = pathname === "/login" || pathname === "/register";

  return (
    <>
      <Header/>
      {!loginPage && <NavBar/>}
      {!loginPage && <SearchBox/>}
      {children}
    </>
  );

};

export default LayoutWrapper;