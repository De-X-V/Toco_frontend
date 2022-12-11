import styled from "styled-components";
import React from "react";
import FundDes from "../src/components/fundDetail/FundDes";
import DonateCard from "../src/components/fundDetail/DonateCard";

function FundDetail() {
  return (
    <Wrap>
      <FundDes></FundDes>
      <DonateCard></DonateCard>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;

  justify-content: center;
  margin-top: 100px;
`;

export default FundDetail;
