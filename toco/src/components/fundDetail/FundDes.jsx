import { React, useState, useEffect } from "react";
import Image from "next/image";
import kimchi from "../../../public/ProjectImg/kimchi.png";
import styled from "styled-components";

import { firestore } from "../../api/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
function FundDes({ fundingSort, cards }) {
  /*
  const router = useRouter();
  const result = router.query.FundDetail;

  const [cardLink, setCardLink] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    console.log(result);
    setCardLink(result);
    console.log(typeof cardLink);
    console.log(router.isReady);
    if (!router.isReady) return;
    console.log(typeof cardLink);
    console.log(cardLink);

    const docRef = firestore.collection(fundingSort).doc(cardLink);
    docRef.get().then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        console.log(data);
        setCards(data);
        console.log(cards);
      } else {
        console.log("No such document!");
      }
    });
  }, [router.isReady, cardLink]);
  */

  return (
    <Wrap>
      <Image
        src={cards.p_funding_images}
        layout="fixed"
        width={750}
        height={480}
        alt="banner"
      />
      <DesTitle>기부 기획 의도</DesTitle>
      <DesBox>{cards.p_funding_content}</DesBox>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const DesTitle = styled.div`
  width: 746px;
  height: 35px;
  margin-top: 24px;

  /* [웹] 소제목 */

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 35px;
`;
const DesBox = styled.div`
  width: 746px;
  margin-top: 24px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
`;
export default FundDes;
