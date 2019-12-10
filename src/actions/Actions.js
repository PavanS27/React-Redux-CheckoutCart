import { PROMO_CODE } from "./Types";

export const handleChange = e => dispatch => {
  dispatch({
    type: PROMO_CODE,
    payload: e.target.value
  });
};
