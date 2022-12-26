import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../Redux/icecream/icecreamAction";

const HooksIceCreamContainer = () => {
  const numOfCakes = useSelector((state) => {
    return state.iceCream.numOfIceCreams;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  );
};

// usewSelector == mapStateToProps

export default HooksIceCreamContainer;
