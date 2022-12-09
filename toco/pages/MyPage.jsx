import styled from "styled-components";
import Account from "../src/components/mypage/Account";
import MyProjectFund from "../src/components/mypage/MyProjectFund";
import MyChangeFund from "../src/components/mypage/MyChangeFund";
function MyPage() {
  return (
    <Wrap>
      <Account />
      <MyProjectFund />
      <MyChangeFund />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

export default MyPage;
