'use client'
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const DarkMode = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, []);

  return (
    <>
    {
      mounted && (
        resolvedTheme === 'light' ? 
        <MdOutlineDarkMode 
          onClick={() => setTheme('dark')}
          className="text-2xl cursor-pointer hover:text-yellow-500"
        /> :
        <MdOutlineLightMode 
          onClick={() => setTheme('light')}
          className="text-2xl cursor-pointer hover:text-yellow-500"
        />
      )
    }
    </>
  )
}

export default DarkMode