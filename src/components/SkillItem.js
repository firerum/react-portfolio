const SkillItem = ({ iconType, name }) => {
   return (  
      <li className="grid grid-rows-2 justify-items-center bg-primary                 ustify-items-center py-2 shadow w-full">
         <span><i className={`${iconType} text-2xl mb-1`} aria-hidden="true"></i></span>
         <span>{name}</span>
      </li>
   );
};
 
export default SkillItem;