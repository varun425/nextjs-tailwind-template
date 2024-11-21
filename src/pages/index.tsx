import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold">Welcome to My Social App</h1>
        <p className="mt-4">This is a simple Next.js app with TypeScript and Tailwind CSS setup.</p>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2024 My Social App</p>
      </footer>
    </div>
  );
}

export default Home;
