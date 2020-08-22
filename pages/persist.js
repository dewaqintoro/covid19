import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import parseCookies from "./lib/parseCookies";
 
const Persist = (props,{ initialRememberValue = true }) => {
  // console.log("cookie",initialRememberValue)
  console.log("propss v1",props.dewaaaa)



  const [myPp, setRememberMe] = useState(() =>
    JSON.parse(initialRememberValue)
  );

 
  useEffect(() => {
    Cookie.set("myPp", props.dewaaaa);
  }, [myPp]);

  
  return (
    <div>
      remember meaaa
      <input
        type="text"
        value={props.dewaaaa}
        // checked={myPp}
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
