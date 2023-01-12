import React from "react";
import styled from "styled-components";
import FundCard from "../fund/FundCard";
import { firestore } from "../../api/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getDday } from "../../hooks/getDday";
function PennyFundList() {
  // 이따가 users 추가하고 삭제하는거 진행을 도와줄 state
  const [users, setUsers] = useState([]);

  // db의 users 컬렉션을 가져옴
  const usersCollectionRef = collection(firestore, "changeFunding");

  // 시작될때 한번만 실행

  useEffect(() => {
    // 비동기로 데이터 받을준비
    const getUsers = async () => {
      // getDocs로 컬렉션안에 데이터 가져오기
      const data = await getDocs(usersCollectionRef);
      // users에 data안의 자료 추가. 객체에 id 덮어씌우는거
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
    console.log(users);
  }, []);

  return (
    <Wrap>
      <Title>전체 잔돈 펀딩</Title>
      <CardList>
        {users.map((card) => (
          <CardWrap>
            <FundCard
              imgSrc={card.c_funding_images}
              title={card.c_funding_title}
              id={card.c_funding_id}
              linkId={"changeFund"}
              date={getDday(card.c_funding_end_date)}
              amount={card.c_funding_target_amont}
              status={card.c_funding_status}
              tags1={card.c_funding_tags1}
              tags2={card.c_funding_tags2}
              tags3={card.c_funding_tags3}
            />
          </CardWrap>
        ))}
      </CardList>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin: 87px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 46px;
  align-items: flex-start;
  margin-bottom: 35px;
`;
const CardList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 24px 16px;
`;
const CardWrap = styled.div`
  margin: 15px;
`;

export default PennyFundList;
