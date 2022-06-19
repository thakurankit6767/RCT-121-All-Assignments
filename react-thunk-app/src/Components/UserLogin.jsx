import { useState } from "react";
import { authenticateLogin } from "../Redux/Auth/action";
import { useDispatch } from "react-redux";
export const UserLogin = () => {
  const [useName, setUseName] = useState("");
  const [setpass, setPass] = useState("");
  const dispatch = useDispatch();
  const UserLogins = () => {
    dispatch(authenticateLogin({ setpass: setpass, useName: useName }));
  };
  return (
    <div>
      <input
        value={useName}
        type="text"
        placeholder="useName"
        onChange={(e) => setUseName(e.target.value)}
      />
      <input
        value={setpass}
        type="text"
        placeholder="setpass"
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      <input type="submit" onClick={UserLogins} />
    </div>
  );
};
