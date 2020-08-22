import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import { parseCookies } from "./lib/parseCookies";
 
const Persist = ({ initialRememberValue = true }) => {
  console.log("cookie",initialRememberValue)


  const [myPp, setRememberMe] = useState(() =>
    JSON.parse(initialRememberValue)
  );


  useEffect(() => {
    Cookie.set("myPp", JSON.stringify(myPp));
  }, [myPp]);

  
  return (
    <div>
      remember meaaa
      <input
        type="checkbox"
        value={myPp}
        checked={myPp}
        onChange={e => setRememberMe(e.target.checked)}
      />
    </div>
  );
};

Persist.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);

  return {
    initialRememberValue: cookies.myPp
  };
};

export default Persist;
