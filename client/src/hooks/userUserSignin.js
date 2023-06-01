import { useMutation } from "react-query"
import fetch from "../lib/fetchInstance";

const postUserData = async function (data) {
  console.log(data)
  const res = await fetch.post("auth/signin", data);
  return res;
};

export const useUserSignin = () => {
  return useMutation((data) => postUserData(data), {});
};

