import { useState } from "react";
import "./index.scss";
import ImageSlider from "../../components/ImageSlider";
import LoginInput from "../../components/loginInput";

const Login = () => {
  const [accAccess, setaccAccess] = useState<"Login"|"SignUp">("Login");
  const stateHandle={
    accAccess,setaccAccess
  }
  return (
    <div className="login_page">
      <div className="login_page-content">
        <div className="login_page-content_image">
          <ImageSlider />
        </div>
        <div className="login_page-content_input">
        <LoginInput accAccess={accAccess} setAccAccess={setaccAccess}/> 
        </div>
      </div>
    </div>
  );
};

export default Login;
