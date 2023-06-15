import styled from "styled-components";
import ProjectCardComponent from "./ProjectCardComponent";
import { projectsData } from "../../../Data";

function ProjectsBlock() {
  return (
    <ProjectsSection className="my-reveal-effect" id="projects">
      <div className="heading">
        <h2>Projects</h2>
      </div>
      <div className="skills-content">
        {projectsData.projects.map((project, index) => (
          <ProjectCardComponent key={index} project={project} />
        ))}
      </div>
    </ProjectsSection>
  );
}

const ProjectsSection = styled.section`
  padding-inline: 20px;
  margin-top: 87px;
  .heading {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .heading h2 {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .skills-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 80px;
    gap: 20px;

    @media (max-width: 460px) {
      margin-top: 40px;
    }
  }
`;

export default ProjectsBlock;
