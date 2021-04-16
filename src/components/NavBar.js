const NavBar = ({ setMenu }) => {
   const handleClick = () => {
      if(window.innerWidth <= 640) {
         setMenu(false);
      } else {
         setMenu(true);
      }  
   };

   return (
      <nav className="absolute top-full bg-aboutbg w-3/4 capitalize font-semibold flex justify-center py-8 h-screen -ml-6 z-10 sm:fixed sm:left-0 sm:top-4 sm:w-1/4 sm:m-auto sm:bg-transparent">
         <ul className="w-full grid grid-cols-1 justify-items-center py-6 sm:content-start sm:gap-8">
            <li className="nav">
               <i className="fas fa-home"></i>
               <a href="#" onClick={handleClick}>home</a>
            </li>
            <li className="nav">
               <i className="fas fa-user"></i>
               <a href="#about" onClick={handleClick}>about</a>
            </li>
            <li className="nav">
               <i className="fas fa-chart-line"></i>
               <a href="#services" onClick={handleClick}>services</a>
            </li>
            <li className="nav">
               <i className="fas fa-folder-open"></i>
               <a href="#portfolio" onClick={handleClick}>portfolio</a>
            </li>
            <li className="nav">
               <i className="fas fa-address-book"></i>
               <a href="#contact" onClick={handleClick}>contact</a>
            </li>
         </ul>
      </nav>
   );
};

export default NavBar;