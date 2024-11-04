import CookiePopUp from "@/components/CookiePopUp";
import If from "@/components/If";

export default function Home() {
  const cookieIsAccepted = true;

  return (
    <div>
      <If condition={cookieIsAccepted}>
        <CookiePopUp></CookiePopUp>
      </If>
    </div>
  );
}
