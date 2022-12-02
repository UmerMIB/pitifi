import { wrapper } from "../redux/store";
import { Provider } from "react-redux";

import "../styles/globals.css";
import { useEffect, useState } from "react";

const MyApp = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  const [isWindowActive, setIsWindowActive] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsWindowActive(true);
      document.getElementsByTagName("html")[0].classList.add("dark");
      document.getElementsByTagName("html")[0].setAttribute("lang", "en");
      var x = document.createElement("title");
      var t = document.createTextNode("WebApp");
      x.appendChild(t);
      document.head.appendChild(x);
    }
  }, []);

  return (
    <>
      {isWindowActive && (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      )}
    </>
  );
};

export default MyApp;
