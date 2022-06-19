import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useState } from "react";
import { RegisterAuthenticateUser } from "../Redux/Register/action";
export const UserRegister = () => {
  const dispatch = useDispatch();
  const [nm, setNm] = useState("");
  const [mail, setmail] = useState("");
  const [pass, setPass] = useState("");

  const RegisterUser = () => {
    dispatch(
      RegisterAuthenticateUser({
        name: nm,
        email: mail,
        pass: pass,
        username: nm,
        mobile: "",
        description: "",
      })
    ).then((result) => {});
  };
  return (
    <div>
      <input
        type="text"
        value={nm}
        placeholder="enter your name"
        onChange={(elem) => setNm(elem.target.value)}
      />
      <input
        type="text"
        value={mail}
        placeholder="email"
        onChange={(elem) => {
          setmail(elem.target.value);
        }}
      />
      <input
        type="text"
        placeholder="pass"
        value={pass}
        onChange={(elem) => {
          setPass(elem.target.value);
        }}
      />
      <input type="submit" onClick={RegisterUser} />
    </div>
  );
};
