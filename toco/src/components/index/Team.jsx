import React from "react";
import TeamCard from "./TeamCard";
import Image from "next/image";
import ProjectDes from "../../../public/projectdes.png";
import styled from "styled-components";
import Jiho from "../../../public/jiho.png";
import Jisun from "../../../public/jisun.png";
import Ilgwang from "../../../public/ilgwang.png";
import Eunchan from "../../../public/eunchan.png";

function Team() {
  return (
    <Wrap>
      <StyledTitle>팀 소개</StyledTitle>
      <StyledInt>투코 운영진을 소개합니다.</StyledInt>
      <TeamWrap>
        <TeamCard img={Jisun} name="배지선" job="Smart Contract Developer" />
        <TeamCard img={Ilgwang} name="이일광" job="Product Manager" />
        <TeamCard img={Jiho} name="이지호" job="Front-End Developer" />
        <TeamCard img={Eunchan} name="고은찬" job="NFT Developer" />
      </TeamWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1345px;
  margin-top: 120px;
`;
const StyledTitle = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 58px;
  /* identical to box height */

  text-align: center;
`;
const StyledInt = styled.div`
  margin-top: 8px;
  margin-bottom: 88px;
  /* Body/Medium */

  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  text-align: center;
`;

const TeamWrap = styled.div`
  display: flex;
  width: 1345px;
  justify-content: center;
  align-items: center;
`;

export default Team;
