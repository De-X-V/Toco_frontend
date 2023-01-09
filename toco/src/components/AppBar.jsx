import Link from "next/link";

import styled from "styled-components";
import Image from "next/image";

import Logo from "../../public/logo3.png";
import Profile from "../../public/profile.png";
import unconnect from "../../public/unconnect.png";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useEffect } from "react";
import { useState } from "react";

import { useRecoilState } from "recoil";
import { userAtom } from "../recoil/recoilUserState";

function AppBar() {
  const { address, isConnected } = useAccount();
  const [userAddress, setUserAddress] = useRecoilState(userAtom);
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  const [walletConnect, setWalletConnect] = useState(false);

  useEffect(() => {
    setWalletConnect(isConnected);
    setUserAddress(address);
  }, [walletConnect, isConnected]);

  return (
    <Wrap>
      <Link href="/">
        <StyledLogo>
          <Image src={Logo} />
        </StyledLogo>
      </Link>
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
        <Link
          href="https://toco-p0t6di8p0-toco-minting-page.vercel.app/"
          passHref
        >
          <StyledA target="_blank" rel="noopener noreferrer">
            NFT
          </StyledA>
        </Link>
        <Link href="/MyPage">
          <StyledLink>mypage</StyledLink>
        </Link>
      </StyledLinkBox>
      {!walletConnect ? (
        <>
          <StyledProfile onClick={() => connect()}>
            <Image src={unconnect} width="40px" height="40px" />
          </StyledProfile>
        </>
      ) : (
        <>
          <StyledProfile2 onClick={() => disconnect()}>
            <Image src={Profile} width="40px" height="40px" />
          </StyledProfile2>
        </>
      )}
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
const StyledProfile2 = styled.div`
  background-color: green;
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

const StyledLink = styled.div`
  /* Body/Medium */

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;

  margin-right: 32px;
`;

const StyledA = styled.a`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;

  margin-right: 32px;
`;
