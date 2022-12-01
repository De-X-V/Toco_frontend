import React from "react";
import styled from "styled-components";
import Image from "next/image";

import Logo from "../../../public/logo.png";

export default function FundCard() {
  return (
    <StyledCard>
      <Image src={Logo} width="350px" height="160px" />
      <StyledDday>D-100</StyledDday>
      <StyledProjectName>프로젝트 펀딩 이름</StyledProjectName>
      <span>모금 종료일 </span>
      <span> 목표 모금액</span>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  width: 350px;
  height: 276px;
  background: #ffffff;
  border: 8px solid black;
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
  background: #6d9886;
  border-radius: 0px 16px;
`;

const StyledProjectName = styled.p`
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

  color: #2b2b43;

  margin-top: 16px;
  margin-left: 16px;
`;
