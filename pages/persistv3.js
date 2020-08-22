import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import parseCookies from "./lib/parseCookies";
 
const Persist = (props,{ initialRememberValue = true }) => {
  console.log("cookie",initialRememberValue)


  const [myPp, setRememberMe] = useState(() =>
    JSON.parse(initialRememberValue)
  );


  useEffect(() => {
    console.log("propss persist",props.dewaaaa)
    Cookie.set("myPp", props.dewaaaa);
  }, [myPp]);

   
  console.log("propss persist2",props.dewaaaa)
  return (
    <div>
      remember meaaa
      <input
        type="text"
        value={props.dewaaaa}
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
