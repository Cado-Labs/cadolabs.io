import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLocation
} from "/build/_shared/chunk-U3MF2FUU.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/altj/projects/cadolabs.io/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/styles/main.css
var main_default = "/build/_assets/main-J2ISVR2A.css";

// app/root.tsx
var links = () => {
  return [{ rel: "stylesheet", href: main_default }];
};
var meta = () => {
  return {
    title: "Cadolabs - about us",
    description: "Cadolabs. We are an IT company with a high level of experience in consulting, software enhancement and business growth solutions"
  };
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Outlet, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("section", {
    className: "page-not-found"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message))))));
}
function CatchBoundary() {
  const caught = useCatch();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("section", {
    className: "page-not-found"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("h1", null, /* @__PURE__ */ React.createElement("b", null, "404"), " Page Not Found"), /* @__PURE__ */ React.createElement("p", null, message))))));
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,user-scalable=yes, initial-scale=1.0, maximum-scale=4.0, minimum-scale=1.0"
  }), /* @__PURE__ */ React.createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "ie=edge"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "/images/favicon.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "57x57",
    href: "/images/touch-icons/apple-icon-57x57.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "/images/touch-icons/apple-icon-60x60.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "/images/touch-icons/apple-icon-72x72.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/images/touch-icons/apple-icon-76x76.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/images/touch-icons/apple-icon-114x114.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/images/touch-icons/apple-icon-120x120.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/images/touch-icons/apple-icon-144x144.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/images/touch-icons/apple-icon-152x152.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/images/touch-icons/apple-icon-180x180.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    href: "/images/touch-icons/android-icon-192x192.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/images/touch-icons/favicon-32x32.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/images/touch-icons/favicon-96x96.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/images/touch-icons/favicon-16x16.png"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "manifest",
    href: "/manifest.json"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#ffffff"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "msapplication-TileImage",
    content: "/images/touch-icons/ms-icon-144x144.png"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "theme-color",
    content: "#4de3b6"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#4de3b6"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "msapplication-navbutton-color",
    content: "#4de3b6"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "apple-mobile-web-app-status-bar-style",
    content: "#4de3b6"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:title",
    content: "Cadolabs"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:description",
    content: "We are an IT company with a high level of experience in consulting, software enhancement and business growth solutions"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:type",
    content: "article"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:url",
    content: "https://cadolabs.io"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:image",
    content: "https://cadolabs.io/images/touch-icons/apple-icon-180x180.png"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:image:secure_url",
    content: "https://cadolabs.io/images/touch-icons/apple-icon-180x180.png"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:image:type",
    content: "image/png"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:image:width",
    content: "180"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:image:height",
    content: "180"
  }), /* @__PURE__ */ React.createElement("script", {
    defer: "defer",
    src: "/js/main.js"
  }), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), true ? /* @__PURE__ */ React.createElement(LiveReload, null) : null));
}
function Layout({ children }) {
  let activeClassName = "active";
  let menuIsActive = false;
  let menuClass = useLocation().pathname === "/" ? "menu decorated" : "menu";
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix-app"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "main-content"
  }, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/cado_logo.svg",
    alt: "Cadolabs",
    width: "135",
    height: "78"
  })), /* @__PURE__ */ React.createElement("nav", {
    className: menuClass
  }, /* @__PURE__ */ React.createElement("div", {
    className: "menu-toggler",
    onClick: () => menuIsActive = true
  }), /* @__PURE__ */ React.createElement("div", {
    className: "ul"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/",
    prefetch: "intent",
    className: ({ isActive }) => isActive ? activeClassName : void 0
  }, /* @__PURE__ */ React.createElement("span", null, "About CADO")), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/careers",
    prefetch: "intent",
    className: ({ isActive }) => isActive ? activeClassName : void 0
  }, /* @__PURE__ */ React.createElement("span", null, "Careers")), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/contact",
    prefetch: "intent",
    className: ({ isActive }) => isActive ? activeClassName : void 0
  }, /* @__PURE__ */ React.createElement("span", null, "Contacts")), /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/Cado-Labs",
    rel: "noreferrer",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("img", {
    src: "/images/github.svg",
    alt: "github",
    width: "83",
    height: "19"
  }))), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/tech-radar",
    prefetch: "intent",
    className: ({ isActive }) => isActive ? activeClassName : void 0
  }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("img", {
    src: "/images/techradar.svg",
    alt: "techradar",
    width: "99",
    height: "16"
  }))))))), children), /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "adress"
  }, "411, 4/F, Austin Tower, 22-26, Austin Av., ", /* @__PURE__ */ React.createElement("br", null), "Tsimshatsui, Kowloon, Hong Kong", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "9 Spyrou Kyprianou Av. Office 1, 3070, Limassol, Cyprus"), /* @__PURE__ */ React.createElement("nav", {
    className: "menu"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/",
    prefetch: "intent",
    className: ({ isActive }) => isActive ? activeClassName : void 0
  }, "About CADO")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/careers",
    prefetch: "intent",
    className: ({ isActive }) => isActive ? activeClassName : void 0
  }, "Careers")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/contact",
    prefetch: "intent",
    className: ({ isActive }) => isActive ? activeClassName : void 0
  }, "Contacts")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/Cado-Labs",
    rel: "noreferrer",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/github.svg",
    alt: "github",
    width: "83",
    height: "19"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "/tech-radar"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/techradar.svg",
    alt: "techradar",
    width: "99",
    height: "16"
  })))))), /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "footer-links"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/privacy",
    prefetch: "intent",
    className: ({ isActive }) => isActive ? activeClassName : void 0
  }, "Privacy Policy"), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/cookie-policy",
    prefetch: "intent",
    className: ({ isActive }) => isActive ? activeClassName : void 0
  }, "Cookie Policy")))));
}
export {
  CatchBoundary,
  ErrorBoundary,
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-BKBEL7UT.js.map
