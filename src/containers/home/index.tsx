import React from "react";
import { InputWithLabel, AppButton } from "../../components";



const Home = () => {


const handleLogin = () => {
  console.log("Login");
}

  return (
    <div>
      <h1>Hasdsdome</h1>
      <InputWithLabel />
      <AppButton title={"Login"} onClick={handleLogin} />
    </div>
  );
};

export default Home;
