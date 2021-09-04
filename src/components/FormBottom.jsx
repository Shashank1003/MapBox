import React from "react";
import styled from "styled-components";

const NoAccount = styled.p`
  font-weight: 400;
  color: gray;
  font-size: 0.9rem;
  margin-bottom: 0rem;

  span {
    font-weight: 700;
    color: rgb(80, 32, 80);
    cursor: pointer;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

function FormBottom(props) {
  return (
    <NoAccount>
      {props.line} <span onClick={props.onClick}>{props.action}</span>
    </NoAccount>
  );
}

export default FormBottom;
