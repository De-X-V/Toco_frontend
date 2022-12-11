import React from "react";
import Image from "next/image";
import kimchi from "../../../public/kimchi.png";
import styled from "styled-components";
function FundDes() {
  return (
    <Wrap>
      <Image
        src={kimchi}
        layout="fixed"
        width={750}
        height={480}
        alt="banner"
      />
      <div>기부 기획 의도</div>
      <div>어쩌구 저쩌구</div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export default FundDes;
