import { useMutation } from "react-query";

const postUserData = async function () {
  /* const res = await fetch("/auth/login/google");
  console.log(res)
  return res; */
  window.open('http://localhost:3001/auth/login/google','_self')
};

export const useUserGoogle = () => {
  return useMutation(() => postUserData(), {
    onError: (error) => {
      console.log(error)
    },
  });
};
