const MediaLinks = ({ displayType, space }) => {

   const hoverstyle = "transitions hover:text-red-600 hover:scale-105 transform";

   return (
      <div>
         <ul className={displayType}>
            <li className={hoverstyle}><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li className={`${space} ${hoverstyle}`}><a href="#"><i className="fab fa-github"></i></a></li>
            <li className={`${space} ${hoverstyle}`}><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li className={`${space} ${hoverstyle}`}><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
         </ul>
      </div>
   );
};

export default MediaLinks;