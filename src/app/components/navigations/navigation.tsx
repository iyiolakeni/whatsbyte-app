'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Add this navigation items array
const menuItems = [
  { 
    name: 'Dashboard', 
    href: '/', 
    icon: '/assets/dashboard.png',
    activeIcon: '/assets/dashboard-active.png'
  },
  { 
    name: 'Skill Test', 
    href: '/skill-test', 
    icon: '/assets/badgee.png',
    activeIcon: '/assets/activeBadge.png'
  },
  { 
    name: 'Internship', 
    href: '/internship', 
    icon: '/assets/file.png',
    activeIcon: '/assets/file_active.png'
  },
  // Add more items as needed
];

interface NavProps {
    className?: string;
}

export const Sidebar = ({ className }: NavProps) => {
    const pathname = usePathname();

    return (
        <aside className={`w-64 h-screen bg-white-500 ${className || ''}`}>
          <div className="bg-white-800 text-black h-screen p-6 flex flex-col space-y-4 border-r">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className={`flex items-center gap-2 font-medium hover:bg-gray-100 p-2 rounded-lg transition-colors ${
                    isActive ? 'bg-blue-50' : ''
                  }`}
                >
                  <Image 
                    src={isActive ? item.activeIcon : item.icon} 
                    alt={item.name} 
                    width={20} 
                    height={20}
                  />
                  <p className={`text-base font-bold ${
                    isActive ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {item.name}
                  </p>
                </Link>
              );
            })}
          </div>
        </aside>
    );
};
  
// Navbar Component
export const Navbar = ({ className }: NavProps) => {
  return (
    <nav className={`py-4 px-6 flex justify-between items-center bg-white-50 text-black border-b border-gray-200 ${className || ''}`}>
      <div className="font-bold text-lg flex gap-3 items-center">
          <Image src={"/assets/whatsbyte.jpg"} alt="" width={44} height={44} />
          <p className="text-3xl font-bold">
          WhatBytes
          </p>
          </div>
      {/* <div className="flex items-center space-x-4">
        <div>Rahil Siddique</div>
        <img src="/avatar.png" alt="Avatar" className="w-8 h-8 rounded-full" />
      </div> */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6 sm:py-4 border-2 rounded-[15px] px-2 m-0">
          <Image 
              className="mx-auto block rounded-full sm:mx-0 sm:shrink-0" 
              src={"/assets/profile.png"} 
              alt="" 
              width={30} 
              height={30} 
          />
          <div className="space-y-2 text-center sm:text-left">
              <p className="text-lg font-semibold text-black">Rahei Siddique</p>
          </div>
      </div>
    </nav>
  );
};
