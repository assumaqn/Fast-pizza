import React from "react";
import CreatUser from "../features/user/CreateUser";
function Home() {
  return (
    <div className="my-10 text-center">
      <h1 className="mb-4 text-xl font-semibold text-stone-700">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreatUser />
    </div>
  );
}

export default Home;
