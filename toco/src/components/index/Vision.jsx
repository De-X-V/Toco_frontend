import React from "react";
import styled from "styled-components";

import vision1 from "../../../public/Vision/vision1.png";
import vision2 from "../../../public/Vision/vision2.png";
import vision3 from "../../../public/Vision/vision3.png";
import vision4 from "../../../public/Vision/vision4.png";
import vision5 from "../../../public/Vision/vision5.png";
import Image from "next/image";

export default function Vision() {
  return (
    <Wrap>
      <StyledTitle>TOcO 프로젝트 VISION</StyledTitle>

      <StyledDesWrap>
        <StyledDes>
          <Image src={vision1} margin-left="40px" alt="banner" />
          <SmallTitle>
            100% <br />
            신뢰할 수 있는 기부
          </SmallTitle>
        </StyledDes>
        <StyledDes>
          <Image src={vision2} margin-left="40px" alt="banner" />
          <SmallTitle>
            기부 생태계의 <br />
            혁신
          </SmallTitle>
        </StyledDes>
        <StyledDes>
          <Image src={vision3} margin-left="40px" alt="banner" />
          <SmallTitle>
            사회적 불평등 <br />
            해소
          </SmallTitle>
        </StyledDes>
        <StyledDes>
          <Image src={vision4} margin-left="40px" alt="banner" />
          <SmallTitle>
            블록체인 기술의
            <br /> 진보
          </SmallTitle>
        </StyledDes>
        <StyledDes>
          <Image src={vision5} margin-left="40px" alt="banner" />
          <SmallTitle>
            이해관계자들 간의
            <br /> 행복 선순환
          </SmallTitle>
        </StyledDes>
      </StyledDesWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
`;
const StyledDesWrap = styled.div`
  display: flex;
`;
const StyledDes = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SmallTitle = styled.div`
  margin-top: 30px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
`;
const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* [웹] 페이지 제목 */

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 58px;
  /* identical to box height */

  text-align: center;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 100px;
`;
