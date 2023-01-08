import styled from "styled-components";
import React from "react";
import FundDes from "../../src/components/fundDetail/FundDes";
import DonateCard from "../../src/components/fundDetail/DonateCard";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { firestore } from "../../src/api/firebase";
import { getPfundingContract } from "../../src/hooks/getPfundingContract";

function FundDetail() {
  const [open, setOpen] = useState(false);
  const fundingSort = "projectFunding";

  const router = useRouter();
  const result = router.query.FundDetail;

  const [cardLink, setCardLink] = useState();
  const [cards, setCards] = useState([]);
  const [contract, setContact] = useState();

  const getContract = async (pFundingAddress) => {
    return await getPfundingContract(pFundingAddress);
  };

  useEffect(() => {
    setCardLink(result);

    if (!router.isReady) return;

    const docRef = firestore.collection(fundingSort).doc(cardLink);
    docRef.get().then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        console.log(data);
        setCards(data);
        console.log(cards);
        getContract(data.p_funding_ca).then((data) => setContact(data));
      } else {
        console.log("No such document!");
      }
    });
  }, [router.isReady, cardLink]);

  return (
    <Wrap>
      <>
        <FundDes fundingSort={fundingSort} cards={cards}></FundDes>
        <DonateCard cards={cards} contract={contract}></DonateCard>
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
