'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import {
  Home,
  MessageCircle,
  User,
  Rss,
  Menu,
  X,
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Header({ isMenuOpen, toggleMenu, openSignInModal }) {
  const pathname = usePathname();
  const [selected, setSelected] = useState(pathname);

  useEffect(() => {
    setSelected(pathname);
  }, [pathname]);

  const handleProfileClick = (e) => {
    e.preventDefault();
    openSignInModal();
    setSelected('/profile');
  };

  const NavLink = ({ href, icon: Icon, children, onClick }) => {
    const isSelected = selected === href;
    return (
      <Link 
        href={href} 
        className={`flex items-center space-x-1 hover:text-blue-500 transition-colors ${
          isSelected ? 'text-blue-500 font-bold' : ''
        }`}
        onClick={(e) => {
          if (onClick) {
            onClick(e);
          } else {
            setSelected(href);
          }
        }}
      >
        <Icon size={20} />
        <span>{children}</span>
      </Link>
    );
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="p-4 shadow-md sticky top-0 z-10 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">MyCollections</h1>
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="/" icon={Home}>Home</NavLink>
            <NavLink href="/chat" icon={MessageCircle}>Chat</NavLink>
            <NavLink href="/feed" icon={Rss}>Feed</NavLink>
            <NavLink href="/profile" icon={User} onClick={handleProfileClick}>Profile</NavLink>
            <ThemeToggle />
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 p-6 transition-all duration-300 ease-in-out transform translate-x-0">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="space-y-4">
              <NavLink href="/" icon={Home}>Home</NavLink>
              <NavLink href="/chat" icon={MessageCircle}>Chat</NavLink>
              <NavLink href="/feed" icon={Rss}>Feed</NavLink>
              <NavLink href="/profile" icon={User} onClick={handleProfileClick}>Profile</NavLink>
            </nav>
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </>
  );
}