import React from "react";
import styled from "styled-components";
import Image from "next/image";

import Logo from "../../../public/logo.png";

export default function FundCard() {
  return (
    <StyledCard>
      <Image src={Logo} width="350px" height="160px" />
      <StyledDday>D-100</StyledDday>
      <StyledDesWrap>
        <StyledProjectName>프로젝트 펀딩 이름</StyledProjectName>
        <StyledRange>
          <div>모금 종료일 </div>
          <div> 목표 모금액</div>
        </StyledRange>
        <StyledTag>
          <div>tag1</div>
          <div>tag2</div>
        </StyledTag>
      </StyledDesWrap>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  width: 350px;
  height: 276px;
  background: black;

  border-radius: 16px;
  flex-shrink: 0;
  position: relative;
`;

const StyledDday = styled.p`
  width: 75px;
  height: 32px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0px;
  top: 0px;
  margin: 0;
  background: linear-gradient(
    100.6deg,
    #d16ba5 0%,
    #86a8e7 50.89%,
    #5ffbf1 97.7%
  );
  border-radius: 0px 16px;
`;
const StyledDesWrap = styled.div`
  height: 120px;
  border: 3px solid transparent;
  border-top: 0px;
  background-image: linear-gradient(#545563, #545563),
    linear-gradient(100.6deg, #d16ba5 0%, #86a8e7 50.89%, #5ffbf1 97.7%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-radius: 0px 0px 16px 16px;
`;
const StyledRange = styled.div`
  display: flex;
  color: black;
`;

const StyledTag = styled.div`
  display: flex;
  color: black;
`;

const StyledProjectName = styled.div`
  height: 24px;
  left: 0px;
  right: 32px;
  top: 0px;

  /* H6 - bold 18 (24, 0.1px) */

  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  letter-spacing: 0.1px;

  /* neutral/black */

  color: white;

  margin-top: 16px;
  margin-left: 16px;
`;
