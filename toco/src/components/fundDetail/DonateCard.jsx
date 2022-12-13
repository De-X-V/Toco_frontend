import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Icon from "../../../public/FundDetail/Icon.png";
import { useAccount, useBalance } from "wagmi";
function DonateCard() {
  const [percent, setPercent] = useState(75);
  const [fundPrice, setFundPrice] = useState("");
  useEffect(() => {
    setPercent(75);
  }, [percent]);
  const { address, isConnected } = useAccount();
  const { data, isError, isLoading } = useBalance({
    address: `${address}`,
  });
  useEffect(() => {
    console.log(data);
  }, [data]);

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
  return (
    <Wrap>
      <CardWrap>
        <DonateDes>
          <DonateName>독거 어르신에게 김치 기부하기</DonateName>
          <DonateTarget>목표 모금액 2,0000,000원</DonateTarget>
        </DonateDes>
        <DonateRange>
          <TargetWrap>
            <Image src={Icon} layout="fixed" alt="banner" />
            <div>
              <div>누적 모금액</div>
              <div>500,000원</div>
            </div>
          </TargetWrap>
          <TargetWrap>
            <Image src={Icon} layout="fixed" alt="banner" />
            <div>
              <div>모금 진행률</div>
              <div>25%</div>
            </div>
          </TargetWrap>
        </DonateRange>
        <ProgressWrap>
          <ProgressBar>
            <Progress percent={percent} />
          </ProgressBar>
        </ProgressWrap>

        {isConnected ? (
          <ConnectedWrap>
            <AddressCover>지갑주소{address}</AddressCover>

            <div>
              Balance: {data?.formatted} {data?.symbol} 원
            </div>
            <input
              onChange={onPriceChange}
              value={fundPrice}
              placeholder="금액 입력하기"
            ></input>
            <ButtonWrap>
              <StyledButton value={5} onClick={onPriceButton}>
                +5KLAY
              </StyledButton>
              <StyledButton value={50} onClick={onPriceButton}>
                +50KLAY
              </StyledButton>
              <StyledButton value={100} onClick={onPriceButton}>
                +100KLAY
              </StyledButton>
              <StyledButton value={500} onClick={onPriceButton}>
                +500KLAY
              </StyledButton>
            </ButtonWrap>
          </ConnectedWrap>
        ) : (
          <></>
        )}
        <DonateTime>
          <div>종료까지 남은 시간</div>
          <div>00일 00시 00분 00초</div>
        </DonateTime>
        <DonateButton>기부하기</DonateButton>
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
  margin-bottom: 48px;

  /* Text Color */

  color: #ffffff;
`;
const ProgressWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProgressBar = styled.div`
  width: 100%;
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
const ConnectedWrap = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 402px;
  height: 339px;
  color: white;
  background-color: #303135;
`;
const AddressCover = styled.div``;

const ButtonWrap = styled.div`
  display: flex;
`;
const StyledButton = styled.button`
  display: flex;

  justify-content: center;
  align-items: center;
  color: white;
  padding: 1px 1px;

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
  margin-top: 116px;
  margin-bottom: 67px;
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
