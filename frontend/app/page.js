// 'use client'
// import React, { useState } from 'react';
// import { Search, Settings, User, Sun, Moon, Globe, Menu, X, Send, MoreVertical, Phone, Video } from 'lucide-react';
// const ChatListItem = ({ chat, isActive, onClick, isDarkMode }) => (
//   <div 
//     className={`flex items-center p-3 cursor-pointer ${isActive ? (isDarkMode ? 'bg-gray-700' : 'bg-gray-200') : (isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100')}`}
//     onClick={onClick}
//   >
//     <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full mr-3" />
//     <div className="flex-1">
//       <h3 className="font-semibold">{chat.name}</h3>
//       <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} truncate`}>{chat.lastMessage}</p>
//     </div>
//     <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{chat.time}</span>
//   </div>
// );

// const SoloTravelCommunityWhatsApp = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const dummyChats = [
//     { type: 'personal', name: 'Alex Wanderlust', avatar: '/api/placeholder/100/100', lastMessage: 'Hey, how was your trip to Bali?', time: '10:30 AM' },
//     { type: 'personal', name: 'Emma Explorer', avatar: '/api/placeholder/100/100', lastMessage: 'The Inca Trail was amazing!', time: '9:45 AM' },
//     { type: 'group', name: 'Backpacking Asia', avatar: '/api/placeholder/100/100', lastMessage: 'Max: Anyone in Bangkok next week?', time: 'Yesterday' },
//     { type: 'group', name: 'Solo Female Travelers', avatar: '/api/placeholder/100/100', lastMessage: 'Sarah: Best hostels in Europe?', time: 'Yesterday' },
//     { type: 'personal', name: 'Tom Foodie', avatar: '/api/placeholder/100/100', lastMessage: 'You have to try the street food in Hanoi!', time: 'Tuesday' },
//     { type: 'group', name: 'Digital Nomads', avatar: '/api/placeholder/100/100', lastMessage: 'Lisa: Coworking space recommendations in Bali?', time: 'Monday' },
//     { type: 'personal', name: 'Maya Adventurer', avatar: '/api/placeholder/100/100', lastMessage: 'Skydiving in New Zealand was insane!', time: 'Sunday' },
//     { type: 'group', name: 'Budget Travel Tips', avatar: '/api/placeholder/100/100', lastMessage: 'John: How to find cheap flights?', time: '05/15/2023' },
//     { type: 'personal', name: 'Liam Photographer', avatar: '/api/placeholder/100/100', lastMessage: 'Check out my shots from Santorini!', time: '05/10/2023' },
//     { type: 'group', name: 'Sustainable Travel', avatar: '/api/placeholder/100/100', lastMessage: 'Eco-friendly accommodations in Costa Rica?', time: '05/05/2023' },
//   ];

//   const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

//   return (
//     <div className={`font-sans h-screen flex ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
//       {/* Chat List Sidebar */}
//       <div className={`w-full md:w-1/3 lg:w-1/4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} ${isMobileMenuOpen ? 'block' : 'hidden md:block'}`}>
//         <div className="flex justify-between items-center p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}">
//           <h1 className="text-xl font-bold flex items-center">
//             <Globe className="mr-2" /> SoloTrek
//           </h1>
//           <div className="flex items-center space-x-2">
//             <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
//               {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//             <button className="md:hidden" onClick={toggleMobileMenu}>
//               <X size={24} />
//             </button>
//           </div>
//         </div>
//         <div className="p-2">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search or start new chat"
//               className={`w-full p-2 pl-10 rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
//             />
//             <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
//           </div>
//         </div>
//         <div className="overflow-y-auto" style={{ height: 'calc(100vh - 120px)' }}>
//           {dummyChats.map((chat, index) => (
//             <ChatListItem
//               key={index}
//               chat={chat}
//               isActive={selectedChat === index}
//               onClick={() => setSelectedChat(index)}
//               isDarkMode={isDarkMode}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Chat Area */}
//       <div className={`w-full md:w-2/3 lg:w-3/4 flex flex-col ${isMobileMenuOpen ? 'hidden md:flex' : 'flex'}`}>
//         {selectedChat !== null ? (
//           <>
//             {/* Chat Header */}
//             <div className={`flex justify-between items-center p-4 border-b ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}`}>
//               <div className="flex items-center">
//                 <button className="md:hidden mr-2" onClick={toggleMobileMenu}>
//                   <Menu size={24} />
//                 </button>
//                 <img src={dummyChats[selectedChat].avatar} alt={dummyChats[selectedChat].name} className="w-10 h-10 rounded-full mr-3" />
//                 <h2 className="font-semibold">{dummyChats[selectedChat].name}</h2>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <button><Video size={20} /></button>
//                 <button><Phone size={20} /></button>
//                 <button><Search size={20} /></button>
//                 <button><MoreVertical size={20} /></button>
//               </div>
//             </div>

