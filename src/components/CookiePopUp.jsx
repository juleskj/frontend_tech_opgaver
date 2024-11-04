import Button from "@/components/Button";
import { FaCookieBite } from "react-icons/fa";

const CookiePopUp = () => {
  return (
    <div className="cookie_container flex flex-col gap-8 bg">
      <FaCookieBite className="cookieBite" />
      <p className="capitalize">we use cookies to improve your experience</p>
      <div className="btn_container">
        <button className="bg-black py-2 text-white outline outline-black hover:outline-offset-2 rounded-full capitalize">
          i would like cookies
        </button>
      </div>
    </div>
  );
};

export default CookiePopUp;
