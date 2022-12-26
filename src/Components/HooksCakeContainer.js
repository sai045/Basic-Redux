import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../Redux/cake/cakeActions";

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => {
    return state.cake.numOfCakes;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

// usewSelector == mapStateToProps

export default HooksCakeContainer;
