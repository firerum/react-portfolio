const NavBar = ({ setMenu }) => {
   const handleClick = () => {
      setMenu(false);
   };

   return (
      <nav className="absolute top-full bg-aboutbg w-3/4 capitalize font-semibold flex justify-center py-8 h-screen -ml-6 z-10">
         <ul className="grid grid-cols-1 justify-items-center py-6">
            <li><a href="#" onClick={handleClick}>home</a></li>
            <li><a href="#about" onClick={handleClick}>about</a></li>
            <li><a href="#services" onClick={handleClick}>services</a></li>
            <li><a href="#portfolio" onClick={handleClick}>portfolio</a></li>
            <li><a href="#contact" onClick={handleClick}>contact</a></li>
         </ul>
      </nav>
   );
};

export default NavBar;