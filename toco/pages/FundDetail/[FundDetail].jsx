import styled from "styled-components";
import React from "react";
import FundDes from "../../src/components/fundDetail/FundDes";
import DonateCard from "../../src/components/fundDetail/DonateCard";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";

function FundDetail() {
  const router = useRouter();
  const [cardLink, setCardLink] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setCardLink(router.query.FundDetail);
    if (typeof cardLink == "string") {
      setOpen(true);
      console.log(typeof cardLink);
    }
  }, [cardLink]);
  return (
    <Wrap>
      <>
        <FundDes></FundDes>
        <DonateCard></DonateCard>
      </>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;

  justify-content: center;
  margin-top: 100px;
`;

export default FundDetail;
