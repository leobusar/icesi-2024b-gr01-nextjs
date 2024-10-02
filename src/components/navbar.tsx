export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2  rounded">
        <a href="/home" className="p-2 m-2 text-white">Home</a>
        <div className="flex flex-1"></div>
        <a href="/about" className="p-2 m-2 text-white">About</a>
        <a href="/contact" className="p-2 m-2 text-white">Contact</a>
        <a href="/pricing" className="p-2 m-2 text-white">Pricing</a>

    </nav>
  );
};
