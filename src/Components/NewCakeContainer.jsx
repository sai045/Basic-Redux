import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../Redux/cake/cakeActions";

const NewCakeContainer = () => {
  const [cakesRequired, setCakesRequired] = useState(1);
  const numOfCakes = useSelector((state) => {
    return state.cake.numOfCakes;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <input
        type="number"
        value={cakesRequired}
        onChange={(e) => {
          setCakesRequired(e.target.value);
        }}
      />
      <button onClick={() => dispatch(buyCake(cakesRequired))}>Buy {cakesRequired} Cake</button>
    </div>
  );
};

// usewSelector == mapStateToProps

export default NewCakeContainer;
