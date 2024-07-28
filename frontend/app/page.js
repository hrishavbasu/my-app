"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Search,
  Settings,
} from "lucide-react";

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

const CollectionCard = ({ collection, index }) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const bgColors = [
    'bg-purple-200 dark:bg-purple-900',
    'bg-green-200 dark:bg-green-900',
    'bg-blue-200 dark:bg-blue-900',
    'bg-orange-200 dark:bg-orange-900',
    'bg-pink-200 dark:bg-pink-900'
  ];

  return (
    <div
      ref={ref}
      className={`p-4 rounded-xl transition-all duration-500 ease-out ${
        isIntersecting
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      } ${bgColors[index % 5]}`}
    >
      <h3 className="font-bold text-lg mb-2">{collection.name}</h3>
      <div className="flex flex-wrap justify-between items-center mb-2 space-y-2 sm:space-y-0">
        <span className="bg-white dark:bg-gray-700 px-2 py-1 rounded-full text-sm">
          {collection.level}
        </span>
        <span className="bg-white dark:bg-gray-700 px-2 py-1 rounded-full text-sm">
          {collection.words} words
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-bold">{collection.progress}% complete</span>
        <button className="bg-gray-800 dark:bg-gray-600 hover:bg-gray-700 dark:hover:bg-gray-500 text-white rounded-full p-2 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const CollectionDashboard = () => {
  const collections = [
    {
      name: "Social issues",
      level: "Pre-intermediate",
      words: 48,
      progress: 23,
    },
    { name: "Museum", level: "Intermediate", words: 26, progress: 78 },
    { name: "Daily life", level: "Elementary", words: 167, progress: 98 },
    { name: "Food", level: "Pre-intermediate", words: 96, progress: 100 },
    { name: "Music", level: "Intermediate", words: 52, progress: 92 },
  ];

  return (
    <div className="font-sans min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
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
            className="w-full py-2 px-4 bg-white dark:bg-gray-700 rounded-lg pl-10 pr-10 
               border border-gray-300 dark:border-gray-600 
               focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
               focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          <Settings
            className="absolute right-3 top-2.5 text-gray-400"
            size={20}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <CollectionCard
              key={index}
              collection={collection}
              index={index}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CollectionDashboard;


