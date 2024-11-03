import Button from "@/components/Button";
import { FaCookieBite } from "react-icons/fa";

const CookiePopUp = ({ children }) => {
  return (
    <div className="cookie_container">
      <FaCookieBite className="cookieBite" />
      <h2>Accept cookies?</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <div className="btn_container">
        <Button btnText="accept cookies"></Button>
        <Button btnText="no cookies"></Button>
      </div>
    </div>
  );
};

export default CookiePopUp;
