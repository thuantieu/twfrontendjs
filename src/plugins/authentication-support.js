import { HTTP } from "./http-common";

export const getUserInfo = async (token) => {
  let user = {};
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  await HTTP.get("api/users/getuserinfo", config).then((res, err) => {
    if (err) {
      console.log(err);
    }
    if (res.status == 201) {
      user = res.data
    }
  });

  return user
};
