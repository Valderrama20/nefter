import { Magic } from "magic-sdk";
import { URL_FETCH } from "../hooks/useFetch";
const didToken2 = window.localStorage.getItem("didToken")

const magic = new Magic(import.meta.env.VITE_REACT_APP_PK_KEY);

export const checkUser = async (callBack) => {
  // const isLoggedIn = magic.user.isLoggedIn();
  const isLoggedIn = JSON.parse(window.localStorage.getItem("User"))

  if (isLoggedIn) {
    try {
      // const user = await magic.user.getMetadata();
      // const idUser = user.issuer.slice(9);
      // const { data: userInformation } = await axios.get(
      //   `${URL_FETCH}/user/${idUser}`
      // );
      return callBack({ isLoggedIn: true, ...isLoggedIn });
    } catch (error) {
      return callBack({ isLoggedIn: false });
    }
  }
  return callBack({ isLoggedIn: false });
};

export const getUserToken = async () => {
  try {
    return await magic.user.getIdToken();
  } catch (error) {
    return error;
  }
};

export const loginUser = async (email, callBack) => {
  const didToken = await magic.auth.loginWithMagicLink({ email });
  const res = await fetch(`${URL_FETCH}/login`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + didToken,

    },
  });
  if (res.status === 200) {

    // const userMetadata = await magic.user.getMetadata();
    const { user: userInformation } = await res.json();

    const { dataValues, jwtToken } = userInformation

    window.localStorage.setItem("User", JSON.stringify({ isLoggedIn: true, ...dataValues, jwtToken }))

    return callBack({ isLoggedIn: true, ...dataValues, jwtToken });
  } else {
    return callBack({
      isLoggedIn: false,
      error: "User authorization failed in server.",
    });
  }
};

export const logOutUser = async (callBack) => {
  await magic.user.logout();
  window.localStorage.removeItem("User")
  return callBack({ isLoggedIn: false });
};
