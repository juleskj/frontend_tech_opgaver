import CookiePopUp from "./CookiePopUp";

const If = ({ condition, children }) => {
  return <> {condition && children}</>;
};

export default If;
