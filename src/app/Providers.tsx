'use client'
import { ThemeProvider } from "next-themes"

const Providers = ({children}: {children: React.ReactNode}) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class" enableSystem>
      <div 
      className="text-gray-700 dark:text-gray-300 dark:bg-zinc-800 min-h-screen select-none transition-colors duration-500">
        {children}
      </div>
    </ThemeProvider>
  )
}

export default Providers