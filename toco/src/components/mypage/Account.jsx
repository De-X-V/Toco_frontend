import React from "react";
import styled from "styled-components";
import Image from "next/image";

import Logo from "../../../public/logo.png";
import Profile from "../../../public/profile.png";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useEffect } from "react";
import { useState } from "react";

import { useRecoilState } from "recoil";
import { userAtom } from "../../recoil/recoilUserState";
import Web3 from "web3";

import { ContractABI } from "../../contracts/abi/cFunding.js"  assert{ type: "json"};
import { cFundingAddress } from "../../contracts/contract";

export default function Account() {
  const contractABI = [
    {
      inputs: [
        { internalType: "address", name: "_adminAddr", type: "address" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "admin",
      outputs: [
        { internalType: "contract Administrator", name: "", type: "address" },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [],
      name: "newFunding",
      outputs: [
        { internalType: "string", name: "fundingName", type: "string" },
        { internalType: "uint256", name: "targetAmount", type: "uint256" },
        { internalType: "uint256", name: "currentAmount", type: "uint256" },
        { internalType: "uint256", name: "fundingStartDate", type: "uint256" },
        { internalType: "uint256", name: "fundingEndDate", type: "uint256" },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [
        { internalType: "string", name: "_fundingName", type: "string" },
        { internalType: "uint256", name: "_targetAmount", type: "uint256" },
        { internalType: "uint256", name: "_fundingStartDate", type: "uint256" },
        { internalType: "uint256", name: "_fundingEndDate", type: "uint256" },
      ],
      name: "createFunding",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "getFunding",
      outputs: [
        {
          components: [
            { internalType: "string", name: "fundingName", type: "string" },
            { internalType: "uint256", name: "targetAmount", type: "uint256" },
            { internalType: "uint256", name: "currentAmount", type: "uint256" },
            {
              internalType: "uint256",
              name: "fundingStartDate",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "fundingEndDate",
              type: "uint256",
            },
          ],
          internalType: "struct ChangesFunding.funding",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [],
      name: "getBlockNumber",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [],
      name: "donate",
      outputs: [],
      stateMutability: "payable",
      type: "function",
      payable: true,
    },
    {
      inputs: [],
      name: "setDonatePerson",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "_a", type: "address" }],
      name: "getDonatePerson",
      outputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "uint256", name: "", type: "uint256" },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [],
      name: "getBalance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [
        { internalType: "address payable", name: "_to", type: "address" },
      ],
      name: "withdrawMoney",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  const Web3 = require("web3");

  const web3 = new Web3(
    "https://goerli.infura.io/v3/e7e63350a02446cd83ab4073d9c266d4"
  );
  const contract = new web3.eth.Contract(ContractABI, cFundingAddress);

  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  const [walletConnect, setWalletConnect] = useState(false);

  const [userAddress, setUserAddress] = useRecoilState(userAtom);

  useEffect(() => {
    setWalletConnect(isConnected);
  }, [walletConnect, isConnected]);
  useEffect(() => {
    contract.methods
      .getFunding()
      .call()
      .then((a) => {
        console.log("연결 완료", a);
      });
  });
  return (
    <Wrap>
      <Title>My Page</Title>
      <AccountWrap>
        {!walletConnect ? (
          <>
            <StyledProfile>
              <Image src={Profile} width="70x" height="70px" />
            </StyledProfile>
            <StyledAccount>
              <div>연결 x</div>
              <StyledAccountCode>연결 x</StyledAccountCode>
            </StyledAccount>
          </>
        ) : (
          <>
            <StyledProfile2>
              <Image src={Profile} width="70x" height="70px" />
            </StyledProfile2>
            <StyledAccount>
              <div> user1</div>
              <StyledAccountCode>{userAddress}</StyledAccountCode>
            </StyledAccount>
          </>
        )}
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
const StyledProfile2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: green;
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
