import styled from "styled-components";

function CardComponent(props) {
  const { project } = props;

  return (
    <BoxCard color={project.color}>
      <div className="box-project">
        <p className="heading">{project.name}</p>
        <div className="project-image-container">
          <img src={project.img} alt={project.name} loading="lazy" />
        </div>
        <p className="limit-to-3-lines margin-block">{project.description}</p>
        <a href={project.demo} target="_blank" rel="noopener noreferrer">
          View project
        </a>
        <a href={project.git} target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </div>
    </BoxCard>
  );
}

const BoxCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  padding-bottom: 20px;
  user-select: none;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.color || "#ccc"};
    color: #fff;
  }
  .heading {
    display: flex;
    align-items: start !important;
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .box-project {
    max-width: 397px;
    padding: 20px;
  }
  .project-image-container {
    margin: auto;
    width: 240px;
    height: 240px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .margin-block {
    margin-top: 4px;
    margin-bottom: 34px;
  }
  .limit-to-3-lines {
    height: 69px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  a {
    margin-right: 12px;
    padding: 14px 16px;
    background-color: #2d2b2b;
    color: #fff;
    border: 1px solid #2d2b2b;
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #fff;
      color: #2d2b2b;
      border: 1px solid #2d2b2b;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }
`;

export default CardComponent;
