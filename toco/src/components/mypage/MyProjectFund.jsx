import React from "react";
import Image from "next/image";
import styled from "styled-components";

import Logo from "../../../public/logo.png";
import FundCard from "../fund/FundCard";
import { getDday } from "../../hooks/getDday";
import { useEffect } from "react";

export default function MyProjectFund({ data }) {
  return (
    <Wrap>
      <Title>나의 프로젝트 펀딩 목록</Title>
      <CardWrapper>
        {data.map((card, i) => (
          <FundCard
            key={i}
            imgSrc={card.p_funding_images}
            title={card.p_funding_title}
            id={card.p_funding_id}
            linkId={card.id}
            date={getDday(card.p_funding_end_date)}
            amount={card.p_funding_target_amont}
            status={card.p_funding_status}
            tags1={card.p_funding_tags1}
            tags2={card.p_funding_tags2}
            tags3={card.p_funding_tags3}
          />
        ))}
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
