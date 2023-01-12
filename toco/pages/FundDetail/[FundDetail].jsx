import styled from "styled-components";
import React from "react";
import FundDes from "../../src/components/fundDetail/FundDes";
import DonateCard from "../../src/components/fundDetail/DonateCard";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { firestore } from "../../src/api/firebase";
import { getPfundingContract } from "../../src/hooks/getPfundingContract";
import { ethers } from "ethers";
import { getLastTime } from "../../src/hooks/getLastTime";
import { useAccount, useConnect, useDisconnect } from "wagmi";

function FundDetail() {
  const [open, setOpen] = useState(false);
  const fundingSort = "projectFunding";

  const router = useRouter();
  const result = router.query.FundDetail;

  const [cardLink, setCardLink] = useState();
  const [cards, setCards] = useState([]);
  const [contract, setContact] = useState();
  const [myValue, setMyValue] = useState();
  const [lastday, setLastDay] = useState();
  const [contractValue, setContractValue] = useState();
  const { address, isConnected } = useAccount();

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
        console.log(data.p_funding_end_date);
        console.log(getLastTime(data.p_funding_end_date));
        setLastDay(getLastTime(data.p_funding_end_date));

        getContract(data.p_funding_ca).then((data) => {
          setContact(data);

          data
            .getMyDonateAmount(address)

            .then((e) => {
              setMyValue(ethers.utils.formatEther(e));
              console.log(ethers.utils.formatEther(e), "hi");
            });

          data.getBalance().then((e) => {
            setContractValue(ethers.utils.formatEther(e));
            console.log(ethers.utils.formatEther(e), "hi");
          });
        });
      } else {
        console.log("No such document!");
      }
    });
  }, [router.isReady, cardLink]);
  if (result == "changeFund")
    return (
      <Wrap>
        <UnDevelop>추후 개발 예정입니다.</UnDevelop>
      </Wrap>
    );

  return (
    <Wrap>
      <>
        <FundDes fundingSort={fundingSort} cards={cards}></FundDes>
        <DonateCard
          cards={cards}
          contract={contract}
          myValue={myValue}
          lastday={lastday}
          contractValue={contractValue}
        ></DonateCard>
      </>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;

  justify-content: center;
  margin-top: 100px;
`;

const UnDevelop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 100px;
  margin-bottom: 100px;
`;

export default FundDetail;
