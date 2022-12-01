import React from "react";
import styled from "styled-components";
import FundCard from "../fund/FundCard";

function ProjectFundList() {
  return (
    <Wrap>
      <Title>전체 프로젝트 펀딩</Title>
      <CardList>
        <CardWrap>
          <FundCard />
        </CardWrap>
        <CardWrap>
          <FundCard />
        </CardWrap>{" "}
        <CardWrap>
          <FundCard />
        </CardWrap>{" "}
        <CardWrap>
          <FundCard />
        </CardWrap>
      </CardList>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin-top: 87px;
`;
const Title = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 46px;
  align-items: flex-start;
  margin-bottom: 35px;
`;
const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 24px 16px;
`;
const CardWrap = styled.div`
  margin: 15px;
`;
export default ProjectFundList;
