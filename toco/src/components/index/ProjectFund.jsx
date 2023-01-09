import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../../src/hooks/useScrollFadeIn";
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";
import FundCard from "../fund/FundCard";
import { useRef, useEffect, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Kimchi from "../../../public/ProjectImg/kimchi.png";
import Room from "../../../public/ProjectImg/room.png";
import Food from "../../../public/ProjectImg/food.png";
import { getDday } from "../../hooks/getDday";

import { firestore } from "../../api/firebase";
import { collection, getDocs } from "firebase/firestore";
export default function ProjectFund() {
  const scrollRef = useHorizontalScroll();

  //1111

  const handleClick = () => {
    const container = scrollRef.current;
    container.scrollBy({ left: 350, behavior: "smooth" });
  };
  const handleClick2 = () => {
    const container = scrollRef.current;
    container.scrollBy({ left: -350, behavior: "smooth" });
  };

  /*
  const getDday = (end) => {
    const endDate = new Date(end);
    //Thu Dec 22 2022 16:26:45 GMT+0900 (한국 표준시)
    const today = new Date(); //Thu Dec 22 2022 16:27:51 GMT+0900 (한국 표준시)
    const diff = end * 1000 - today.getTime();
    const d = Math.round(diff / 86400000);
    console.log(end, endDate, today);
    return d;
  };
  */

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
      <Title>프로젝트 펀딩</Title>
      <ContainerWrap>
        <StyledDiv>
          <LeftButton onClick={handleClick2}>&lt;</LeftButton>
          <Container ref={scrollRef}>
            {users.map((card) => (
              <FundCard
                imgSrc={card.p_funding_images}
                title={card.p_funding_title}
                id={card.p_funding_id}
                linkId={card.id}
                date={getDday(card.p_funding_end_date)}
                amount={card.p_funding_target_amont}
                status={card.p_funding_status}
                tags1={card.p_funding_tags1}
                tags2={card.p_funding_tags2}
                tags3={card.p_funding_tags3}
              />
            ))}
          </Container>
          <RightButton onClick={handleClick}>&gt;</RightButton>
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
`;

const StyledDiv = styled.div`
  position: relative;
  margin-top: 40px;
  display: flex;
  height: 460px;
  width: 1090px;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  //가로스크롤
  display: flex;
  gap: 16px;
  height: 350px;
  overflow: hidden;
  touch-action: pan-x;
`;

const LeftButton = styled.button`
  position: absolute;
  top: 200px;
  left: 10px;
  padding: 10px 10px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #444;
  }
  transition: background-color 0.2s ease-in-out;
  z-index: 5;
`;

const RightButton = styled.button`
  position: absolute;
  top: 200px;
  right: 10px;
  padding: 10px 10px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #444;
  }
  transition: background-color 0.2s ease-in-out;
  z-index: 5;
`;
