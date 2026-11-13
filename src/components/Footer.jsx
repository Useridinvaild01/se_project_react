import { createElement } from "react";

import "./Footer.css";

function Footer() {
  return createElement(
    "footer",
    { className: "footer" },
    createElement(
      "p",
      { className: "footer__copyright" },
      "© 2026 WTWR. All rights reserved."
    )
  );
}

export default Footer;
