import styled from "styled-components";

const changeColor = (color: string) => {
  if (color === "primary") {
    return `#BBBBBB;`;
  }

  if (color === "secondary") {
    return `#55CC55;`;
  }

  if (color === "tertiary") {
    return `#FFFF55;`;
  }
  if (color === "quaternary") {
    return `#FF5555;`;
  }

  if (color === "gray") {
    return `#CCCCCC;`;
  } else return `white;`;
};

const getBackGroundColor = (color: string) => {
  if (color === "backlog") {
    return `#FFFFFF;`;
  }

  if (color === "toDo") {
    return `#FFAAAA;`;
  }

  if (color === "doing") {
    return `#FFFF99;`;
  }
  if (color === "done") {
    return `#99FF99;`;
  } else return `white;`;
};

export const H3 = styled.h3`
  font-size: 16px;
  color: #5555ff;
  font-family: "roboto", sans-serif;
  margin: 0;
  padding: 0;
`;
export const CheckBox = styled.input`
  border: 1px solid green;
  beckground-color: blue;
  padding: 0;
  margin-top: 3px;
`;

export const P = styled.p`
  padding-left: 15px;
  font-size: 16px;
  font-family: "roboto", sans-serif;
  color: #777777;
  margin: 0;
  width: 100%;
  word-break: break-word;
`;

interface ContainerNotesProps {
  sequenceName: string;
}

export const ContainerNotes = styled.div<ContainerNotesProps>`
  background-color: ${(props) => getBackGroundColor(props.sequenceName)};
  border-radius: 5px;
  max-width: 350px;
  display: flex;
  flex-wrap: wrap;
`;

interface AProps {
  color: string;
  hoverColor?: boolean;
}

export const A = styled.a<AProps>`

    color: ${(props) => changeColor(props.color)};
    &:hover{
        cursor: pointer;
        color: ${(props) => (props.hoverColor ? "#5555FF" : "")};
    }
`;