//             {/* Chat Messages Placeholder */}
//             <div className="flex-1 overflow-y-auto p-4" style={{ backgroundImage: `url('/api/placeholder/1000/1000?text=Chat+Background')`, backgroundSize: 'cover' }}>
//               <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                 Chat messages will appear here. This is a placeholder.
//               </p>
//             </div>

//             {/* Message Input */}
//             <div className={`p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
//               <div className="flex items-center">
//                 <input
//                   type="text"
//                   placeholder="Type a message"
//                   className={`flex-1 p-2 rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
//                 />
//                 <button className="ml-2 p-2 bg-green-500 text-white rounded-full">
//                   <Send size={20} />
//                 </button>
//               </div>
//             </div>
//           </>
//         ) : (
//           <div className="flex-1 flex items-center justify-center">
//             <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Select a chat to start messaging</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SoloTravelCommunityWhatsApp;

'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Search, Settings, Home, MessageCircle, User, Sun, Moon, Rss, Menu, X } from 'lucide-react';

// Custom hook for Intersection Observer
const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};

const CollectionCard = ({ collection, index, isDarkMode }) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      className={`p-4 rounded-xl transition-all duration-500 ease-out ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${
        isDarkMode ? (
          index % 5 === 0 ? 'bg-purple-900' :
          index % 5 === 1 ? 'bg-green-900' :
          index % 5 === 2 ? 'bg-blue-900' :
          index % 5 === 3 ? 'bg-orange-900' :
          'bg-pink-900'
        ) : (
          index % 5 === 0 ? 'bg-purple-200' :
          index % 5 === 1 ? 'bg-green-200' :
          index % 5 === 2 ? 'bg-blue-200' :
          index % 5 === 3 ? 'bg-orange-200' :
          'bg-pink-200'
        )
      }`}
    >
      <h3 className="font-bold text-lg mb-2">{collection.name}</h3>
      <div className="flex flex-wrap justify-between items-center mb-2 space-y-2 sm:space-y-0">
        <span className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} px-2 py-1 rounded-full text-sm`}>
          {collection.level}
        </span>
        <span className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} px-2 py-1 rounded-full text-sm`}>
          {collection.words} words
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-bold">{collection.progress}% complete</span>
        <button className={`${isDarkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-800 hover:bg-gray-700'} text-white rounded-full p-2 transition-colors`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const CollectionDashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const collections = [
    { name: 'Social issues', level: 'Pre-intermediate', words: 48, progress: 23 },
    { name: 'Museum', level: 'Intermediate', words: 26, progress: 78 },
    { name: 'Daily life', level: 'Elementary', words: 167, progress: 98 },
    { name: 'Food', level: 'Pre-intermediate', words: 96, progress: 100 },
    { name: 'Music', level: 'Intermediate', words: 52, progress: 92 },
  ];

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={`font-sans min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Top Navigation Bar */}
      <nav className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-4 shadow-md sticky top-0 z-10`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">MyCollections</h1>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
              <Home size={20} />
              <span>Home</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
              <MessageCircle size={20} />
              <span>Chat</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
              <User size={20} />
              <span>Profile</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
              <Rss size={20} />
              <span>Feed</span>
            </a>
            <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <button onClick={toggleMenu} className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className={`fixed inset-y-0 left-0 w-64 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} p-6 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={toggleMenu} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <X size={24} />
              </button>
            </div>
            <nav className="space-y-4">
              <a href="#" className="block py-2 hover:text-blue-500 transition-colors">Home</a>
              <a href="#" className="block py-2 hover:text-blue-500 transition-colors">Chat</a>
              <a href="#" className="block py-2 hover:text-blue-500 transition-colors">Profile</a>
              <a href="#" className="block py-2 hover:text-blue-500 transition-colors">Feed</a>
            </nav>
            <button onClick={toggleDarkMode} className="mt-8 w-full py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-6xl mx-auto mt-8 p-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
          <h2 className="text-2xl md:text-3xl font-bold">My collections</h2>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
            + New Collection
          </button>
        </div>

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search collections"
            className={`w-full py-2 px-4 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg pl-10 pr-10`}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          <Settings className="absolute right-3 top-2.5 text-gray-400" size={20} />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <CollectionCard key={index} collection={collection} index={index} isDarkMode={isDarkMode} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CollectionDashboard;