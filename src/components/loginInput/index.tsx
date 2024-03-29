import React, { useEffect, useState } from "react";
import { inputText } from "../../constants/loginInput";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { setuser, userSliceType, userType } from "../../redux/slice/login";
import { alertpop } from "../../utils/sweetalert";
import { useNavigate } from "react-router-dom";

export type LoginInputType = {
  accAccess: "Login" | "SignUp";
  setAccAccess: React.Dispatch<React.SetStateAction<"Login" | "SignUp">>;
};
export type handleChangeType = (text: string, type: string) => void;
const LoginInput: React.FC<LoginInputType> = ({ accAccess, setAccAccess }) => {
  let inputFields = inputText;
  const [sign, setSign] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isAuth, setisAuth] = useState(false);
  const users: userType[] = useSelector<RootState>(state => state.user.users) as userType[];
  const loggedInUser: userType = useSelector<RootState>(state => state.user.loggedInUser) as userType;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleChange: handleChangeType = (text, type) => {
    if (type === "mail") {
      setMail(text);
    } else if (type === "password") {
      setPassword(text);
    } else {
      setName(text);
    }
  };
  if (accAccess === "Login")
    inputFields = inputText.filter((item, ind) => ind !== 1);
  const handleAccessAccount = () => {
    if (accAccess === "Login") {
      setAccAccess("SignUp");
      setSign("SignIn");
    } else {
      setAccAccess("Login");
      setSign("SignUp");
    }
  };
  const handleSubmit = () => {
    console.log(mail, " ", password)
    if (accAccess === 'Login') {
      let isAuthenticated = false;
      users.forEach(user => {
        if (user.mail === mail && password === user.password) {
          dispatch(setuser(mail))
          isAuthenticated = true;
          setisAuth(true);
          return;
        }
      })
      console.log(isAuthenticated);
      alertpop(isAuthenticated)

    }
  }
  useEffect(() => {
    console.log(loggedInUser, isAuth, " in use Effect")
    if (loggedInUser) {
      if (isAuth) {
        console.log(loggedInUser);
        if (loggedInUser.role === "admin") {
          navigate("/admin/home");
        }
        else if (loggedInUser.role === "user") {
          navigate("/user/home")
        }
      }
    }
  }, [loggedInUser, isAuth])
  useEffect(() => {
    if (accAccess === "Login") {
      setSign("SignUp");
    } else {
      setSign("SignIn");
    }
  }, []);
  return (
    <div className="login_page-content_input_cont">
      <h1>LOGIN PAGE</h1>
      <div className="login_page-content_input_cont-container">
        {inputFields.map((content, index) => {
          return (
            <div key={content.placeholder}>
              <content.icon />
              <input
                placeholder={content.placeholder}
                type={content.type}
                onChange={(e) => handleChange(e.target.value, content.type)}
              />
            </div>
          );
        })}
      </div>
      <div className="button_section">
        <a href="#" onClick={handleAccessAccount}>
          {sign}
        </a>
        <button onClick={handleSubmit}>submit</button>
      </div>
    </div>
  );
};

export default LoginInput;
