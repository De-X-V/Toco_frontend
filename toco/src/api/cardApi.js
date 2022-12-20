import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./firebase";

// db의 users 컬렉션을 가져옴
const usersCollectionRef = collection(firestore, "projectFunding");
const CardAPI = {
  GetUser: async () => {
    // getDocs로 컬렉션안에 데이터 가져오기
    const data = await getDocs(usersCollectionRef);
    const data2 = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return data2;
  },
};

export default CardAPI;
