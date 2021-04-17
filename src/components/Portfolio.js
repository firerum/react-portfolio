import Project from "./Project";

const Portfolio = () => {
   return (  
      <section id="portfolio" className="sect bg-primary">
         <h2 className="heading">Portfolio</h2>
         <Project
            src="./images/IP-tracker-compressed.jpg"
            alt="ip address tracker"
            title="IP Address Tracker"
            desc="html, css, javascript, rest API"
            linkA="https://firerum.github/IP-Address-Tracker"
            linkB="https://firerum.github.io/IP-Address-Tracker"
         />
         <Project
            src="./images/country.png"
            alt="countries"
            title="Country Details"
            desc="html, css, javascript, rest API"
            linkA="https://firerum.github/Maven-Country"
            linkB="https://firerum.github.io/Maven-Country"
         />
         <Project
            src="./images/todo-app-min.png"
            alt="todo app"
            title="Todo App"
            desc="html, css, javascript"
            linkA="https://firerum.github/NewTodoApp"
            linkB="https://firerum.github.io/NewTodoApp"
         />
         <Project
            src="./images/blog-min-compressed.jpg"
            alt="blog"
            title="Blog App"
            desc="node.js, express, javascript, mongodb"
            linkA="https://firerum.github/blog"
            linkB="https://blogmin.herokuapp.com"
         />
         <Project
            src="./images/url-shortener.png"
            alt="url shortener"
            title="URL shortener"
            desc="html, css, javascript, API"
            linkA="https://firerum.github/URL-Shortener"
            linkB="https://firerum.github.io/URL-Shortener"
         />
      </section>
   );
};
 
export default Portfolio;