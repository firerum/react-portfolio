const Services = () => {
   return (  
      <section id="services" className="font-light px-6 py-12 bg-primary">
         <h2 className="heading">Services</h2>
            <div className="card">
               <i className="fas fa-desktop text-4xl mb-4 text-red-600"></i>
               <h3 className="font-bold mb-4 capitalize text-xl">web development</h3>
               <p className="mb-6">There is no denying or getting around it, our lives have become digitally-driven, far more than we want or expect.</p>
               <p className="mb-6">This the reason web development has become an essential part of every individual, business or corporation seeking to reach a wide audience.</p>
               <p>To create and maintain the growth that your business or brand requires, web development is the key. I will help you create visibilty and awareness that cuts across all spheres of life, using the latest on-demand technologies.</p>
            </div>
            <div className="card">
               <i className="fas fa-shield-alt text-4xl mb-4 text-green-600"></i>
               <h3 className="font-bold mb-4 capitalize text-xl">web security</h3>
               <p className="mb-6">As a result of recent technology changes, it has become increasingly difficult for businesses, corporations and start-ups to keep sensitive data secure.</p>
               <p className="mb-6">This is why web security is critical to keeping crackers and cyber-criminals from exploiting and attacking sensitive user data.</p>
               <p className="mb-6">I implement this security tips to avoid the risk of web security attacks:</p>
               <ul className="list-disc pl-4 text-sm">
                  <li>Two-Factor Authentication</li>
                  <li>Using Secure Networks such as HTTPS</li>
                  <li>Sanitizing User Inputs</li>
                  <li>Client and Server-side Validation</li>
                  <li>Encrypting Sensitive User Data</li>
               </ul>
            </div>
            <div className="card">
               <i className="fas fa-layer-group text-4xl mb-4 text-blue-600"></i>
               <h3 className="font-bold mb-4 capitalize text-xl">web design</h3>
               <p className="mb-6">Every bit and part of your websites is considered greatly when designing. A well designed website / web application is a critical mainstay to a succesful brand. It impacts how audiences perceive your brands and which may help form an impression on prospective clients.</p>
               <p className="mb-6">While <span className="text-red-500 font-semibold">User Interface</span> helps you catch clients's attention, <span className="text-blue-500 font-semibold">User Experience</span> is what keeps them loyal to your brand. This is why I pay great attention into creating and crafting the optimal user experience.
               </p>
            </div>
      </section>
   );
};
 
export default Services;