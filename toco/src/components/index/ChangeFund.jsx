import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../../src/hooks/useScrollFadeIn";
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";
import FundCard from "../fund/FundCard";
import { useRef, useEffect } from "react";

export default function ChangeFund() {
  const scrollRef = useHorizontalScroll();
  return (
    <Wrap>
      <Title>잔돈 펀딩</Title>
      <ContainerWrap>
        <StyledDiv>
          <Container ref={scrollRef}>
            <FundCard />
            <FundCard />
            <FundCard />
            <FundCard />
            <FundCard />
            <FundCard />
            <FundCard />
            <FundCard />
          </Container>
        </StyledDiv>
      </ContainerWrap>
    </Wrap>
  );
}
const Wrap = styled.div`
  margin-top: 120px;

  width: 1345px;
`;
const ContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 46px;
  background: linear-gradient(
    to top,
    #d16ba5 2.88%,
    #86a8e7 52.04%,
    #5ffbf1 97.27%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  align-items: flex-start;
`;

const StyledDiv = styled.div`
  margin-top: 40px;
  display: flex;
  height: 460px;
  width: 1090px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Container = styled.div`
  //가로스크롤
  display: flex;
  gap: 16px;
  height: 350px;
  overflow: hidden;
  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
  }
  .react-horizontal-scrolling-menu--scroll-container {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;
