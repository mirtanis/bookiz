import React from "react";
import styled from "styled-components";
import { BsQuestionCircle } from "react-icons/bs";

function HelpButton() {
  return (
    <div>
      <Help>
        <BsQuestionCircle className="helpicon" size={50} />
      </Help>
    </div>
  );
}

export default HelpButton;

const Help = styled.div`
  margin-right: 20px;
  .helpicon {
    background-color: white;
    border-radius: 50%;
    &:hover {
      cursor: pointer;
    }
  }
`;
