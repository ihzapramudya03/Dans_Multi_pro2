import {
  SET_LOADING,
  SET_PRODUCTS,
  SET_ERROR,
  SET_PRODUCTS_DETAIL,
} from "../actionTypes";

const urlServer =
  "http://localhost:3000/jobList";

export function fetchProducts() {
  return async (dispatch) => {
    try {
      const response = await fetch(urlServer, {
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });
      const data = await response.json();
      console.log(data.data.job);
      if (!response.ok) {
        throw new Error(response.message);
      }
      return dispatch({ type: SET_PRODUCTS, payload: data.data.job });
    } catch (err) {
      console.log(err);
    }
  };
}

export function fetchProductsDetail(id) {
  return async (dispatch) => {
    try {
      const response = await fetch(`${urlServer}/${id}`, {
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(response.message);
      }
      return dispatch({ type: SET_PRODUCTS_DETAIL, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function setLoading(payload) {
  return {
    type: SET_LOADING,
    payload: payload,
  };
}

export function setError(payload) {
  return {
    type: SET_ERROR,
    payload: payload,
  };
}
