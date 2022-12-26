import { BUY_CAKE } from "./cakeTypes";

export const buyCake = (cakesRequired) => {
  return {
    type: BUY_CAKE,
    payload: cakesRequired,
  };
};
