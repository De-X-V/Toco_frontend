import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";

import Logo from "../../public/logo3.png";
import Profile from "../../public/profile.png";
function AppBar() {
  const router = useRouter();
  return (
    <Wrap>
      <StyledLogo>
        <Image src={Logo} />
      </StyledLogo>
      <StyledLinkBox>
        <Link href="/">
          <StyledLink>TOcO</StyledLink>
        </Link>
        <Link href="/ProjectFund">
          <StyledLink>프로젝트 펀딩</StyledLink>
        </Link>
        <Link href="/PennyFund">
          <StyledLink>잔돈펀딩</StyledLink>
        </Link>
        <Link href="/About">
          <StyledLink>About</StyledLink>
        </Link>
        <Link href="/MyPage">
          <StyledLink>mypage</StyledLink>
        </Link>
      </StyledLinkBox>
      <StyledProfile>
        <Image src={Profile} width="40px" height="40px" />
      </StyledProfile>
    </Wrap>
  );
}

export default AppBar;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  width: 100%;
  height: 75px;
`;
const StyledLogo = styled.div`
  margin-left: 40px;
`;
const StyledProfile = styled.div`
  background-color: #ffd05a;
  border-radius: 20px;
  margin-right: 40px;
`;

const StyledLinkBox = styled.div`
  width: 487px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled.a`
  /* Body/Medium */

  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  margin-right: 32px;
`;
