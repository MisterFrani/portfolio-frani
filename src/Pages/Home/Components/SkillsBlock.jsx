import styled from "styled-components";
import CardComponent from "../../../Components/Card/CardComponent";
import { skillsData } from "../../../Data";

function SkillsBlock() {
  return (
    <SkillsSection>
      <div className="heading">
        <h2>Skills</h2>
      </div>
      <div className="skills-content">
        {skillsData.skills.map((skill, index) => (
          <CardComponent
            key={index}
            icon={skill.icon}
            color={skill.color}
            name={skill.name}
          />
        ))}
      </div>
    </SkillsSection>
  );
}

const SkillsSection = styled.section`
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

export default SkillsBlock;
