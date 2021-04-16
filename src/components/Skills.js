import Skillitem from "./SkillItem";

const Skills = () => {
   return (  
      <section className="bg-white px-6 py-12 font-light">
         <h2 className="heading">Skills</h2>
         <ul className="grid grid-cols-2 justify-items-center gap-2">
            <Skillitem name="HTML5" iconType="fab fa-html5" />
            <Skillitem name="CSS3" iconType="fab fa-css3-alt" />
            <Skillitem name="Sass" iconType="fab fa-sass" />
            <Skillitem name="JavaScript" iconType="fab fa-js" />
            <Skillitem name="React.js" iconType="fab fa-react" />
            <Skillitem name="Node.js / Express" iconType="fab fa-node" />
            <Skillitem name="MongoDB / Express" iconType="fas fa-database" />
            <Skillitem name="Git & Github" iconType="fab fa-github-square" />
         </ul>
      </section>
   );
};

export default Skills;