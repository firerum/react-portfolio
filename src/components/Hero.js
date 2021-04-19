import MediaLinks from "./MediaLinks";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

const Hero = () => {
   // initial menu state
   const [ menu, setMenu ] = useState(false);
   const [ hamburger, setHamburger ] = useState(true);

   // toggle between show and hide menu
   const handleMenu = (e) => {
      setMenu(!menu);
   };

   const hideHamburger = () => {
      if(window.innerWidth <= 640) {
         setHamburger(true);
      } else {
         setHamburger(false);
         setMenu(true);
      }
   };

   useEffect(() => {
      hideHamburger();
   }, []);

   window.addEventListener("resize", hideHamburger);


   return (
      <div className="hero h-0.7 relative">
         <div className="flex justify-between items-center fixed left-0 right-0 z-10 bg-darkbg py-2 px-6 shadow-md">
            <h1 className="text-2xl sm:text-3xl"><a href="/" className="font-bold capitalize text-gold">codesader</a></h1>
            {hamburger && <div className="cursor-pointer text-white" onClick={handleMenu}>
               <i className={ menu ? "fas fa-times" : "fas fa-bars"}></i>
            </div>}
            {menu && <NavBar setMenu={setMenu} />}
         </div>
         
         <div className="absolute right-5 top-1/2 transform -translate-y-1/2 sm:fixed sm:left-4 sm:w-1/4 sm:top-96 sm:z-20 sm:text-lg sm:flex sm:justify-center sm:ml-2">
            <MediaLinks displayType="grid grid-cols-1 gap-6 sm:flex"/>
         </div>
         <div className="banner-text px-6 py-20 absolute top-1/2 transform -translate-y-1/2 sm:fixed sm:hidden">
            <p className="text-2xl">Hello,<br/><span className="text-lg inline-block font-bold text-4xl my-4">Adewuyi,</span><br/> Software Developer </p>
            <div className="mt-9 capitalize">
               <a href="#" className="border-2 px-2 py-1 font-light">download CV</a>
               <a href="mailto:ademuyiwaadewuyi@gmail.com" className="border-2 px-2 py-1 ml-1 font-light">Contact Me</a>
            </div>
         </div>
      </div>
   );
};

export default Hero;