import React from "react";
import CreatUser from "../features/user/CreateUser";
import { useSelector } from "react-redux";
import Button from "./Button";
function Home() {
  const userName = useSelector((state) => state.userAcc.userName);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-4 text-xl font-semibold text-stone-700">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName ? (
        <Button to="/menu" type="primary">
          {userName},Continue Ordering
        </Button>
      ) : (
        <CreatUser />
      )}
    </div>
  );
}

export default Home;
