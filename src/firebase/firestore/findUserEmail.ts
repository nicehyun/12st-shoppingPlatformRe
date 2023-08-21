import { AxiosError } from "axios";
import {
  CollectionReference,
  getFirestore,
  QuerySnapshot,
  where,
  query,
  getDocs,
  collection,
} from "firebase/firestore";
import firebaseApp from "../config";

const db = getFirestore(firebaseApp);

export const findUserEmailWithNameAndPassword = async (
  phoneNumber: string,
  name: string
): Promise<string[]> => {
  try {
    const usersRef: CollectionReference = collection(db, "users");
    const querySnapshot: QuerySnapshot = await getDocs(
      query(
        usersRef,
        where("phone", "==", phoneNumber),
        where("name", "==", name)
      )
    );

    const matchingUsers: string[] = [];
    querySnapshot.forEach((doc) => {
      const userData = doc.data().email as string;
      matchingUsers.push(userData);
    });

    return matchingUsers;
  } catch (error) {
    const { response } = error as AxiosError;

    if (response) {
      console.error(`🚨firebase getDocs API: ${error}`);
      return [];
    }

    console.error(`🚨findUserEmailWithNameAndPassword firebase API: ${error}`);
    return [];
  }
};
