import React from "react";
import styled from "styled-components";
function DonateCard() {
  return (
    <Wrap>
      <CardWrap>
        <div>독거 어르신에게 김치 기부하기</div>
        <div>목표 모금액</div>
      </CardWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CardWrap = styled.div`
  width: 450px;
  height: 482px;

  /* Primary Color */

  background: #83859c;
  border-radius: 10px;
`;
export default DonateCard;
