import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Stories = ({ stories }) => {
  const containerRef = useRef(null); // To reference the scrollable container

  const [visibleStories, setVisibleStories] = useState(stories.slice(0, 5)); // Limit to first 5 stories

  const handleScroll = () => {
    const container = containerRef.current;

    // Check if scrolled near the end (with some buffer to load smoothly)
    if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10) {
      const nextStories = stories.slice(visibleStories.length, visibleStories.length + 5);

      if (nextStories.length > 0) {
        setVisibleStories((prevStories) => [...prevStories, ...nextStories]);
      }
    }
  };

  // Function to scroll container manually
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  // Fallback image if no image provided
  const getImageSrc = (src) => {
    return src ? src : 'storydummy.png'; // Replace with a fallback image URL if needed
  };

  return (
    <div className="relative">
      {/* Scroll buttons */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10"
        aria-label="Scroll Left"
      >
        <FaChevronLeft />
      </button>

      <div
        ref={containerRef}
        className="flex space-x-4 p-4 overflow-x-auto scrollbar-hidden"
        onScroll={handleScroll}
        style={{
          overflowX: 'scroll',
          overflowY: 'hidden',
          scrollbarWidth: 'none', // For Firefox
          msOverflowStyle: 'none', // For IE
        }}
      >
        {/* Hide scrollbar (works for Webkit-based browsers) */}
        <style>
          {`
            .scrollbar-hidden::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {/* Add story for the first slot */}
        <div
          className="relative w-32 h-48 bg-gradient-to-tl from-green-400 to-blue-400 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
        >
          <div className="absolute top-2 left-2 w-10 h-10 bg-white rounded-full border-4 border-yellow-500 flex items-center justify-center">
            <span className="text-xl text-yellow-500 font-bold">+</span>
          </div>
          <div className="absolute bottom-2 left-2 text-white font-bold text-sm">
            Add Your Story
          </div>
        </div>

        {/* Display user stories */}
        {visibleStories.map((story, index) => (
          <div
            key={index}
            className="relative w-32 h-48 bg-gradient-to-tl from-purple-500 to-blue-500 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            {/* Profile Picture Circle */}
            <div className="absolute top-2 left-2 w-10 h-10 bg-white rounded-full border-4 border-yellow-500 overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-full"
                src={getImageSrc(story.image)}
                alt={`Story by ${story.username}`}
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-2 left-2 text-white font-bold text-sm">
              {story.username}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Right Button */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10"
        aria-label="Scroll Right"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

// Memoize the component to avoid unnecessary re-renders
const MemoizedStories = React.memo(Stories);

// Main App component
export default function App() {
  const [stories, setStories] = useState([
    { username: 'User 1', image: 'storydummy.png' },
    { username: 'User 2', image: 'storydummy.png' },
    { username: 'User 3', image: 'storydummy.png' },
    { username: 'User 4', image: 'storydummy.png' },
    { username: 'User 5', image: 'storydummy.png' },
    { username: 'User 6', image: 'storydummy.png' },
    { username: 'User 7', image: 'storydummy.png' },
    { username: 'User 8', image: 'storydummy.png' },
    { username: 'User 9', image: 'storydummy.png' },
    { username: 'User 10', image: 'storydummy.png' },
  ]);

  return (
    <div className="App">
      <MemoizedStories stories={stories} />
    </div>
  );
}
