import React from "react";
import Image from "next/image";
import styled from "styled-components";

import Logo from "../../../public/logo.png";
import FundCard from "../fund/FundCard";

export default function MyChangeFund() {
  return (
    <Wrap>
      <Title>나의 잔돈 펀딩 목록</Title>
      <CardWrapper>
        <FundCard />
        <FundCard />
        <FundCard />
      </CardWrapper>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 116px;
`;

const Title = styled.div`
  margin-top: 64px;
  margin-bottom: 51px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 140% */

  letter-spacing: 0.1px;

  /* neutral/black */

  color: white;
`;

const CardWrapper = styled.div`
  width: 410px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
`;
