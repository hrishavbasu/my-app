
import React from "react";
import Link from "next/link";
import {
  Home,
  MessageCircle,
  User,
  Rss,
  Menu,
  X,
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Header ({ isMenuOpen, toggleMenu }){
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="p-4 shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">MyCollections</h1>
          <div className="hidden md:flex items-center space-x-6 cursor-pointer">
            <Link href="/" className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link href="/chat" className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
              <MessageCircle size={20} />
              <span>Chat</span>
            </Link>
            <Link href="/feed" className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
              <Rss size={20} />
              <span>Feed</span>
            </Link>
            <Link href="/profile" className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
              <User size={20} />
              <span>Profile</span>
            </Link>
            <ThemeToggle/>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="fixed inset-y-0 left-0 w-64 bg-white p-6 transition-all duration-300 ease-in-out transform translate-x-0">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="space-y-4">
              <Link href="/" className="block py-2 hover:text-blue-500 transition-colors">
                Home
              </Link>
              <Link href="/chat" className="block py-2 hover:text-blue-500 transition-colors">
                Chat
              </Link>
              <Link href="/profile" className="block py-2 hover:text-blue-500 transition-colors">
                Profile
              </Link>
              <Link href="/feed" className="block py-2 hover:text-blue-500 transition-colors">
                Feed
              </Link>
            </nav>
            <ThemeToggle/>
          </div>
        </div>
      )}
    </>
  );
};

