const MediaLinks = ({ displayType, space }) => {
   return (
      <div>
         <ul className={displayType}>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li className={space}><a href="#"><i className="fab fa-github"></i></a></li>
            <li className={space}><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li className={space}><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
         </ul>
      </div>
   );
};

export default MediaLinks;