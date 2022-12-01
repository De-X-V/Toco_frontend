import { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import ChaingeFund from "../src/components/index/ChangeFund";
import DescriptService from "../src/components/index/DescriptService";
import ProjectFund from "../src/components/index/ProjectFund";
import useScrollFadeIn from "../src/hooks/useScrollFadeIn";
import useObserver from "../src/hooks/useObserver";
import Team from "../src/components/index/Team";
import Banner from "../public/banner.png";
import Image from "next/image";
import Community from "../src/components/index/Community";
import Vision from "../src/components/index/Vision";
import Support from "../src/components/index/Support";
const Home = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.1),
    2: useScrollFadeIn("up", 1, 0.1),
    3: useScrollFadeIn("up", 1, 0.1),
    4: useScrollFadeIn("up", 1, 0.1),
    5: useScrollFadeIn("up", 1, 0.1),
    6: useScrollFadeIn("up", 1, 0.1),
  };

  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0);
  const handleVisible = (index) => {
    return () => {
      setCurrentVisibleIndex(index);
    };
  };

  const heroRef = useObserver(handleVisible(0));

  const handleClickNavLink = (index) => {
    const refs = [heroRef];
    refs[index].current.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "center",
    });
  };
  return (
    <Wrap>
      <button onClick={() => handleClickNavLink(0)}>테스트용 버튼</button>

      <StyledFirst ref={heroRef}>
        <StyledBanner>
          <Image src={Banner} margin-left="40px" alt="banner" />
          <StyledBannerDes>
            모두와 함께 걷기 위한 기부,
            <br />
            투코는 그 기부를 투명하게 만듭니다.
          </StyledBannerDes>
        </StyledBanner>
      </StyledFirst>
      <StyledSecond {...animatedItem[0]}>
        <ProjectFund />
      </StyledSecond>
      <StyledSecond {...animatedItem[1]}>
        <ChaingeFund />
      </StyledSecond>
      <StyledSecond {...animatedItem[2]}>
        <DescriptService />
      </StyledSecond>
      <StyledSecond {...animatedItem[3]}>
        <Community />
      </StyledSecond>
      <StyledSecond {...animatedItem[4]}>
        <Vision />
      </StyledSecond>
      <StyledSecond {...animatedItem[5]}>
        <Team />
      </StyledSecond>
      <StyledSecond {...animatedItem[6]}>
        <Support />
      </StyledSecond>
    </Wrap>
  );
};

const Wrap = styled.div``;

const StyledFirst = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledBanner = styled.div`
  position: relative;
`;
const StyledBannerDes = styled.div`
  position: absolute;
  left: 77px;
  top: 40px;
  font-weight: 900;
  font-size: 40px;
  line-height: 100px;
`;

const StyledSecond = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Home;
