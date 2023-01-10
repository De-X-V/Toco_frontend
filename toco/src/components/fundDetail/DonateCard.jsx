import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Icon from "../../../public/FundDetail/Icon.png";
import MyIcon from "../../../public/FundDetail/myicon.png";
import { useAccount, useBalance, useConnect, useContract } from "wagmi";
import { getPfundingContract } from "../../hooks/getPfundingContract";
import { ethers } from "ethers";
import { getLastTime } from "../../hooks/getLastTime";
import { getDday } from "../../hooks/getDday";

function DonateCard({ cards, contract, myValue, lastday }) {
  const [percent, setPercent] = useState();
  const [fundPrice, setFundPrice] = useState("");

  const [fContract, setFcontract] = useState(contract);

  const [fCards, setFcards] = useState();
  //const [valueData, setValueData] = useState(data);

  const [load, setLoad] = useState(false);
  useEffect(() => {
    const newPercent = Math.round(
      (data?.formatted / cards.p_funding_target_amont) * 100
    );
    console.log(newPercent);
    setPercent(newPercent);
  }, []);

  /*
  useEffect(() => {
    const getContract = async () => {
      const value = await contract.getMyDonateAmount();
      console.log(ethers.utils.formatEther(value));
    };
    getContract();
  }, []);
  */

  useEffect(() => {
    console.log(fCards);
    setFcards(cards);
    if (typeof fCards != "undefined") {
      console.log(cards.p_funding_details);
    }
  }, [fCards]);

  /*
  useEffect(() => {
    console.log(contract);
    const getFund = async () => {
      try {
        const result = await contract.getFunding();
        const result2 = await contract.getBalance();
        console.log(result);
        console.log(contract.address);
        console.log(result2.toNumber());
      } catch (err) {
        console.log(err);
      }
    };
    getFund();
    contract.functions.getFunding().then((a) => console.log(a));

    contract.methods
      .getFunding()
      .call()
      .then((a) => {
        console.log("연결 완료", a);
      });
  }, []);
  */

  //wagmi
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const [_isConnected, _setIsConnected] = useState(false);
  const [_connectors, _setConnectors] = useState([]);

  const { data, isError, isLoading } = useBalance({
    address: cards.p_funding_ca,
    //address: `${address}`,
    chainId: 1,
  });

  useEffect(() => {
    _setIsConnected(isConnected);
    _setConnectors(connectors);
  }, [isConnected, connectors]);

  const onPriceChange = (e) => {
    setFundPrice(e.target.value);

    console.log(fundPrice);
  };

  const onPriceButton = (e) => {
    if (fundPrice == "") {
      setFundPrice(e.target.value);
    } else {
      setFundPrice(parseFloat(fundPrice) + parseFloat(e.target.value));
    }
  };
  const onDonate = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    try {
      const contractWithSigner = contract.connect(signer);
      contractWithSigner
        .donate(BigInt(1000000000000000000 * fundPrice), {
          from: address,

          value: `${1000000000000000000 * fundPrice}`,
        })
        .then((e) => {
          console.log(e);
          alert("기부되었습니다!");
          window.history.back();
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrap>
      <CardWrap>
        <DonateDes>
          <DonateName>{cards.p_funding_title}</DonateName>
          <DonateTarget>
            목표 모금액 : {cards.p_funding_target_amont} ETH
          </DonateTarget>
        </DonateDes>
        <DonateRange>
          <TargetWrap>
            <Image src={Icon} layout="fixed" alt="banner" />
            <TagetDivBox>
              <div>누적 모금액</div>
              <Target2>{Math.round(data?.formatted * 1000) / 1000}ETH</Target2>
            </TagetDivBox>
          </TargetWrap>
          <TargetWrap>
            <Image src={Icon} layout="fixed" alt="banner" />
            <TagetDivBox>
              <div>모금 진행률</div>
              <Target2>
                {Math.round(
                  (data?.formatted / cards.p_funding_target_amont) * 100
                )}
                %
              </Target2>
            </TagetDivBox>
          </TargetWrap>
        </DonateRange>
        {_isConnected ? (
          <DonateRange>
            <TargetWrap>
              <Image src={MyIcon} layout="fixed" alt="banner" />
              <TagetDivBox>
                <div>나의 기부액</div>
                <Target2>{Math.round(myValue * 1000) / 1000} ETH</Target2>
              </TagetDivBox>
            </TargetWrap>
            <TargetWrap>
              <Image src={MyIcon} layout="fixed" alt="banner" />
              <TagetDivBox>
                <div>나의 기여도</div>
                <Target2>
                  {Math.round((myValue / data?.formatted) * 100)
                    ? Math.round((myValue / data?.formatted) * 100)
                    : 0}
                  %
                </Target2>
              </TagetDivBox>
            </TargetWrap>
          </DonateRange>
        ) : (
          <></>
        )}
        <ProgressWrap>
          <ProgressBar>
            <Progress
              percent={(data?.formatted / cards.p_funding_target_amont) * 100}
            ></Progress>
          </ProgressBar>
        </ProgressWrap>

        {_isConnected ? (
          <ConnectedWrap>
            <ContractBox>
              <AddressCover>기부 주소</AddressCover>
              <AddressCover>{cards.p_funding_ca}</AddressCover>
            </ContractBox>
            <StyledInput
              onChange={onPriceChange}
              value={fundPrice}
              placeholder="금액 입력하기"
            ></StyledInput>
            <ButtonWrap>
              <StyledButton value={0.1} onClick={onPriceButton}>
                +0.1ETH
              </StyledButton>
              <StyledButton value={0.5} onClick={onPriceButton}>
                +0.5ETH
              </StyledButton>
              <StyledButton value={1} onClick={onPriceButton}>
                +1ETH
              </StyledButton>
              <StyledButton value={1.5} onClick={onPriceButton}>
                +1.5ETH
              </StyledButton>
            </ButtonWrap>
          </ConnectedWrap>
        ) : (
          <></>
        )}
        <DonateTime>
          <TimeTitle>종료까지 남은 시간</TimeTitle>
          <TimeLeft>{lastday}</TimeLeft>
        </DonateTime>
        <DonateButton onClick={onDonate}>기부하기</DonateButton>
      </CardWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-left: 40px;
`;
const CardWrap = styled.div`
  width: 450px;
  height: 860px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* Primary Color */

  background-color: #27272a;
  border-radius: 10px;
`;

const DonateDes = styled.div``;

const DonateName = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 46px;
  margin-bottom: 14px;

  /* Text Color */

  color: #ffffff;
`;

const DonateTarget = styled.div`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 31px;
  margin-bottom: 44px;

  /* Text Color */

  color: #ffffff;
`;

const TagetDivBox = styled.div`
  margin-left: 10px;
`;
const Target2 = styled.div`
  margin-top: 4px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
`;

const ProgressWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  margin-bottom: 40px;
`;
const ProgressBar = styled.div`
  width: 395px;
  height: 15px;
  background-color: black;
  border-radius: 10px;
  overflow: hidden;
`;
const Progress = styled.div`
  width: ${(props) => `${props.percent}%`};

  height: 100%;
  background: linear-gradient(
    90deg,
    #d16ba5 2.88%,
    #86a8e7 52.04%,
    #5ffbf1 97.27%
  );
  border-radius: 25px;
  transition: width 0.5s ease-in-out;
`;

const DonateRange = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const TargetWrap = styled.div`
  display: flex;
  margin-right: 40px;
`;

const DonateTime = styled.div`
  display: flex;
`;
const TimeTitle = styled.div`
  margin-top: 24px;
  margin-right: 64px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
`;
const TimeLeft = styled.div`
  margin-top: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.005em;
`;
const ConnectedWrap = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 402px;
  height: 339px;
  color: white;
  background-color: #303135;
`;
const AddressCover = styled.div`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 23px;
`;

const ContractBox = styled.div`
  width: 403px;
  height: 54px;
  margin-top: 24px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  padding: 12px 16px;
  gap: 8px;

  width: 363px;
  height: 48px;

  color: #8f9098;
  background-color: #303135;
  border: 1px solid #8f9098;
  border-radius: 12px;
  outline: none;
`;

const ButtonWrap = styled.div`
  display: flex;
`;
const StyledButton = styled.button`
  display: flex;

  justify-content: center;
  align-items: center;
  color: white;
  padding: 1px 1px;

  margin-top: 16px;
  margin-left: 7px;
  margin-right: 7px;
  width: 80px;
  height: 45px;

  background-image: linear-gradient(#27272a, #27272a),
    linear-gradient(100.6deg, #d16ba5 0%, #86a8e7 50.89%, #5ffbf1 97.7%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-radius: 12px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
`;
const DonateButton = styled.button`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  /* Secondary Color */
  width: 395px;
  height: 64px;
  /* 3-gradient */

  background: linear-gradient(
    90deg,
    #d16ba5 2.88%,
    #86a8e7 52.04%,
    #5ffbf1 97.27%
  );
  border-radius: 12px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  /* identical to box height */

  /* Text Color */

  color: #ffffff;
`;
export default DonateCard;
