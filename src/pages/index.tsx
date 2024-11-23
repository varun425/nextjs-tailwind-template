import Navbar from "@/components/Navbar";
import Login from "./login";
import NewsFeed from "@/components/NewsFeed";
import Stories from "@/components/Story";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Login></Login> */}
      <Navbar />
      <div className="w-[60%] mx-auto">
        <Stories />
        <NewsFeed />
      </div>
    </div>
  );
};

export default Home;
