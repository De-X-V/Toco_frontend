import React from "react";
import Image from "next/image";

import styled from "styled-components";

function TeamCard({ img, name, job }) {
  return (
    <Wrap>
      <Image src={img} width="250px" />
      <Name>{name}</Name>
      <Job>{job}</Job>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin-right: 57px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Name = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;

  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`;
const Job = styled.div`
  /* Body/Large */

  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */
`;

export default TeamCard;
