import { FaThumbsUp, FaComment, FaShare } from "react-icons/fa";

const NewsFeed = () => {
  // Sample data for posts
  const posts = [
    {
      id: 1,
      user: {
        name: "John Doe",
        profileImage: "/storydummy.png",
      },
      time: "2 hours ago",
      content: "This is my latest post! Loving the new features on this app.",
      likes: 25,
      comments: 5,
    },
    {
      id: 2,
      user: {
        name: "Jane Smith",
        profileImage: "/storydummy.png",
      },
      time: "5 hours ago",
      content: "Had a great day at the beach with friends!",
      likes: 48,
      comments: 12,
    },
    {
      id: 3,
      user: {
        name: "Alice Johnson",
        profileImage: "/storydummy.png",
      },
      time: "1 day ago",
      content: "Check out this amazing sunset I captured during my hike!",
      likes: 72,
      comments: 20,
    },
  ];

  return (
    <div className="space-y-6 max-w-2xl mx-auto mt-8">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-lg p-4">
          {/* Post Header */}
          <div className="flex items-center space-x-4">
            <img
              src={post.user.profileImage}
              alt="profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{post.user.name}</p>
              <p className="text-sm text-gray-500">{post.time}</p>
            </div>
          </div>

          {/* Post Content */}
          <div className="mt-4">
            <p className="text-gray-800">{post.content}</p>
          </div>

          {/* Post Footer (Action Buttons) */}
          <div className="flex items-center space-x-6 mt-4">
            <div className="flex items-center space-x-2 cursor-pointer">
              <FaThumbsUp className="text-gray-500 hover:text-blue-500" />
              <span className="text-sm text-gray-500">{post.likes} Likes</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <FaComment className="text-gray-500 hover:text-blue-500" />
              <span className="text-sm text-gray-500">{post.comments} Comments</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <FaShare className="text-gray-500 hover:text-blue-500" />
              <span className="text-sm text-gray-500">Share</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
