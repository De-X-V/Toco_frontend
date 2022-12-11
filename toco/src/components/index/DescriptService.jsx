import React from "react";
import styled from "styled-components";
import Image from "next/image";
import useScrollFadeIn from "../../../src/hooks/useScrollFadeIn";
import project1 from "../../../public/Project/project1.png";
import project2 from "../../../public/Project/project2.png";
import project3 from "../../../public/Project/project3.png";
export default function DescriptService() {
  return (
    <Wrap>
      <StyledTitle>ToCo 프로젝트 소개</StyledTitle>
      <Images>
        <LeftImages>
          <Image src={project1} width="680px" height="387px" alt="banner" />
          <Image src={project2} alt="banner" />
        </LeftImages>
        <RightImages>
          <Image src={project3} width="442px" height="847px" alt="banner" />
        </RightImages>
      </Images>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1345px;
`;
const Images = styled.div`
  display: flex;
`;
const LeftImages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 76px;
`;
const RightImages = styled.div``;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 97px;
  /* [웹] 페이지 제목 */

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 58px;
  /* identical to box height */

  text-align: center;

  /* Muted Color */

  color: white;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
