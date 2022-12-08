import styled from "styled-components";
import PennyFundList from "../src/components/pennyfund/PennyFundList";
function PennyFund() {
  return (
    <Wrap>
      <PennyFundList />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default PennyFund;
