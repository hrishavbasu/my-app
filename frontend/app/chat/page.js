'use client'
import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { Search, Settings, User, Globe, Menu, X, Send, MoreVertical, Phone, Video } from 'lucide-react';

const ChatListItem = ({ chat, isActive, onClick }) => {
  const { theme } = useTheme();
  return (
    <div 
      className={`flex items-center p-3 cursor-pointer ${
        isActive 
          ? theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
          : theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
      }`}
      onClick={onClick}
    >
      <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full mr-3" />
      <div className="flex-1">
        <h3 className="font-semibold">{chat.name}</h3>
        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} truncate`}>{chat.lastMessage}</p>
      </div>
      <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{chat.time}</span>
    </div>
  );
};

const ChatApp = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  const dummyChats = [
    { type: 'personal', name: 'Alex Wanderlust', avatar: '/api/placeholder/100/100', lastMessage: 'Hey, how was your trip to Bali?', time: '10:30 AM' },
    { type: 'personal', name: 'Emma Explorer', avatar: '/api/placeholder/100/100', lastMessage: 'The Inca Trail was amazing!', time: '9:45 AM' },
    { type: 'group', name: 'Backpacking Asia', avatar: '/api/placeholder/100/100', lastMessage: 'Max: Anyone in Bangkok next week?', time: 'Yesterday' },
    { type: 'group', name: 'Solo Female Travelers', avatar: '/api/placeholder/100/100', lastMessage: 'Sarah: Best hostels in Europe?', time: 'Yesterday' },
    { type: 'personal', name: 'Tom Foodie', avatar: '/api/placeholder/100/100', lastMessage: 'You have to try the street food in Hanoi!', time: 'Tuesday' },
    { type: 'group', name: 'Digital Nomads', avatar: '/api/placeholder/100/100', lastMessage: 'Lisa: Coworking space recommendations in Bali?', time: 'Monday' },
    { type: 'personal', name: 'Maya Adventurer', avatar: '/api/placeholder/100/100', lastMessage: 'Skydiving in New Zealand was insane!', time: 'Sunday' },
    { type: 'group', name: 'Budget Travel Tips', avatar: '/api/placeholder/100/100', lastMessage: 'John: How to find cheap flights?', time: '05/15/2023' },
    { type: 'personal', name: 'Liam Photographer', avatar: '/api/placeholder/100/100', lastMessage: 'Check out my shots from Santorini!', time: '05/10/2023' },
    { type: 'group', name: 'Sustainable Travel', avatar: '/api/placeholder/100/100', lastMessage: 'Eco-friendly accommodations in Costa Rica?', time: '05/05/2023' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className={`font-sans h-screen flex ${theme === 'dark' ? 'text-white bg-gray-900' : 'text-gray-900 bg-white'}`}>
      {/* Chat List Sidebar */}
      <div className={`w-full md:w-1/3 lg:w-1/4 ${isMobileMenuOpen ? 'block' : 'hidden md:block'} ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className={`flex justify-between items-center p-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
          <h1 className="text-xl font-bold flex items-center">
            <Globe className="mr-2" /> Chat
          </h1>
          <div className="flex items-center space-x-2">
            <button className="md:hidden" onClick={toggleMobileMenu}>
              <X size={24} />
            </button>
          </div>
        </div>
        <div className="p-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search or start new chat"
              className={`w-full p-2 pl-10 rounded-lg ${
                theme === 'dark' 
                  ? 'bg-gray-700 text-white placeholder-gray-400' 
                  : 'bg-white text-gray-900 placeholder-gray-500'
              }`}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>
        <div className="overflow-y-auto" style={{ height: 'calc(100vh - 120px)' }}>
          {dummyChats.map((chat, index) => (
            <ChatListItem
              key={index}
              chat={chat}
              isActive={selectedChat === index}
              onClick={() => setSelectedChat(index)}
            />
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className={`w-full md:w-2/3 lg:w-3/4 flex flex-col ${isMobileMenuOpen ? 'hidden md:flex' : 'flex'}`}>
        {selectedChat !== null ? (
          <>
            {/* Chat Header */}
            <div className={`flex justify-between items-center p-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-center">
                <button className="md:hidden mr-2" onClick={toggleMobileMenu}>
                  <Menu size={24} />
                </button>
                <img src={dummyChats[selectedChat].avatar} alt={dummyChats[selectedChat].name} className="w-10 h-10 rounded-full mr-3" />
                <h2 className="font-semibold">{dummyChats[selectedChat].name}</h2>
              </div>
              <div className="flex items-center space-x-4">
                <button><Video size={20} /></button>
                <button><Phone size={20} /></button>
                <button><Search size={20} /></button>
                <button><MoreVertical size={20} /></button>
              </div>
            </div>

            {/* Chat Messages Placeholder */}
            <div className="flex-1 overflow-y-auto p-4" style={{ backgroundImage: `url('/api/placeholder/1000/1000?text=Chat+Background')`, backgroundSize: 'cover' }}>
              <p className={`text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Chat messages will appear here. This is a placeholder.
              </p>
            </div>

            {/* Message Input */}
            <div className="p-4">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Type a message"
                  className={`flex-1 p-2 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-gray-700 text-white placeholder-gray-400' 
                      : 'bg-white text-gray-900 placeholder-gray-500'
                  }`}
                />
                <button className="ml-2 p-2 bg-green-500 text-white rounded-full">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatApp;