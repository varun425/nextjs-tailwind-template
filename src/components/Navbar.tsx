import Image from "next/image";
import {
  FaHome,
  FaPlusCircle,
  FaUserFriends,
  FaBell,
  FaEnvelope,
  FaUser,
  FaSearch,
  FaCog,
  FaQuestionCircle
} from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="bg-white p-3 flex items-center justify-between shadow-lg">
        <div>
          <Image src="/ve-logo.png" alt="ve" width={150} height={80} />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-4 flex-1 justify-center">
          <div className="relative flex items-center">
            <FaSearch className="absolute left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="p-2 pl-10 rounded-full bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 w-64"
            />
          </div>

          <div className="flex space-x-4 text-gray-700 text-xl">
            <FaHome
              title="Home"
              className="cursor-pointer text-blue-500 hover:text-blue-700 transition-colors"
            />
            <FaPlusCircle
              title="Add to Story"
              className="cursor-pointer text-green-500 hover:text-green-700 transition-colors"
            />
            <FaUserFriends
              title="Friend Requests"
              className="cursor-pointer text-yellow-500 hover:text-yellow-700 transition-colors"
            />
          </div>
        </div>

        {/* Desktop Right Nav */}
        <div className="flex items-center space-x-4 text-gray-700 text-xl">
          <FaBell
            title="Notifications"
            className="cursor-pointer text-purple-500 hover:text-purple-700 transition-colors"
          />
          <FaEnvelope
            title="Messages"
            className="cursor-pointer text-red-500 hover:text-red-700 transition-colors"
          />
          <FaUser
            title="Profile"
            className="cursor-pointer text-teal-500 hover:text-teal-700 transition-colors"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden p-2 text-xl text-gray-700"
        >
          {isSidebarOpen ? "X" : "☰"}
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 md:hidden z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
        onClick={() => setIsSidebarOpen(false)}
      >
        <div
          className={`bg-white w-64 h-full p-4 transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300`}
        >
          {/* Search bar inside Sidebar */}
          <div className="relative flex items-center mb-6">
            <FaSearch className="absolute left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="p-2 pl-10 rounded-full bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
            />
          </div>

          {/* Sidebar Navigation Links */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-3 text-xl text-gray-700 cursor-pointer">
              <FaHome className="text-blue-500 hover:text-blue-700 transition-colors" />
              <span>Home</span>
            </div>
            <div className="flex items-center space-x-3 text-xl text-gray-700 cursor-pointer">
              <FaPlusCircle className="text-green-500 hover:text-green-700 transition-colors" />
              <span>Add to Story</span>
            </div>
            <div className="flex items-center space-x-3 text-xl text-gray-700 cursor-pointer">
              <FaUserFriends className="text-yellow-500 hover:text-yellow-700 transition-colors" />
              <span>Friend Requests</span>
            </div>
            <div className="flex items-center space-x-3 text-xl text-gray-700 cursor-pointer">
              <FaBell className="text-purple-500 hover:text-purple-700 transition-colors" />
              <span>Notifications</span>
            </div>
            <div className="flex items-center space-x-3 text-xl text-gray-700 cursor-pointer">
              <FaEnvelope className="text-red-500 hover:text-red-700 transition-colors" />
              <span>Messages</span>
            </div>
            <div className="flex items-center space-x-3 text-xl text-gray-700 cursor-pointer">
              <FaUser className="text-teal-500 hover:text-teal-700 transition-colors" />
              <span>Profile</span>
            </div>

            {/* Additional Pages */}
            <div className="flex items-center space-x-3 text-xl text-gray-700 cursor-pointer">
              <FaCog className="text-gray-500 hover:text-gray-700 transition-colors" />
              <span>Settings</span>
            </div>
            <div className="flex items-center space-x-3 text-xl text-gray-700 cursor-pointer">
              <FaQuestionCircle className="text-gray-500 hover:text-gray-700 transition-colors" />
              <span>Help</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
