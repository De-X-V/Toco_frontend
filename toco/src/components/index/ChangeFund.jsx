import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../../src/hooks/useScrollFadeIn";
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";
import FundCard from "../fund/FundCard";
import { useRef, useState, useEffect } from "react";

import { firestore } from "../../api/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function ChangeFund() {
  const scrollRef = useHorizontalScroll();

  // 이따가 users 추가하고 삭제하는거 진행을 도와줄 state
  const [users, setUsers] = useState([]);

  // db의 users 컬렉션을 가져옴
  const usersCollectionRef = collection(firestore, "changeFunding");

  // 시작될때 한번만 실행
  const getDday = (end) => {
    const today = new Date().getTime() / 1000;

    const d = Math.round((end.seconds - today) / 86400);
    console.log(end.seconds, today, d);
    if (d < 0) {
      d = "+" + -d;
    } else {
      d = "-" + d;
    }
    return d;
  };

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
      <Title>잔돈 펀딩</Title>
      <ContainerWrap>
        <StyledDiv>
          <Container ref={scrollRef}>
            {users.map((card) => (
              <FundCard
                imgSrc={card.c_funding_images}
                title={card.c_funding_title}
                id={card.c_funding_id}
                date={getDday(card.c_funding_end_date)}
                amount={card.c_funding_target_amont}
                status={card.c_funding_status}
                tags1={card.c_funding_tags1}
                tags2={card.c_funding_tags2}
                tags3={card.c_funding_tags3}
              />
            ))}
          </Container>
        </StyledDiv>
      </ContainerWrap>
    </Wrap>
  );
}
const Wrap = styled.div`
  margin-top: 120px;

  width: 1345px;
`;
const ContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 46px;
  background: linear-gradient(
    to top,
    #d16ba5 2.88%,
    #86a8e7 52.04%,
    #5ffbf1 97.27%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  align-items: flex-start;
`;

const StyledDiv = styled.div`
  margin-top: 40px;
  display: flex;
  height: 460px;
  width: 1090px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Container = styled.div`
  //가로스크롤
  display: flex;
  gap: 16px;
  height: 350px;
  overflow: hidden;
  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
  }
  .react-horizontal-scrolling-menu--scroll-container {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;
