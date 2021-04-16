import MediaLinks from "./MediaLinks";

const Footer = () => {
   return (  
      <footer className="items-center bg-darkbg text-white text-center px-6 py-8">
         <h2 className="text-2xl font-bold mb-4 text-gold">Codesader</h2>
         <p className="mb-4"><a href="#">Terms & Condition</a></p>
         <div className="flex justify-center mb-4">
            <MediaLinks displayType="flex" space="ml-4"/>
         </div>
         <p className="font-light text-sm">Copyright &copy;2021 Codesader. All Rights Reserved!</p>
      </footer>
   );
};
 
export default Footer;