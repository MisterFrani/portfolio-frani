import styled from "styled-components";
import * as Icon from "react-icons/si";
import { IconContext } from "react-icons";

function CardComponent(props) {
  const IconComponent = Icon[`Si${props.icon ?? "React"}`];

  return (
    <BoxCard color={props.color}>
      <IconContext.Provider value={{ size: "40px" }}>
        {IconComponent && <IconComponent />}
      </IconContext.Provider>

      <p>{props.name}</p>
    </BoxCard>
  );
}

const BoxCard = styled.div`
  width: 136px;
  padding: 40px 10px;
  text-align: center;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.color};
  user-select: none;
  @media (max-width: 460px) {
    width: 160px;
  }
  @media (max-width: 376px) {
    width: 155px;
  }
`;

export default CardComponent;
