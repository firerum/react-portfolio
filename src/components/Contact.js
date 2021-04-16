import { useState } from "react";

const Contact = () => {
   // initial states
   const [ lastName, setLastName ] = useState("");
   const [ firstName, setFirstName ] = useState("");
   const [ email, setEmail ] = useState("");
   const [ message, setMessage ] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
   };

   return (  
      <section id="contact" className="font-light px-6 py-12 bg-white">
         <h2 className="heading">Contact</h2>
         <form onSubmit={handleSubmit}>
            <h3 className="font-semibold mb-6 text-center">Get in touch</h3>
            <div className="input-wrapper">
               <label htmlFor="lastname">Last Name:</label>
               <input
                  className="input" 
                  type="text" 
                  name="lastname" 
                  id="lastname"
                  placeholder="doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
               />
            </div>
            <div className="input-wrapper">
               <label htmlFor="firstname">First Name:</label>
               <input 
                  className="input"
                  type="text" 
                  name="firstname" 
                  id="firstname"
                  placeholder="john"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
               />
            </div>
            <div className="input-wrapper">
               <label htmlFor="email">Email:</label>
               <input 
                  className="input"
                  type="email" 
                  name="email" 
                  id="email"
                  placeholder="johndoe@yahoo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
               />
            </div>
            <div className="grid grid-cols-1">
               <label htmlFor="message" className="mb-4">Message:</label>
               <textarea
                  className="border-2 py-1 px-3" 
                  name="message" 
                  id="message" 
                  cols="30" 
                  rows="10" 
                  placeholder="message here.." 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required>
               </textarea>
            </div>
            <button type="submit" className="bg-darkbg w-full p-2 mt-4 text-white capitalize">send message</button>
         </form>
      </section>
   );
};
 
export default Contact;