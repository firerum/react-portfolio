const Project = ({ src, title, desc, linkA, linkB, alt }) => {
   return (  
      <div className="relative mb-8 hover:shadow-md transitions">
         <img src={src} alt={alt} loading="lazy" className="" />
         <div className="relative h-auto p-6 pb-4 bg-gray shadow rounded-b">
            <h4 className="font-semibold mb-2">{title}</h4>
            <p>{desc}</p>
            <div className="absolute top-0 right-0 bg-darkbg py-2 px-6">
               <a href={linkA} className="text-white"><i class="fab fa-github"></i></a>
               <a href={linkB} className="ml-4 text-white"><i class="fas fa-external-link-alt external"></i></a>
            </div>
         </div>
      </div>
   );
};
 
export default Project;