const About = () => {
   return ( 
      <article id="about" className="bg-aboutbg sect text-center flex-col items-center justify-center">
         <h2 className="heading">About Me</h2>
         <img src="./images/hooded-unsplash.jpg" alt="adewuyi" class="w-full mb-8" />
         <div className="font-light">
            <span className="font-semibold inline-block text-xl mb-6">Full Stack Developer</span>
            <p className="mb-6"> I am passionate about bringing the technical, as well as aesthetic visual facets of
            digital products to life. As a passionate web developer, I care deeply about optimum
            user experience, accessibility, beautiful designs, and writing clean code that is not
            only machine understandable, but human readable.</p>
            <p className="mb-6">I use the MERN (MongoDB, Express, React, Node) stack to bring projects to life.</p>
            <p>When I am not coding, I try to keep up with the latest research on behavioural science and human psychology.</p>
         </div>
      </article>
   );
};
 
export default About;