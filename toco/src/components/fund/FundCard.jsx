import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/logo.png";

export default function FundCard() {
  return (
    <Link href="/FundDetail">
      <StyledCard>
        <Image src={Logo} width="350px" height="160px" />
        <StyledDday>D-100</StyledDday>
        <StyledDesWrap>
          <StyledFundDes>
            <StyledProjectName>프로젝트 펀딩 이름</StyledProjectName>
            <StyledRange>
              <StyledDate>모금 종료일 </StyledDate>
              <StyledAmount> 목표 모금액</StyledAmount>
            </StyledRange>
          </StyledFundDes>
          <StyledTag>
            <Tag>tag1</Tag>
            <Tag>tag2</Tag>
          </StyledTag>
        </StyledDesWrap>
      </StyledCard>
    </Link>
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
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  display: flex;
  align-items: center;

  /* neutral/gray */

  color: #83859c;
  margin-top: 8px;
  margin-left: 16px;
`;

const StyledDate = styled.div``;
const StyledAmount = styled.div``;
const StyledFundDes = styled.div`
  position: absolute;
  top: 180px;
`;

const StyledTag = styled.div`
  position: absolute;
  top: 240px;
  margin-left: 16px;
  display: flex;
  color: black;
`;
const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
  width: 54px;
  height: 24px;
  border: 3px solid transparent;

  background-image: linear-gradient(white, white),
    linear-gradient(100.6deg, #d16ba5 0%, #86a8e7 50.89%, #5ffbf1 97.7%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-radius: 16px 16px 16px 16px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
`;

const StyledProjectName = styled.div`
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

  margin-left: 16px;
`;
