import { React, useState, useEffect } from "react";
import Image from "next/image";
import kimchi from "../../../public/ProjectImg/kimchi.png";
import styled from "styled-components";

import { firestore } from "../../api/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
function FundDes() {
  const [users, setUsers] = useState([]);

  // db의 users 컬렉션을 가져옴
  const usersCollectionRef = collection(firestore, "projectFunding");

  const router = useRouter();
  const [cardLink, setCardLink] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setCardLink(router.query.FundDetail);
    if (typeof cardLink == "string") {
      setOpen(true);
      console.log(typeof cardLink);
      console.log(cardLink);

      const docRef = firestore.collection("projectFunding").doc(cardLink);
      docRef.get().then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          console.log(data);
        } else {
          console.log("No such document!");
        }
      });
    }
  }, [cardLink]);

  /*
  useEffect(() => {
    if (open) {
      console.log(cardLink);

      const docRef = firestore.collection("projectFunding").doc(cardLink);
      docRef.get().then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          console.log(data);
        } else {
          console.log("No such document!");
        }
      });
    }
  }, [cardLink]);
  */

  return (
    <Wrap>
      <Image
        src={kimchi}
        layout="fixed"
        width={750}
        height={480}
        alt="banner"
      />
      <DesTitle>기부 기획 의도</DesTitle>
      <DesBox>
        치아가 없고, 궁핍한 생활을 하는 독거노인들은 라면을 주식으로 삼습니다.
        변변한 반찬 없이 먹는 하루 세 봉지의 라면 한국인의 소울푸드인 김치라도
        상에 올려드리려고 합니다. 1포기당 3만원으로 책정돼, 팀 내에서 10만원을
        추가로 기부 70포기의 김치를 독거노인 분들께 기부하고자 합니다. 업체는
        커뮤니티 내 투표 결과, (주)갓김치만세를 통해 진행될 예정이며, 기부
        대상자는 투표 결과에 따라 서울 신정동, 행복주택에 거주하시는
        독거노인분들을 대상으로 합니다.
      </DesBox>
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
