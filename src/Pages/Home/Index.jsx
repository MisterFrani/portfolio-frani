import HeroBlock from "./Components/HeroBlock";
import SkillsBlock from "./Components/SkillsBlock";
import ProjectsBlock from "./Components/ProjectsBlock";
import Footer from "./../../Layout/Footer/Footer";
import { useEffect } from "react";

const home = () => {
  useEffect(() => {
    document.title = "Frani Bizi - Développeur front-end";

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Come back to My Website!";
      } else {
        document.title = "Frani Bizi - Développeur front-end";
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <HeroBlock />
      <SkillsBlock />
      <ProjectsBlock />
      <Footer />
    </>
  );
};
export default home;
