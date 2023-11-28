import React from "react";
import ReactDOM from "react-dom/client";

// for rtl format uncomment below import line(bootstrap.rtl.min.css)
// import "bootstrap/dist/css/bootstrap.rtl.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./sass/stylesheet.scss";

//import your color stylesheet here
// import "./sass/color-pink.scss";

import App from "./App";
import "./sass/custom.scss"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
