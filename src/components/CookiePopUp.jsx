import Button from "@/components/Button";
import { FaCookieBite } from "react-icons/fa";

const CookiePopUp = ({ children }) => {
  return (
    <div className="cookie_container">
      <FaCookieBite className="cookieBite" />

      <p>we use cookies to improve your experience</p>
      <div className="btn_container">
        <Button btnText="i like cookies"></Button>
      </div>
    </div>
  );
};

export default CookiePopUp;
