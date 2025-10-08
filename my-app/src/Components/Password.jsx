import {useState} from "react";

function Password() {
  const [valid, setvalid] = useState("");

  const nameReg =
    /^(?=.*[A-Z])(?=(?:.*[^A-Za-z0-9]){3,})(?=(?:.*\d){2,})(?!.*\s).{8,}$/;

  valid != nameReg ? setvalid("Wrong Password") : setvalid("Strong password");

  return (
    <>
      <form action="">
        <label>Password:</label>
        <input type="text" />
      </form>
    </>
  );
}
