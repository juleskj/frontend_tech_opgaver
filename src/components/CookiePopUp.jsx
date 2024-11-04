import Button from "@/components/Button";
import { FaCookieBite } from "react-icons/fa";

const CookiePopUp = () => {
  return (
    <div className="cookie_container flex flex-col gap-8 bg">
      <div className="flex flex-row justify-between items-start">
        <FaCookieBite className="cookieBite" />
        <button>
          <span className="before:content-['X']"></span>
        </button>
      </div>
      <p className="capitalize">we use cookies to improve your experience</p>
      <div className="btn_container">
        <button className="bg-black py-2 text-white outline outline-black hover:outline-offset-2 rounded-full capitalize hover:duration-75">
          i would like cookies
        </button>
      </div>
    </div>
  );
};

export default CookiePopUp;
