import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrap>
      <StyledDiv>Copyright2023ToCo</StyledDiv>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 3px solid transparent;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 0px;

  background-image: linear-gradient(black, black),
    linear-gradient(100.6deg, #d16ba5 0%, #86a8e7 50.89%, #5ffbf1 97.7%);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;
const StyledDiv = styled.div`
  justify-content: center;
  align-items: center;

  /* Body/Small */

  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 150%;
`;

export default Footer;
