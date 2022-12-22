import React from "react";
import styled from "styled-components";
import FundCard from "../fund/FundCard";

import { useEffect, useState } from "react";
import { firestore } from "../../api/firebase";
import { collection, getDocs } from "firebase/firestore";
import CardAPI from "../../api/cardApi";
import Image from "next/image";
function ProjectFundList() {
  // 이따가 users 추가하고 삭제하는거 진행을 도와줄 state
  const [users, setUsers] = useState([]);

  // db의 users 컬렉션을 가져옴
  const usersCollectionRef = collection(firestore, "projectFunding");

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
      <Title>전체 프로젝트 펀딩</Title>
      <CardList>
        {users.map((card) => (
          <div key={card.id}>
            <div>{card.p_funding_details}/</div>
          </div>
        ))}
        <CardWrap>
          <FundCard />
        </CardWrap>
        <CardWrap>
          <FundCard />
        </CardWrap>{" "}
        <CardWrap>
          <FundCard />
        </CardWrap>{" "}
        <CardWrap>
          <FundCard />
        </CardWrap>
      </CardList>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin-top: 87px;
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
  flex-wrap: wrap;
  padding: 24px 16px;
`;
const CardWrap = styled.div`
  margin: 15px;
`;
export default ProjectFundList;
