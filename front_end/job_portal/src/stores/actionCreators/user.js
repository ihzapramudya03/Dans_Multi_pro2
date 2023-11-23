import { LOGIN, REGISTER } from "../actionTypes";

const urlServer =
  "http://localhost:3000"

export function register(dataUser) {
  return async (dispatch) => {
    try {
      const response = await fetch(`${base_url}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataUser),
      });
      const data = await response.json();
      if (!response.ok) {
        throw data.message;
      }

      return dispatch({ type: REGISTER, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function login(dataUser) {
  return async (dispatch) => {
    try {
      const response = await fetch(`${base_url}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataUser),
      });
      const data = await response.json();
      localStorage.setItem("access_token", data.dataAdmin.id_token);
      if (!response.ok) {
        throw data.message;
      }
      return dispatch({ type: LOGIN, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}
