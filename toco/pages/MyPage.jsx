import styled from "styled-components";
import Account from "../src/components/mypage/Account";
import MyProjectFund from "../src/components/mypage/MyProjectFund";
import MyChangeFund from "../src/components/mypage/MyChangeFund";
import { getAdminContract } from "../src/hooks/getAdminContract";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "../src/recoil/recoilUserState";
import { firestore } from "../src/api/firebase";
import { useAccount } from "wagmi";

function MyPage() {
  const [userAddress, setUserAddress] = useRecoilState(userAtom);
  const [data, setData] = useState([]);
  const { address, isConnected } = useAccount();
  const data1 = [];

  const getCotract = async () => {
    const AdminContract = await getAdminContract();
    let tempArray = [];
    AdminContract.getDonatedPFList(address).then((res) => {
      console.log(res);
      const promises = res.map((id) => {
        const docRef = firestore.collection("projectFunding").doc(id);
        return docRef.get();
      });
      Promise.all(promises)
        .then((docs) => {
          docs.forEach((doc) => {
            if (doc.exists) {
              tempArray.push(doc.data());
            }
          });
          setData(tempArray);
        })
        .catch((error) => console.log(error));
    });
  };

  useEffect(() => {
    try {
      getCotract();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <Wrap>
      <Account />
      <MyProjectFund data={data} />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

export default MyPage;
