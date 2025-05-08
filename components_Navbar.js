export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-xl font-bold">Crypto</h1>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
          <li><a href="/login" className="text-gray-300 hover:text-white">Log In</a></li>
        </ul>
      </div>
    </nav>
  );
}