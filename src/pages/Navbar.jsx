export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md sticky top-0 bg-white ">
     
      <img src="logo.png" className="w-8 h-8"/>
      
      <ul className="flex gap-6">
        <li><a href="#about" className="hover:text-[#32a4c3]">About</a></li>
        <li><a href="#projects" className="hover:text-[#32a4c3]">Projects</a></li>
        <li><a href="#contact" className="hover:text-[#32a4c3]">Contact</a></li>
      </ul>
    </nav>
  );
}
