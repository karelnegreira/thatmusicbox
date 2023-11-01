"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({children, className}) => {
    
    const router = useRouter();
    
    const handleLogout = () => {
        //to implement later
    }

  return (
    <div className={twMerge(`h-fit bg-gradient-to-b from-slate-800 p-6`)}>

    </div>
  )
}

export default Header