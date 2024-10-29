import { FaCookieBite } from "react-icons/fa";
import { IconContext } from "react-icons";

const CookieIcon = () => {
  return (
    <IconContext.Provider value={{ size: "50px" }}>
      <div>
        <FaCookieBite />
      </div>
    </IconContext.Provider>
  );
};

export default CookieIcon;
