import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store";
import SimpleReactLightbox from "simple-react-lightbox";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <SimpleReactLightbox>
        <App />
      </SimpleReactLightbox>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
