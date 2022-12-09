import React from "react";
import styled from "styled-components";
import Image from "next/image";

import Logo from "../../../public/logo.png";
import Profile from "../../../public/profile.png";

export default function Account() {
  return (
    <Wrap>
      <Title>My Page</Title>
      <AccountWrap>
        <StyledProfile>
          <Image src={Profile} width="70x" height="70px" />
        </StyledProfile>
        <StyledAccount>
          <div>Account 1</div>
          <StyledAccountCode>0x121213124141</StyledAccountCode>
        </StyledAccount>
      </AccountWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  margin-top: 56px;
  margin-bottom: 51px;
  /* [웹] 큰 제목 폰트 */

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 46px;

  /* Text Color */

  color: #ffffff;
`;
const AccountWrap = styled.div`
  display: flex;
  align-items: center;
`;
const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: #ffd05a;
  border-radius: 40px;
  margin-right: 40px;
`;
const StyledAccount = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.005em;

  /* Text Color */

  color: #ffffff;
`;
const StyledAccountCode = styled.div`
  /* Body/Body S */

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  text-align: center;
  letter-spacing: 0.01em;

  /* Neutral/Dark/Light */

  color: #71727a;
`;
