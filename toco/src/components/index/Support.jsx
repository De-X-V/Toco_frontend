import React from "react";
import styled from "styled-components";
import Link from "next/link";
function Support() {
  return (
    <Wrap>
      <StyledTitle>투코 프로젝트에 후원 해주세요</StyledTitle>
      <Link
        href={{
          pathname: `/FundDetail/z_adminFunding`,
        }}
      >
        <StyledButton>후원하기</StyledButton>
      </Link>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 120px;

  align-items: center;
`;
const StyledTitle = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 58px;
  /* identical to box height */

  text-align: center;
`;
const StyledButton = styled.button`
  margin-top: 116px;
  margin-bottom: 67px;
  /* Secondary Color */
  width: 161px;
  height: 66px;
  background: linear-gradient(
    90deg,
    #d16ba5 2.88%,
    #86a8e7 52.04%,
    #5ffbf1 97.27%
  );
  border-radius: 8px;

  /* Body/Large */

  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 35px;

  color: #f7f7f7;
`;

export default Support;
