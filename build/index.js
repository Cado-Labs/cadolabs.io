var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
import * as React from "react";

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { renderToString } from "react-dom/server";

// node_modules/remix/esm/client.js
import { Form, Link, Links, LiveReload, Meta, NavLink, Outlet, PrefetchPageLinks, RemixBrowser, RemixServer, Scripts, ScrollRestoration, useActionData, useBeforeUnload, useCatch, useFetcher, useFetchers, useFormAction, useHref, useLoaderData, useLocation, useMatches, useNavigate, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useSearchParams, useSubmit, useTransition } from "@remix-run/react";

// app/entry.server.tsx
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = renderToString(/* @__PURE__ */ React.createElement(RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/altj/projects/cadolabs.io/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});

// app/styles/main.css
var main_default = "/build/_assets/main-J2ISVR2A.css";

// route-module:/Users/altj/projects/cadolabs.io/app/root.tsx
import { useLocation as useLocation2 } from "react-router";
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
  let menuClass = useLocation2().pathname === "/" ? "menu decorated" : "menu";
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

// route-module:/Users/altj/projects/cadolabs.io/app/routes/airtable.getTable.tsx
var airtable_getTable_exports = {};
__export(airtable_getTable_exports, {
  loader: () => loader
});
var loader = async ({ request }) => {
  const baseUrl = new URL(request.url);
  return await fetch(`${baseUrl.origin}/api/airtable/getTable`, {
    method: "GET"
  });
};

// route-module:/Users/altj/projects/cadolabs.io/app/routes/careers/$careerId.tsx
var careerId_exports = {};
__export(careerId_exports, {
  default: () => DynamicCareer,
  loader: () => loader2,
  meta: () => meta2
});

// app/components/vacancies.tsx
function VacanciesList(data) {
  const vacancyList = JSON.parse(data.data).records;
  return /* @__PURE__ */ React.createElement("section", {
    className: "cado-looking-for"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "header"
  }, /* @__PURE__ */ React.createElement("h2", null, "CADO is looking for"), /* @__PURE__ */ React.createElement("div", {
    className: "descr"
  }, "If you are dynamic and motivated to do something big, check out our open positions!"), /* @__PURE__ */ React.createElement("div", {
    className: "view-all"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/careers"
  }, "View all vacancies"))), /* @__PURE__ */ React.createElement("ul", null, vacancyList.map((vacancy, index) => /* @__PURE__ */ React.createElement("li", {
    key: index
  }, /* @__PURE__ */ React.createElement("div", {
    className: "inner"
  }, /* @__PURE__ */ React.createElement(Link, {
    title: vacancy.fields.url,
    key: vacancy.id,
    to: `/careers/${vacancy.fields.slug}`,
    prefetch: "intent"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, vacancy.fields.card_title), /* @__PURE__ */ React.createElement("div", {
    className: "descr"
  }, vacancy.fields.card_descr))))), /* @__PURE__ */ React.createElement("li", {
    className: "send-cv"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "mailto:hr@cadolabs.io"
  }, "Send your CV")))));
}

// route-module:/Users/altj/projects/cadolabs.io/app/routes/careers/$careerId.tsx
import { useEffect } from "react";
var meta2 = ({ data }) => {
  if (!data) {
    return { title: "Oops..." };
  }
  const findCurrentVacancy = data.list.records.filter((arr) => arr.slug === data.currentSlug);
  const currentVacancy = findCurrentVacancy[0].fields;
  return {
    title: currentVacancy.page_title ? `${currentVacancy.page_title}` : "Vacancy"
  };
};
var loader2 = async ({ request, params }) => {
  const baseUrl = new URL(request.url);
  let data = { list: null, currentSlug: null };
  const response = await fetch(`${baseUrl.origin}/api/airtable/getTable`, {
    method: "GET"
  });
  data.list = await response.json();
  data.list.records.map((item) => item.slug = item.fields.slug);
  data.currentSlug = params.careerId;
  if (!data.list.records.filter((arr) => arr.slug === params.careerId).length) {
    throw new Response("Not Found", { status: 404 });
  }
  return data;
};
function DynamicCareer() {
  const careerDataRaw = useLoaderData().list.records.filter((arr) => arr.slug === useLoaderData().currentSlug);
  const careerData = careerDataRaw[0].fields;
  let fetcher = useFetcher();
  useEffect(() => {
    fetcher.load("/airtable/getTable");
  }, []);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper back-to-page"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/careers"
  }, "back to All Vacancies")), /* @__PURE__ */ React.createElement("section", {
    className: "vacancy"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("h1", null, careerData.page_title), /* @__PURE__ */ React.createElement("div", {
    className: "descr",
    dangerouslySetInnerHTML: { __html: careerData.page_short_descr }
  }))), /* @__PURE__ */ React.createElement("section", {
    className: "how-we-do-it"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "inner"
  }, /* @__PURE__ */ React.createElement("h2", null, "HOW we do it"), /* @__PURE__ */ React.createElement("p", null, "Most of the new services are developed and run in accordance with ", /* @__PURE__ */ React.createElement("b", null, "microservices architecture"), "."), /* @__PURE__ */ React.createElement("p", null, "We invest into our own ", /* @__PURE__ */ React.createElement("b", null, "Kubernetes platform"), "."), /* @__PURE__ */ React.createElement("p", null, "We adopt the ", /* @__PURE__ */ React.createElement("b", null, "gRPC"), " framework in our platform or migrate our interfaces to a ", /* @__PURE__ */ React.createElement("b", null, "micro-frontend pattern"), "."), /* @__PURE__ */ React.createElement("p", null, "We actively use and support ", /* @__PURE__ */ React.createElement("b", null, "open source products"), "."), /* @__PURE__ */ React.createElement("p", null, "You can have a look at some of our code in our ", /* @__PURE__ */ React.createElement("br", null), " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/Cado-Labs",
    rel: "noreferrer",
    target: "_blank"
  }, "GitHub account"), ".")))), /* @__PURE__ */ React.createElement("section", {
    className: "about-vacancy"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, careerData.responsibilities && /* @__PURE__ */ React.createElement("div", {
    className: "more-info"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, "YOUR Responsibilities:"), /* @__PURE__ */ React.createElement("ul", {
    dangerouslySetInnerHTML: { __html: careerData.responsibilities }
  })), careerData.requirements && /* @__PURE__ */ React.createElement("div", {
    className: "more-info"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, "OUR Requirements:"), /* @__PURE__ */ React.createElement("ul", {
    dangerouslySetInnerHTML: { __html: careerData.requirements }
  })), careerData.considered && /* @__PURE__ */ React.createElement("div", {
    className: "more-info"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, "CONSIDERED as an advantage:"), /* @__PURE__ */ React.createElement("ul", {
    dangerouslySetInnerHTML: { __html: careerData.considered }
  })), careerData.we_offer && /* @__PURE__ */ React.createElement("div", {
    className: "more-info"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, "WHAT we offer:"), /* @__PURE__ */ React.createElement("ul", {
    dangerouslySetInnerHTML: { __html: careerData.we_offer }
  })), /* @__PURE__ */ React.createElement("div", {
    className: "more-info"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, "Apply by sending CV to ", /* @__PURE__ */ React.createElement("a", {
    href: "mailto:hr@cadolabs.io"
  }, "hr@cadolabs.io"))))), /* @__PURE__ */ React.createElement("section", {
    className: "cado-do"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("h2", null, "CADO DO"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", {
    className: "inner"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, "Traffic Management Systems"), /* @__PURE__ */ React.createElement("div", {
    className: "descr"
  }, "to boost your growth!"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", {
    className: "inner"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, "CRM Platforms"), /* @__PURE__ */ React.createElement("div", {
    className: "descr"
  }, "to bring some order to your Data!"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", {
    className: "inner"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, "Payment systems"), /* @__PURE__ */ React.createElement("div", {
    className: "descr"
  }, "we know how to make money work for you!"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", {
    className: "inner"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, "BI Systems"), /* @__PURE__ */ React.createElement("div", {
    className: "descr"
  }, "our secrets to a good night's sleep"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", {
    className: "inner"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, "Anti-Fraud Solutions"), /* @__PURE__ */ React.createElement("div", {
    className: "descr"
  }, "our secrets to the BEST night's sleep"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", {
    className: "inner"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, "Machine Learning Products"), /* @__PURE__ */ React.createElement("div", {
    className: "descr"
  }, "for the love of Robots!")))))), fetcher.data ? /* @__PURE__ */ React.createElement(VacanciesList, {
    data: fetcher.data
  }) : null);
}

// route-module:/Users/altj/projects/cadolabs.io/app/routes/careers/index.tsx
var careers_exports = {};
__export(careers_exports, {
  default: () => CareerIndex,
  meta: () => meta3
});
import { useEffect as useEffect2 } from "react";
var meta3 = () => {
  return {
    title: "Cadolabs - careers"
  };
};
function CareerIndex() {
  let fetcher = useFetcher();
  useEffect2(() => {
    fetcher.load("/airtable/getTable");
  }, []);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("section", {
    className: "about-career"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("h1", null, "CADO Careers"), /* @__PURE__ */ React.createElement("p", null, "If you are ", /* @__PURE__ */ React.createElement("b", null, "dynamic and motivated"), " to do something big, check out our open positions!"), /* @__PURE__ */ React.createElement("div", {
    className: "cado-has-denies"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, "CADO HAS"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Professional and motivated team"), /* @__PURE__ */ React.createElement("li", null, "Clear goals"), /* @__PURE__ */ React.createElement("li", null, "Personal responsibility of each team member"), /* @__PURE__ */ React.createElement("li", null, "Supportive and friendly Team"), /* @__PURE__ */ React.createElement("li", null, "Latest technology tools"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "Check out "), " ", /* @__PURE__ */ React.createElement("a", {
    href: "/tech-radar"
  }, " our Tech Radar!")))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, "CADO DENIES"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Overcomplicated product infrastructure"), /* @__PURE__ */ React.createElement("li", null, "Fear of new technology"), /* @__PURE__ */ React.createElement("li", null, "Creating processes for the sake of processes"), /* @__PURE__ */ React.createElement("li", null, "Army discipline"), /* @__PURE__ */ React.createElement("li", null, "Useless and endless meetings"), /* @__PURE__ */ React.createElement("li", null, "Bureaucracy and strict rules")))))), /* @__PURE__ */ React.createElement("section", {
    className: "become-one-of-us"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("h2", null, /* @__PURE__ */ React.createElement("span", null, "TO BECOME of one of us you will have to:")), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    src: "/images/step-1.svg",
    alt: "Step 1"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, "Apply the vacancy"), /* @__PURE__ */ React.createElement("div", {
    className: "descr"
  }, "by send your CV"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    src: "/images/step-2.svg",
    alt: "Step 2"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, "Pass tech interview"), /* @__PURE__ */ React.createElement("div", {
    className: "descr"
  }, "by ZOOM or in our office"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    src: "/images/step-3.svg",
    alt: "Step 3"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, "Show your projects"), /* @__PURE__ */ React.createElement("div", {
    className: "descr"
  }, "or do optional test task"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    src: "/images/step-4.svg",
    alt: "Step 3"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, "Pass 2nd interview"), /* @__PURE__ */ React.createElement("div", {
    className: "descr"
  }, "with our friendly CTO")))), /* @__PURE__ */ React.createElement("div", {
    className: "get-offer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, "Get an offer!"), /* @__PURE__ */ React.createElement("div", {
    className: "descr"
  }, "and celebrate it with us!")))), fetcher.data ? /* @__PURE__ */ React.createElement(VacanciesList, {
    data: fetcher.data
  }) : null);
}

// route-module:/Users/altj/projects/cadolabs.io/app/routes/cookie-policy.tsx
var cookie_policy_exports = {};
__export(cookie_policy_exports, {
  default: () => Privacy,
  meta: () => meta4
});
import { useEffect as useEffect3 } from "react";
var meta4 = () => {
  return {
    title: "Cadolabs - cookie policy"
  };
};
function Privacy() {
  let fetcher = useFetcher();
  useEffect3(() => {
    fetcher.load("/airtable/getTable");
  }, []);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("section", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("h1", null, "Cookie Policy"), /* @__PURE__ */ React.createElement("div", {
    className: "text"
  }, /* @__PURE__ */ React.createElement("h3", null, "What are cookies?"), /* @__PURE__ */ React.createElement("p", null, "Cookies are text files placed on\xA0your computer to\xA0collect standard Internet log information and visitor behavior information. When you visit our websites, we\xA0may collect information from you automatically through cookies or\xA0similar technology."), /* @__PURE__ */ React.createElement("p", null, "For further information, visit allaboutcookies.org."), /* @__PURE__ */ React.createElement("h3", null, "How do\xA0we\xA0use cookies?"), /* @__PURE__ */ React.createElement("p", null, "Our Company uses cookies in\xA0a\xA0range of\xA0ways to\xA0improve your experience on\xA0our website, including:"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Keeping you signed in"), /* @__PURE__ */ React.createElement("li", null, "Understanding how you use our website")), /* @__PURE__ */ React.createElement("h3", null, "What types of\xA0cookies do\xA0we\xA0use?"), /* @__PURE__ */ React.createElement("p", null, "There are a\xA0number of\xA0different types of\xA0cookies, however, our website uses:"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "Functionality"), "\xA0\u2014 Company uses these cookies so\xA0that we\xA0recognize you on\xA0our website and remember your previously selected preferences. These could include what language you prefer and the location you are\xA0in. A\xA0mix of\xA0first-party and third-party cookies are used."), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "Advertising"), "\xA0\u2014 Company uses these cookies to\xA0collect information about your visit to\xA0our website, the content you viewed, the links you followed, and information about your browser, device, and your\xA0IP address. The company sometimes shares some limited aspects of\xA0this data with third parties for advertising purposes. We\xA0may also share online data collected through cookies with our advertising partners. This means that when you visit another website, you may be\xA0shown advertising based on\xA0your browsing patterns on\xA0our website.")), /* @__PURE__ */ React.createElement("h3", null, "How to\xA0manage cookies"), /* @__PURE__ */ React.createElement("p", null, "You can set your browser not to\xA0accept cookies, and the above website tells you how to\xA0remove cookies from your browser. However, in\xA0a\xA0few cases, some of\xA0our website features may not function as\xA0a\xA0result."), /* @__PURE__ */ React.createElement("h3", null, "Privacy policies of\xA0other websites"), /* @__PURE__ */ React.createElement("p", null, "The company website contains links to\xA0other websites. Our privacy policy applies only to\xA0our website, so\xA0if\xA0you click on\xA0a\xA0link to\xA0another website, you should read their privacy policy."), /* @__PURE__ */ React.createElement("h3", null, "How to\xA0contact\xA0us"), /* @__PURE__ */ React.createElement("p", null, "If\xA0you have any questions about Our Company\u2019s privacy policy, the data we\xA0hold on\xA0you, or\xA0you would like to\xA0exercise one of\xA0your data protection rights, please do\xA0not hesitate to\xA0contact\xA0us."), /* @__PURE__ */ React.createElement("blockquote", null, "Our core value is\xA0to\xA0be\xA0genuinely helpful and effective. We\xA0invest in\xA0our Team\u2019s development and education and constantly search for ways to\xA0further optimise and improve so\xA0that we\xA0can stay on\xA0top of\xA0our game.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("cite", null, "\u2014\xA0CTO Cado Labs"))))), fetcher.data ? /* @__PURE__ */ React.createElement(VacanciesList, {
    data: fetcher.data
  }) : null);
}

// route-module:/Users/altj/projects/cadolabs.io/app/routes/tech-radar.tsx
var tech_radar_exports = {};
__export(tech_radar_exports, {
  default: () => Privacy2,
  meta: () => meta5
});
import { useEffect as useEffect4 } from "react";
var meta5 = () => {
  return {
    title: "Cadolabs - teach radar"
  };
};
function Privacy2() {
  let fetcher = useFetcher();
  useEffect4(() => {
    fetcher.load("/airtable/getTable");
  }, []);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("section", {
    className: "tech-radar"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("iframe", {
    src: "https://cadolabs-techradar.s3-eu-west-1.amazonaws.com/index.html",
    height: "1200",
    width: "100%",
    title: "Tech radar"
  }))), fetcher.data ? /* @__PURE__ */ React.createElement(VacanciesList, {
    data: fetcher.data
  }) : null);
}

// route-module:/Users/altj/projects/cadolabs.io/app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  action: () => action,
  default: () => Contact,
  meta: () => meta6
});
import { useEffect as useEffect5, useRef } from "react";
var meta6 = () => {
  return {
    title: "Cadolabs - contact"
  };
};
var action = async ({ request }) => {
  await new Promise((res) => setTimeout(res, 2e3));
  const body = await request.formData();
  const baseUrl = new URL(request.url);
  const response = await fetch(`${baseUrl.origin}/api/airtable/sendMessage`, {
    method: "POST",
    body
  }).then((response2) => {
    return response2.json();
  }).catch((e) => {
    e.message;
  });
  return true;
};
function Contact() {
  let transition = useTransition();
  let fetcher = useFetcher();
  let formRef = useRef();
  useEffect5(() => {
    var _a;
    if (transition.state === "loading") {
      (_a = formRef.current) == null ? void 0 : _a.reset();
    }
    fetcher.load("/airtable/getTable");
  }, [transition]);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("section", {
    className: "contact"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("h1", null, "We are an IT company with a ", /* @__PURE__ */ React.createElement("span", {
    className: "marked"
  }, "high level of experience"), " in ", /* @__PURE__ */ React.createElement("b", null, "consulting"), ", ", /* @__PURE__ */ React.createElement("b", null, "software enhancement"), " and ", /* @__PURE__ */ React.createElement("b", null, "business growth solutions")), /* @__PURE__ */ React.createElement("div", {
    className: "contact-form"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "contact-form-inner"
  }, /* @__PURE__ */ React.createElement("h2", null, "Let\u2019s talk"), /* @__PURE__ */ React.createElement("p", null, "For any inquiries please contact us at ", /* @__PURE__ */ React.createElement("a", {
    href: "mailto:info@cadolabs.io"
  }, "info@cadolabs.io")), /* @__PURE__ */ React.createElement(Form, {
    ref: formRef,
    method: "post"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "input-outer"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    placeholder: "Your name",
    name: "name",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "input-outer"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "email",
    placeholder: "Email",
    name: "email",
    pattern: "^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,10}$",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "input-outer"
  }, /* @__PURE__ */ React.createElement("textarea", {
    name: "message",
    id: "",
    cols: "30",
    rows: "7",
    placeholder: "Message",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "input-outer"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    value: "Send"
  }, "Send")), transition.state === "submitting" && /* @__PURE__ */ React.createElement("div", {
    className: "form-message"
  }, /* @__PURE__ */ React.createElement("p", null, "Your message has been sent"))))))), fetcher.data ? /* @__PURE__ */ React.createElement(VacanciesList, {
    data: fetcher.data
  }) : null);
}

// route-module:/Users/altj/projects/cadolabs.io/app/routes/privacy.tsx
var privacy_exports = {};
__export(privacy_exports, {
  default: () => Privacy3,
  meta: () => meta7
});
import { useEffect as useEffect6 } from "react";
var meta7 = () => {
  return {
    title: "Cadolabs - privacy policy"
  };
};
function Privacy3() {
  let fetcher = useFetcher();
  useEffect6(() => {
    fetcher.load("/airtable/getTable");
  }, []);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("section", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("h1", null, "Privacy Policy"), /* @__PURE__ */ React.createElement("div", {
    className: "text"
  }, /* @__PURE__ */ React.createElement("p", null, 'This privacy policy will explain how\xA0we (hereinafter "Company") uses the personal data we\xA0collect from you when you use our website.'), /* @__PURE__ */ React.createElement("h3", null, "Our Company collects the following data:"), /* @__PURE__ */ React.createElement("p", null, "Personal identification information such\xA0as:"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "name"), /* @__PURE__ */ React.createElement("li", null, "email"), /* @__PURE__ */ React.createElement("li", null, "etc.")), /* @__PURE__ */ React.createElement("h3", null, "Our Company collects your data so\xA0that we\xA0can:"), /* @__PURE__ */ React.createElement("p", null, "Process your order."), /* @__PURE__ */ React.createElement("p", null, "Email you with special offers on\xA0other products and services we\xA0think you might like."), /* @__PURE__ */ React.createElement("p", null, "If\xA0you agree, Company will share your data with our partner companies so\xA0that they may offer you their products and services."), /* @__PURE__ */ React.createElement("p", null, "When the Company processes your order, it\xA0may send your data\xA0to, and also use the resulting information from, credit reference agencies to\xA0prevent fraudulent purchases."), /* @__PURE__ */ React.createElement("h3", null, "How do\xA0we\xA0store your data?"), /* @__PURE__ */ React.createElement("p", null, "The company securely stores your data in\xA0accordance with the Data Processing legislation."), /* @__PURE__ */ React.createElement("p", null, "The company will keep your data for 1\xA0year. Once this time period has expired, we\xA0will delete your data."), /* @__PURE__ */ React.createElement("h3", null, "Marketing"), /* @__PURE__ */ React.createElement("p", null, "The company would like to\xA0send you information about products and services of\xA0ours that we\xA0think you might like, as\xA0well as\xA0those of\xA0our partner companies."), /* @__PURE__ */ React.createElement("p", null, "If\xA0you have agreed to\xA0receive marketing, you may always opt-out at\xA0a\xA0later date."), /* @__PURE__ */ React.createElement("p", null, "You have the right at\xA0any time to\xA0stop Company from contacting you for marketing purposes or\xA0giving your data to\xA0other members of\xA0the Company Group."), /* @__PURE__ */ React.createElement("p", null, "If\xA0you no\xA0longer wish to\xA0be\xA0contacted for marketing purposes, please send\xA0us an\xA0email."), /* @__PURE__ */ React.createElement("h3", null, "What are your data protection rights?"), /* @__PURE__ */ React.createElement("p", null, "Our Company would like to\xA0make sure you are fully aware of\xA0all of\xA0your data protection rights."), /* @__PURE__ */ React.createElement("h3", null, "Every user is\xA0entitled to\xA0the following:"), /* @__PURE__ */ React.createElement("p", null, "The right to\xA0access\xA0\u2014 You have the right to\xA0request the Company for copies of\xA0your personal data. We\xA0may charge you a\xA0small fee for this service."), /* @__PURE__ */ React.createElement("p", null, "The right to\xA0rectification\xA0\u2014 You have the right to\xA0request that Our Company correct any information you believe is\xA0inaccurate. You also have the right to\xA0request Our Company to\xA0complete information you believe is\xA0incomplete."), /* @__PURE__ */ React.createElement("p", null, "The right to\xA0erasure\xA0\u2014 You have the right to\xA0request that Company erase your personal data, under certain conditions."), /* @__PURE__ */ React.createElement("p", null, "The right to\xA0restrict processing\xA0\u2014 You have the right to\xA0request that the Company restrict the processing of\xA0your personal data, under certain conditions."), /* @__PURE__ */ React.createElement("p", null, "The right to\xA0object to\xA0processing\xA0\u2014 You have the right to\xA0object to\xA0Our Company\u2019s processing of\xA0your personal data, under certain conditions."), /* @__PURE__ */ React.createElement("p", null, "The right to\xA0data portability\xA0\u2014 You have the right to\xA0request that Our Company transfer the data that we\xA0have collected to\xA0another organization, or\xA0directly to\xA0you, under certain conditions."), /* @__PURE__ */ React.createElement("p", null, "If\xA0you make a\xA0request, we\xA0have one month to\xA0respond to\xA0you. If\xA0you would like to\xA0exercise any of\xA0these rights, please contact\xA0us at\xA0our email."), /* @__PURE__ */ React.createElement("blockquote", null, "Our core value is\xA0to\xA0be\xA0genuinely helpful and effective. We\xA0invest in\xA0our Team\u2019s development and education and constantly search for ways to\xA0further optimise and improve so\xA0that we\xA0can stay on\xA0top of\xA0our game.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("cite", null, "\u2014\xA0CTO Cado Labs"))))), fetcher.data ? /* @__PURE__ */ React.createElement(VacanciesList, {
    data: fetcher.data
  }) : null);
}

// route-module:/Users/altj/projects/cadolabs.io/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  meta: () => meta8
});
import { useEffect as useEffect7 } from "react";
var meta8 = () => {
  return {
    title: "Cadolabs - about us"
  };
};
function Index() {
  let fetcher = useFetcher();
  useEffect7(() => {
    fetcher.load("/airtable/getTable");
  }, []);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("section", {
    className: "about-us"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("h1", null, "We are an IT company with a ", /* @__PURE__ */ React.createElement("span", {
    className: "marked"
  }, "high level of experience"), " in ", /* @__PURE__ */ React.createElement("b", null, "consulting"), ", ", /* @__PURE__ */ React.createElement("b", null, "software enhancement"), " and ", /* @__PURE__ */ React.createElement("b", null, "business growth solutions")), /* @__PURE__ */ React.createElement("p", null, "CADO is\xA0an\xA0outsourcing company with a\xA0product company approach and go-getter attitude."))), /* @__PURE__ */ React.createElement("section", {
    className: "cado-belives"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "inner"
  }, /* @__PURE__ */ React.createElement("h2", null, "CADO BELIVES IN"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", null, "remote teams and ", /* @__PURE__ */ React.createElement("b", null, "flexible schedule"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", null, "constant and only useful ", /* @__PURE__ */ React.createElement("b", null, "learning"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", null, "personal ", /* @__PURE__ */ React.createElement("b", null, "responsibility"), " and goal oriented work")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", null, "honest two-way street ", /* @__PURE__ */ React.createElement("b", null, "feedback"), " between the Company and the Team")))))), /* @__PURE__ */ React.createElement("section", {
    className: "cado-can"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("h2", null, "CADO CAN"), /* @__PURE__ */ React.createElement("p", null, "And you might think we\xA0can\u2019t do\xA0much and fast since we\xA0are quite small, but we\xA0are about to\xA0tell you why we\xA0can:"), /* @__PURE__ */ React.createElement("p", null, "We\xA0have ", /* @__PURE__ */ React.createElement("b", null, "several major clients"), " and we\xA0cover all their development needs. And for sure, this is\xA0a\xA0match made in\xA0heaven."), /* @__PURE__ */ React.createElement("p", null, "We\xA0code ", /* @__PURE__ */ React.createElement("b", null, "to\xA0boost the business"), ". There is\xA0no\xA0development for the sake of\xA0development here!"), /* @__PURE__ */ React.createElement("p", null, "Our recruiters work hard ", /* @__PURE__ */ React.createElement("b", null, "to\xA0hire the best crowd"), " and the rest of\xA0the team makes sure it\xA0wants to\xA0stay with\xA0us!"), /* @__PURE__ */ React.createElement("p", null, "At\xA0", /* @__PURE__ */ React.createElement("b", null, "Cado Labs"), " we\xA0know that the Future is\xA0Open Source, therefore we\xA0actively use open source solutions in\xA0our work. Not just that we\xA0use and support open source products, we\xA0contribute ourselves. You can have a\xA0look at\xA0some of\xA0our code in\xA0our GitHub account and also check out our Tech Radar"))), /* @__PURE__ */ React.createElement("section", {
    className: "cado-do"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("h2", null, "CADO DO"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", {
    className: "inner"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, "Traffic Management Systems"), /* @__PURE__ */ React.createElement("div", {
    className: "descr"
  }, "to boost your growth!"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", {
    className: "inner"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, "CRM Platforms"), /* @__PURE__ */ React.createElement("div", {
    className: "descr"
  }, "to bring some order to your Data!"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", {
    className: "inner"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, "Payment systems"), /* @__PURE__ */ React.createElement("div", {
    className: "descr"
  }, "we know how to make money work for you!"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", {
    className: "inner"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, "BI Systems"), /* @__PURE__ */ React.createElement("div", {
    className: "descr"
  }, "our secrets to a good night's sleep"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", {
    className: "inner"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, "Anti-Fraud Solutions"), /* @__PURE__ */ React.createElement("div", {
    className: "descr"
  }, "our secrets to the BEST night's sleep"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", {
    className: "inner"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, "Machine Learning Products"), /* @__PURE__ */ React.createElement("div", {
    className: "descr"
  }, "for the love of Robots!")))))), fetcher.data ? /* @__PURE__ */ React.createElement(VacanciesList, {
    data: fetcher.data
  }) : null);
}

// <stdin>
import { default as default2 } from "./assets.json";
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/airtable.getTable": {
    id: "routes/airtable.getTable",
    parentId: "root",
    path: "airtable/getTable",
    index: void 0,
    caseSensitive: void 0,
    module: airtable_getTable_exports
  },
  "routes/careers/$careerId": {
    id: "routes/careers/$careerId",
    parentId: "root",
    path: "careers/:careerId",
    index: void 0,
    caseSensitive: void 0,
    module: careerId_exports
  },
  "routes/careers/index": {
    id: "routes/careers/index",
    parentId: "root",
    path: "careers",
    index: true,
    caseSensitive: void 0,
    module: careers_exports
  },
  "routes/cookie-policy": {
    id: "routes/cookie-policy",
    parentId: "root",
    path: "cookie-policy",
    index: void 0,
    caseSensitive: void 0,
    module: cookie_policy_exports
  },
  "routes/tech-radar": {
    id: "routes/tech-radar",
    parentId: "root",
    path: "tech-radar",
    index: void 0,
    caseSensitive: void 0,
    module: tech_radar_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/privacy": {
    id: "routes/privacy",
    parentId: "root",
    path: "privacy",
    index: void 0,
    caseSensitive: void 0,
    module: privacy_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
export {
  default2 as assets,
  entry,
  routes
};
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9lc20vY2xpZW50LmpzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYWx0ai9wcm9qZWN0cy9jYWRvbGFicy5pby9hcHAvcm9vdC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9hbHRqL3Byb2plY3RzL2NhZG9sYWJzLmlvL2FwcC9yb3V0ZXMvYWlydGFibGUuZ2V0VGFibGUudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYWx0ai9wcm9qZWN0cy9jYWRvbGFicy5pby9hcHAvcm91dGVzL2NhcmVlcnMvJGNhcmVlcklkLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy92YWNhbmNpZXMudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYWx0ai9wcm9qZWN0cy9jYWRvbGFicy5pby9hcHAvcm91dGVzL2NhcmVlcnMvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYWx0ai9wcm9qZWN0cy9jYWRvbGFicy5pby9hcHAvcm91dGVzL2Nvb2tpZS1wb2xpY3kudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYWx0ai9wcm9qZWN0cy9jYWRvbGFicy5pby9hcHAvcm91dGVzL3RlY2gtcmFkYXIudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYWx0ai9wcm9qZWN0cy9jYWRvbGFicy5pby9hcHAvcm91dGVzL2NvbnRhY3QudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYWx0ai9wcm9qZWN0cy9jYWRvbGFicy5pby9hcHAvcm91dGVzL3ByaXZhY3kudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYWx0ai9wcm9qZWN0cy9jYWRvbGFicy5pby9hcHAvcm91dGVzL2luZGV4LnRzeCIsICI8c3RkaW4+Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmV4cG9ydCB7IEZvcm0sIExpbmssIExpbmtzLCBMaXZlUmVsb2FkLCBNZXRhLCBOYXZMaW5rLCBPdXRsZXQsIFByZWZldGNoUGFnZUxpbmtzLCBSZW1peEJyb3dzZXIsIFJlbWl4U2VydmVyLCBTY3JpcHRzLCBTY3JvbGxSZXN0b3JhdGlvbiwgdXNlQWN0aW9uRGF0YSwgdXNlQmVmb3JlVW5sb2FkLCB1c2VDYXRjaCwgdXNlRmV0Y2hlciwgdXNlRmV0Y2hlcnMsIHVzZUZvcm1BY3Rpb24sIHVzZUhyZWYsIHVzZUxvYWRlckRhdGEsIHVzZUxvY2F0aW9uLCB1c2VNYXRjaGVzLCB1c2VOYXZpZ2F0ZSwgdXNlTmF2aWdhdGlvblR5cGUsIHVzZU91dGxldCwgdXNlT3V0bGV0Q29udGV4dCwgdXNlUGFyYW1zLCB1c2VSZXNvbHZlZFBhdGgsIHVzZVNlYXJjaFBhcmFtcywgdXNlU3VibWl0LCB1c2VUcmFuc2l0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIE5hdkxpbmssXG4gIExpbmtzRnVuY3Rpb24sXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sIHVzZUNhdGNoXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIn4vc3R5bGVzL21haW4uY3NzXCI7XG5pbXBvcnQge3VzZUxvY2F0aW9ufSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwiQ2Fkb2xhYnMgLSBhYm91dCB1c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNhZG9sYWJzLiBXZSBhcmUgYW4gSVQgY29tcGFueSB3aXRoIGEgaGlnaCBsZXZlbCBvZiBleHBlcmllbmNlIGluIGNvbnN1bHRpbmcsIHNvZnR3YXJlIGVuaGFuY2VtZW50IGFuZCBidXNpbmVzcyBncm93dGggc29sdXRpb25zXCIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICAgIDxEb2N1bWVudD5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICByZXR1cm4gKFxuICAgICAgPERvY3VtZW50IHRpdGxlPVwiRXJyb3IhXCI+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGFnZS1ub3QtZm91bmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgICA8aDE+VGhlcmUgd2FzIGFuIGVycm9yPC9oMT5cbiAgICAgICAgICAgICAgPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKTtcblxuICBsZXQgbWVzc2FnZTtcbiAgc3dpdGNoIChjYXVnaHQuc3RhdHVzKSB7XG4gICAgY2FzZSA0MDE6XG4gICAgICBtZXNzYWdlID0gKFxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgT29wcyEgTG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gdmlzaXQgYSBwYWdlIHRoYXQgeW91IGRvIG5vdCBoYXZlIGFjY2Vzc1xuICAgICAgICAgICAgdG8uXG4gICAgICAgICAgPC9wPlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDA0OlxuICAgICAgbWVzc2FnZSA9IChcbiAgICAgICAgICA8cD5Pb3BzISBMb29rcyBsaWtlIHlvdSB0cmllZCB0byB2aXNpdCBhIHBhZ2UgdGhhdCBkb2VzIG5vdCBleGlzdC48L3A+XG4gICAgICApO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGNhdWdodC5kYXRhIHx8IGNhdWdodC5zdGF0dXNUZXh0KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgICA8RG9jdW1lbnQgdGl0bGU9e2Ake2NhdWdodC5zdGF0dXN9ICR7Y2F1Z2h0LnN0YXR1c1RleHR9YH0+XG4gICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhZ2Utbm90LWZvdW5kXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aDE+PGI+NDA0PC9iPiBQYWdlIE5vdCBGb3VuZDwvaDE+XG4gICAgICAgICAgICAgICAgICA8cD57bWVzc2FnZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRG9jdW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgIH06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdGl0bGU/OiBzdHJpbmc7XG59KSB7XG4gIHJldHVybiAoXG4gICAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLHVzZXItc2NhbGFibGU9eWVzLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT00LjAsIG1pbmltdW0tc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiaWU9ZWRnZVwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPVwiL2ltYWdlcy9mYXZpY29uLnBuZ1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNTd4NTdcIiBocmVmPVwiL2ltYWdlcy90b3VjaC1pY29ucy9hcHBsZS1pY29uLTU3eDU3LnBuZ1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNjB4NjBcIiBocmVmPVwiL2ltYWdlcy90b3VjaC1pY29ucy9hcHBsZS1pY29uLTYweDYwLnBuZ1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNzJ4NzJcIiBocmVmPVwiL2ltYWdlcy90b3VjaC1pY29ucy9hcHBsZS1pY29uLTcyeDcyLnBuZ1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNzZ4NzZcIiBocmVmPVwiL2ltYWdlcy90b3VjaC1pY29ucy9hcHBsZS1pY29uLTc2eDc2LnBuZ1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTE0eDExNFwiIGhyZWY9XCIvaW1hZ2VzL3RvdWNoLWljb25zL2FwcGxlLWljb24tMTE0eDExNC5wbmdcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjEyMHgxMjBcIiBocmVmPVwiL2ltYWdlcy90b3VjaC1pY29ucy9hcHBsZS1pY29uLTEyMHgxMjAucG5nXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNDR4MTQ0XCIgaHJlZj1cIi9pbWFnZXMvdG91Y2gtaWNvbnMvYXBwbGUtaWNvbi0xNDR4MTQ0LnBuZ1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTUyeDE1MlwiIGhyZWY9XCIvaW1hZ2VzL3RvdWNoLWljb25zL2FwcGxlLWljb24tMTUyeDE1Mi5wbmdcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPVwiL2ltYWdlcy90b3VjaC1pY29ucy9hcHBsZS1pY29uLTE4MHgxODAucG5nXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTkyeDE5MlwiICBocmVmPVwiL2ltYWdlcy90b3VjaC1pY29ucy9hbmRyb2lkLWljb24tMTkyeDE5Mi5wbmdcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIzMngzMlwiIGhyZWY9XCIvaW1hZ2VzL3RvdWNoLWljb25zL2Zhdmljb24tMzJ4MzIucG5nXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiOTZ4OTZcIiBocmVmPVwiL2ltYWdlcy90b3VjaC1pY29ucy9mYXZpY29uLTk2eDk2LnBuZ1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE2eDE2XCIgaHJlZj1cIi9pbWFnZXMvdG91Y2gtaWNvbnMvZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9tYW5pZmVzdC5qc29uXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiI2ZmZmZmZlwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUltYWdlXCIgY29udGVudD1cIi9pbWFnZXMvdG91Y2gtaWNvbnMvbXMtaWNvbi0xNDR4MTQ0LnBuZ1wiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiM0ZGUzYjZcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjNGRlM2I2XCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1uYXZidXR0b24tY29sb3JcIiBjb250ZW50PVwiIzRkZTNiNlwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLXN0YXR1cy1iYXItc3R5bGVcIiBjb250ZW50PVwiIzRkZTNiNlwiIC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJDYWRvbGFic1wiIC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJXZSBhcmUgYW4gSVQgY29tcGFueSB3aXRoIGEgaGlnaCBsZXZlbCBvZiBleHBlcmllbmNlIGluIGNvbnN1bHRpbmcsIHNvZnR3YXJlIGVuaGFuY2VtZW50IGFuZCBidXNpbmVzcyBncm93dGggc29sdXRpb25zXCIgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwiYXJ0aWNsZVwiLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL2NhZG9sYWJzLmlvXCIvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9jYWRvbGFicy5pby9pbWFnZXMvdG91Y2gtaWNvbnMvYXBwbGUtaWNvbi0xODB4MTgwLnBuZ1wiLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOnNlY3VyZV91cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9jYWRvbGFicy5pby9pbWFnZXMvdG91Y2gtaWNvbnMvYXBwbGUtaWNvbi0xODB4MTgwLnBuZ1wiLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOnR5cGVcIiBjb250ZW50PVwiaW1hZ2UvcG5nXCIvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiMTgwXCIgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOmhlaWdodFwiIGNvbnRlbnQ9XCIxODBcIiAvPlxuICAgICAgICAgIDxzY3JpcHQgZGVmZXI9XCJkZWZlclwiIHNyYz1cIi9qcy9tYWluLmpzXCIvPlxuICAgICAgICAgIDxNZXRhIC8+XG4gICAgICAgICAgPExpbmtzIC8+XG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyA8TGl2ZVJlbG9hZCAvPiA6IG51bGx9XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfTogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48e30+KSB7XG4gIGxldCBhY3RpdmVDbGFzc05hbWUgPSBcImFjdGl2ZVwiO1xuICBsZXQgbWVudUlzQWN0aXZlID0gZmFsc2U7XG4gIGxldCBtZW51Q2xhc3MgPSB1c2VMb2NhdGlvbigpLnBhdGhuYW1lID09PSAnLycgPyAnbWVudSBkZWNvcmF0ZWQnIDogJ21lbnUnO1xuICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZW1peC1hcHBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cbiAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NhZG9fbG9nby5zdmdcIiBhbHQ9XCJDYWRvbGFic1wiIHdpZHRoPVwiMTM1XCIgaGVpZ2h0PVwiNzhcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXttZW51Q2xhc3N9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS10b2dnbGVyXCIgb25DbGljaz17ICgpID0+IG1lbnVJc0FjdGl2ZT10cnVlIH0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1bFwiPlxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgICAgICB0bz1cIi9cIlxuICAgICAgICAgICAgICAgICAgICAgIHByZWZldGNoPVwiaW50ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+IGlzQWN0aXZlID8gYWN0aXZlQ2xhc3NOYW1lIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BYm91dCBDQURPPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgICAgICB0bz1cIi9jYXJlZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICBwcmVmZXRjaD1cImludGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PiBpc0FjdGl2ZSA/IGFjdGl2ZUNsYXNzTmFtZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q2FyZWVyczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgdG89XCIvY29udGFjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgcHJlZmV0Y2g9XCJpbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT4gaXNBY3RpdmUgPyBhY3RpdmVDbGFzc05hbWUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkNvbnRhY3RzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9DYWRvLUxhYnNcIiByZWw9XCJub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9naXRodWIuc3ZnXCIgYWx0PVwiZ2l0aHViXCIgd2lkdGg9XCI4M1wiIGhlaWdodD1cIjE5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgICAgICB0bz1cIi90ZWNoLXJhZGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICBwcmVmZXRjaD1cImludGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PiBpc0FjdGl2ZSA/IGFjdGl2ZUNsYXNzTmFtZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGltZyBzcmM9XCIvaW1hZ2VzL3RlY2hyYWRhci5zdmdcIiBhbHQ9XCJ0ZWNocmFkYXJcIiB3aWR0aD1cIjk5XCIgaGVpZ2h0PVwiMTZcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZHJlc3NcIj5cbiAgICAgICAgICAgICAgNDExLCA0L0YsIEF1c3RpbiBUb3dlciwgMjItMjYsIEF1c3RpbiBBdi4sIDxiciAvPlRzaW1zaGF0c3VpLCBLb3dsb29uLCBIb25nIEtvbmdcbiAgICAgICAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICAgICAgICA5IFNweXJvdSBLeXByaWFub3UgQXYuIE9mZmljZSAxLCAzMDcwLCBMaW1hc3NvbCwgQ3lwcnVzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgICAgICB0bz1cIi9cIlxuICAgICAgICAgICAgICAgICAgICAgIHByZWZldGNoPVwiaW50ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+IGlzQWN0aXZlID8gYWN0aXZlQ2xhc3NOYW1lIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBBYm91dCBDQURPXG4gICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgICAgIHRvPVwiL2NhcmVlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgIHByZWZldGNoPVwiaW50ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+IGlzQWN0aXZlID8gYWN0aXZlQ2xhc3NOYW1lIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBDYXJlZXJzXG4gICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgICAgIHRvPVwiL2NvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgICAgIHByZWZldGNoPVwiaW50ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+IGlzQWN0aXZlID8gYWN0aXZlQ2xhc3NOYW1lIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBDb250YWN0c1xuICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQ2Fkby1MYWJzXCIgcmVsPVwibm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2dpdGh1Yi5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJnaXRodWJcIlxuICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjgzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTlcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvdGVjaC1yYWRhclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvdGVjaHJhZGFyLnN2Z1wiIGFsdD1cInRlY2hyYWRhclwiIHdpZHRoPVwiOTlcIiBoZWlnaHQ9XCIxNlwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbGlua3NcIj5cbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgIHRvPVwiL3ByaXZhY3lcIlxuICAgICAgICAgICAgICAgICAgcHJlZmV0Y2g9XCJpbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PiBpc0FjdGl2ZSA/IGFjdGl2ZUNsYXNzTmFtZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFByaXZhY3kgUG9saWN5XG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgIHRvPVwiL2Nvb2tpZS1wb2xpY3lcIlxuICAgICAgICAgICAgICAgICAgcHJlZmV0Y2g9XCJpbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PiBpc0FjdGl2ZSA/IGFjdGl2ZUNsYXNzTmFtZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENvb2tpZSBQb2xpY3lcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICAoe3JlcXVlc3R9KSA9PiB7XG4gICAgY29uc3QgYmFzZVVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICAgIHJldHVybiBhd2FpdCBmZXRjaChgJHtiYXNlVXJsLm9yaWdpbn0vYXBpL2FpcnRhYmxlL2dldFRhYmxlYCwge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCJcbiAgICB9KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBWYWNhbmNpZXNMaXN0IGZyb20gXCJ+L2NvbXBvbmVudHMvdmFjYW5jaWVzXCI7XG5pbXBvcnQge3VzZUZldGNoZXIsIHVzZUxvYWRlckRhdGF9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICh7IGRhdGEgfSkgPT4ge1xuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4ge3RpdGxlOiBcIk9vcHMuLi5cIn1cbiAgfVxuICBjb25zdCBmaW5kQ3VycmVudFZhY2FuY3kgPSBkYXRhLmxpc3QucmVjb3Jkcy5maWx0ZXIoYXJyID0+IGFyci5zbHVnID09PSBkYXRhLmN1cnJlbnRTbHVnKTtcbiAgY29uc3QgY3VycmVudFZhY2FuY3kgPSBmaW5kQ3VycmVudFZhY2FuY3lbMF0uZmllbGRzO1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBjdXJyZW50VmFjYW5jeS5wYWdlX3RpdGxlID8gYCR7Y3VycmVudFZhY2FuY3kucGFnZV90aXRsZX1gIDogXCJWYWNhbmN5XCJcbiAgfVxufTtcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtyZXF1ZXN0LCBwYXJhbXN9KSA9PiB7XG4gIGNvbnN0IGJhc2VVcmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgbGV0IGRhdGE9IHtsaXN0OiBudWxsLCBjdXJyZW50U2x1ZzogbnVsbH07XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybC5vcmlnaW59L2FwaS9haXJ0YWJsZS9nZXRUYWJsZWAsIHtcbiAgICBtZXRob2Q6IFwiR0VUXCJcbiAgfSk7XG4gIGRhdGEubGlzdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgZGF0YS5saXN0LnJlY29yZHMubWFwKGl0ZW09Pml0ZW0uc2x1ZyA9IGl0ZW0uZmllbGRzLnNsdWcpO1xuICBkYXRhLmN1cnJlbnRTbHVnID0gcGFyYW1zLmNhcmVlcklkO1xuICBpZiAoIWRhdGEubGlzdC5yZWNvcmRzLmZpbHRlcihhcnIgPT4gYXJyLnNsdWcgPT09IHBhcmFtcy5jYXJlZXJJZCkubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKFwiTm90IEZvdW5kXCIsIHsgc3RhdHVzOiA0MDQgfSk7XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER5bmFtaWNDYXJlZXIoKSB7XG4gIGNvbnN0IGNhcmVlckRhdGFSYXcgPSB1c2VMb2FkZXJEYXRhKCkubGlzdC5yZWNvcmRzLmZpbHRlcihhcnIgPT4gYXJyLnNsdWcgPT09dXNlTG9hZGVyRGF0YSgpLmN1cnJlbnRTbHVnKTtcbiAgY29uc3QgY2FyZWVyRGF0YSA9IGNhcmVlckRhdGFSYXdbMF0uZmllbGRzO1xuICBsZXQgZmV0Y2hlciA9IHVzZUZldGNoZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaGVyLmxvYWQoJy9haXJ0YWJsZS9nZXRUYWJsZScpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIgYmFjay10by1wYWdlXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIi9jYXJlZXJzXCI+YmFjayB0byBBbGwgVmFjYW5jaWVzPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidmFjYW5jeVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgPGgxPntjYXJlZXJEYXRhLnBhZ2VfdGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogY2FyZWVyRGF0YS5wYWdlX3Nob3J0X2Rlc2NyfX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhvdy13ZS1kby1pdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxuICAgICAgICAgICAgICA8aDI+SE9XIHdlIGRvIGl0PC9oMj5cbiAgICAgICAgICAgICAgPHA+TW9zdCBvZiB0aGUgbmV3IHNlcnZpY2VzIGFyZSBkZXZlbG9wZWQgYW5kIHJ1biBpbiBhY2NvcmRhbmNlIHdpdGggPGI+bWljcm9zZXJ2aWNlcyBhcmNoaXRlY3R1cmU8L2I+LlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPldlIGludmVzdCBpbnRvIG91ciBvd24gPGI+S3ViZXJuZXRlcyBwbGF0Zm9ybTwvYj4uPC9wPlxuICAgICAgICAgICAgICA8cD5XZSBhZG9wdCB0aGUgPGI+Z1JQQzwvYj4gZnJhbWV3b3JrIGluIG91ciBwbGF0Zm9ybSBvciBtaWdyYXRlIG91ciBpbnRlcmZhY2VzIHRvIGEgPGI+bWljcm8tZnJvbnRlbmRcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPC9iPi48L3A+XG4gICAgICAgICAgICAgIDxwPldlIGFjdGl2ZWx5IHVzZSBhbmQgc3VwcG9ydCA8Yj5vcGVuIHNvdXJjZSBwcm9kdWN0czwvYj4uPC9wPlxuICAgICAgICAgICAgICA8cD5Zb3UgY2FuIGhhdmUgYSBsb29rIGF0IHNvbWUgb2Ygb3VyIGNvZGUgaW4gb3VyIDxiciAvPiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0NhZG8tTGFic1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+R2l0SHViXG4gICAgICAgICAgICAgICAgYWNjb3VudDwvYT4uPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYWJvdXQtdmFjYW5jeVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAge2NhcmVlckRhdGEucmVzcG9uc2liaWxpdGllcyAmJlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vcmUtaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5ZT1VSIFJlc3BvbnNpYmlsaXRpZXM6PC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBjYXJlZXJEYXRhLnJlc3BvbnNpYmlsaXRpZXN9fSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtjYXJlZXJEYXRhLnJlcXVpcmVtZW50cyAmJlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vcmUtaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5PVVIgUmVxdWlyZW1lbnRzOjwvZGl2PlxuICAgICAgICAgICAgICAgIDx1bCBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogY2FyZWVyRGF0YS5yZXF1aXJlbWVudHN9fSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtjYXJlZXJEYXRhLmNvbnNpZGVyZWQgJiZcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JlLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+Q09OU0lERVJFRCBhcyBhbiBhZHZhbnRhZ2U6PC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBjYXJlZXJEYXRhLmNvbnNpZGVyZWR9fSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtjYXJlZXJEYXRhLndlX29mZmVyICYmXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9yZS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPldIQVQgd2Ugb2ZmZXI6PC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBjYXJlZXJEYXRhLndlX29mZmVyIH19IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JlLWluZm9cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFwcGx5IGJ5IHNlbmRpbmcgQ1YgdG8gPGEgaHJlZj1cIm1haWx0bzpockBjYWRvbGFicy5pb1wiPmhyQGNhZG9sYWJzLmlvPC9hPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2Fkby1kb1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgPGgyPkNBRE8gRE88L2gyPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlRyYWZmaWMgTWFuYWdlbWVudCBTeXN0ZW1zPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyXCI+dG8gYm9vc3QgeW91ciBncm93dGghPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+Q1JNIFBsYXRmb3JtczwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjclwiPnRvIGJyaW5nIHNvbWUgb3JkZXIgdG8geW91ciBEYXRhITwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlBheW1lbnQgc3lzdGVtczwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjclwiPndlIGtub3cgaG93IHRvIG1ha2UgbW9uZXkgd29yayBmb3IgeW91ITwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkJJIFN5c3RlbXM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JcIj5vdXIgc2VjcmV0cyB0byBhIGdvb2QgbmlnaHQncyBzbGVlcDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFudGktRnJhdWQgU29sdXRpb25zPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyXCI+b3VyIHNlY3JldHMgdG8gdGhlIEJFU1QgbmlnaHQncyBzbGVlcDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPk1hY2hpbmUgTGVhcm5pbmcgUHJvZHVjdHM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JcIj5mb3IgdGhlIGxvdmUgb2YgUm9ib3RzITwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICB7ZmV0Y2hlci5kYXRhID8gPFZhY2FuY2llc0xpc3QgZGF0YT17ZmV0Y2hlci5kYXRhfSAvPiA6IG51bGx9XG4gICAgICA8L2Rpdj5cbik7XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmFjYW5jaWVzTGlzdChkYXRhKSB7XG4gICAgY29uc3QgdmFjYW5jeUxpc3QgPSBKU09OLnBhcnNlKGRhdGEuZGF0YSkucmVjb3JkcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYWRvLWxvb2tpbmctZm9yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+Q0FETyBpcyBsb29raW5nIGZvcjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JcIj5JZiB5b3UgYXJlIGR5bmFtaWMgYW5kIG1vdGl2YXRlZCB0byBkbyBzb21ldGhpbmcgYmlnLCBjaGVjayBvdXQgb3VyIG9wZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9ucyFcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlldy1hbGxcIj48YSBocmVmPVwiL2NhcmVlcnNcIj5WaWV3IGFsbCB2YWNhbmNpZXM8L2E+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7dmFjYW5jeUxpc3QubWFwKCh2YWNhbmN5LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt2YWNhbmN5LmZpZWxkcy51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3ZhY2FuY3kuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17YC9jYXJlZXJzLyR7dmFjYW5jeS5maWVsZHMuc2x1Z31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZmV0Y2g9XCJpbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e3ZhY2FuY3kuZmllbGRzLmNhcmRfdGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyXCI+e3ZhY2FuY3kuZmllbGRzLmNhcmRfZGVzY3J9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2VuZC1jdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpockBjYWRvbGFicy5pb1wiPlNlbmQgeW91ciBDVjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG4iLCAiaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBWYWNhbmNpZXNMaXN0IGZyb20gXCJ+L2NvbXBvbmVudHMvdmFjYW5jaWVzXCI7XG5pbXBvcnQge0xvYWRlckZ1bmN0aW9uLCB1c2VGZXRjaGVyLCB1c2VMb2FkZXJEYXRhfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwiQ2Fkb2xhYnMgLSBjYXJlZXJzXCIsXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmVlckluZGV4KCkge1xuICAgIGxldCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBmZXRjaGVyLmxvYWQoJy9haXJ0YWJsZS9nZXRUYWJsZScpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYWJvdXQtY2FyZWVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICA8aDE+Q0FETyBDYXJlZXJzPC9oMT5cbiAgICAgICAgICAgIDxwPklmIHlvdSBhcmUgPGI+ZHluYW1pYyBhbmQgbW90aXZhdGVkPC9iPiB0byBkbyBzb21ldGhpbmcgYmlnLCBjaGVjayBvdXQgb3VyIG9wZW4gcG9zaXRpb25zITwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fkby1oYXMtZGVuaWVzXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNBRE8gSEFTPC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgPGxpPlByb2Zlc3Npb25hbCBhbmQgbW90aXZhdGVkIHRlYW08L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPkNsZWFyIGdvYWxzPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5QZXJzb25hbCByZXNwb25zaWJpbGl0eSBvZiBlYWNoIHRlYW0gbWVtYmVyPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5TdXBwb3J0aXZlIGFuZCBmcmllbmRseSBUZWFtPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5MYXRlc3QgdGVjaG5vbG9neSB0b29sczwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PGI+Q2hlY2sgb3V0IDwvYj4gPGEgaHJlZj1cIi90ZWNoLXJhZGFyXCI+IG91ciBUZWNoIFJhZGFyITwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5DQURPIERFTklFUzwvZGl2PlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIDxsaT5PdmVyY29tcGxpY2F0ZWQgcHJvZHVjdCBpbmZyYXN0cnVjdHVyZTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+RmVhciBvZiBuZXcgdGVjaG5vbG9neTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+Q3JlYXRpbmcgcHJvY2Vzc2VzIGZvciB0aGUgc2FrZSBvZiBwcm9jZXNzZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPkFybXkgZGlzY2lwbGluZTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+VXNlbGVzcyBhbmQgZW5kbGVzcyBtZWV0aW5nczwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+QnVyZWF1Y3JhY3kgYW5kIHN0cmljdCBydWxlczwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZWNvbWUtb25lLW9mLXVzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICA8aDI+PHNwYW4+VE8gQkVDT01FIG9mIG9uZSBvZiB1cyB5b3Ugd2lsbCBoYXZlIHRvOjwvc3Bhbj48L2gyPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3N0ZXAtMS5zdmdcIiBhbHQ9XCJTdGVwIDFcIiAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFwcGx5IHRoZSB2YWNhbmN5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JcIj5ieSBzZW5kIHlvdXIgQ1Y8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3N0ZXAtMi5zdmdcIiBhbHQ9XCJTdGVwIDJcIiAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlBhc3MgdGVjaCBpbnRlcnZpZXc8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjclwiPmJ5IFpPT00gb3IgaW4gb3VyIG9mZmljZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc3RlcC0zLnN2Z1wiIGFsdD1cIlN0ZXAgM1wiIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+U2hvdyB5b3VyIHByb2plY3RzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JcIj5vciBkbyBvcHRpb25hbCB0ZXN0IHRhc2s8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3N0ZXAtNC5zdmdcIiBhbHQ9XCJTdGVwIDNcIiAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlBhc3MgMm5kIGludGVydmlldzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyXCI+d2l0aCBvdXIgZnJpZW5kbHkgQ1RPPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdldC1vZmZlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+R2V0IGFuIG9mZmVyITwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyXCI+YW5kIGNlbGVicmF0ZSBpdCB3aXRoIHVzITwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAge2ZldGNoZXIuZGF0YSA/IDxWYWNhbmNpZXNMaXN0IGRhdGE9e2ZldGNoZXIuZGF0YX0gLz4gOiBudWxsfVxuICAgICAgPC9kaXY+XG4pO1xufVxuIiwgImltcG9ydCB0eXBlIHtNZXRhRnVuY3Rpb259IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHt1c2VGZXRjaGVyfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBWYWNhbmNpZXNMaXN0IGZyb20gXCJ+L2NvbXBvbmVudHMvdmFjYW5jaWVzXCI7XG5pbXBvcnQge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIkNhZG9sYWJzIC0gY29va2llIHBvbGljeVwiLFxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcml2YWN5KCkge1xuICAgIGxldCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBmZXRjaGVyLmxvYWQoJy9haXJ0YWJsZS9nZXRUYWJsZScpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgPGgxPkNvb2tpZSBQb2xpY3k8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgIDxoMz5XaGF0IGFyZSBjb29raWVzPzwvaDM+XG4gICAgICAgICAgICAgIDxwPkNvb2tpZXMgYXJlIHRleHQgZmlsZXMgcGxhY2VkIG9uJm5ic3A7eW91ciBjb21wdXRlciB0byZuYnNwO2NvbGxlY3Qgc3RhbmRhcmQgSW50ZXJuZXQgbG9nIGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgYW5kIHZpc2l0b3IgYmVoYXZpb3IgaW5mb3JtYXRpb24uIFdoZW4geW91IHZpc2l0IG91ciB3ZWJzaXRlcywgd2UmbmJzcDttYXkgY29sbGVjdCBpbmZvcm1hdGlvbiBmcm9tIHlvdVxuICAgICAgICAgICAgICAgIGF1dG9tYXRpY2FsbHkgdGhyb3VnaCBjb29raWVzIG9yJm5ic3A7c2ltaWxhciB0ZWNobm9sb2d5LjwvcD5cbiAgICAgICAgICAgICAgPHA+Rm9yIGZ1cnRoZXIgaW5mb3JtYXRpb24sIHZpc2l0IGFsbGFib3V0Y29va2llcy5vcmcuPC9wPlxuICAgICAgICAgICAgICA8aDM+SG93IGRvJm5ic3A7d2UmbmJzcDt1c2UgY29va2llcz88L2gzPlxuICAgICAgICAgICAgICA8cD5PdXIgQ29tcGFueSB1c2VzIGNvb2tpZXMgaW4mbmJzcDthJm5ic3A7cmFuZ2Ugb2YmbmJzcDt3YXlzIHRvJm5ic3A7aW1wcm92ZSB5b3VyIGV4cGVyaWVuY2Ugb24mbmJzcDtvdXJcbiAgICAgICAgICAgICAgICB3ZWJzaXRlLCBpbmNsdWRpbmc6PC9wPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPktlZXBpbmcgeW91IHNpZ25lZCBpbjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlVuZGVyc3RhbmRpbmcgaG93IHlvdSB1c2Ugb3VyIHdlYnNpdGU8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8aDM+V2hhdCB0eXBlcyBvZiZuYnNwO2Nvb2tpZXMgZG8mbmJzcDt3ZSZuYnNwO3VzZT88L2gzPlxuICAgICAgICAgICAgICA8cD5UaGVyZSBhcmUgYSZuYnNwO251bWJlciBvZiZuYnNwO2RpZmZlcmVudCB0eXBlcyBvZiZuYnNwO2Nvb2tpZXMsIGhvd2V2ZXIsIG91ciB3ZWJzaXRlIHVzZXM6PC9wPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPjxiPkZ1bmN0aW9uYWxpdHk8L2I+Jm5ic3A7Jm1kYXNoOyBDb21wYW55IHVzZXMgdGhlc2UgY29va2llcyBzbyZuYnNwO3RoYXQgd2UmbmJzcDtyZWNvZ25pemUgeW91XG4gICAgICAgICAgICAgICAgICBvbiZuYnNwO291ciB3ZWJzaXRlIGFuZCByZW1lbWJlciB5b3VyIHByZXZpb3VzbHkgc2VsZWN0ZWQgcHJlZmVyZW5jZXMuIFRoZXNlIGNvdWxkIGluY2x1ZGUgd2hhdFxuICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UgeW91IHByZWZlciBhbmQgdGhlIGxvY2F0aW9uIHlvdSBhcmUmbmJzcDtpbi4gQSZuYnNwO21peCBvZiZuYnNwO2ZpcnN0LXBhcnR5IGFuZCB0aGlyZC1wYXJ0eVxuICAgICAgICAgICAgICAgICAgY29va2llcyBhcmUgdXNlZC5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48Yj5BZHZlcnRpc2luZzwvYj4mbmJzcDsmbWRhc2g7IENvbXBhbnkgdXNlcyB0aGVzZSBjb29raWVzIHRvJm5ic3A7Y29sbGVjdCBpbmZvcm1hdGlvbiBhYm91dCB5b3VyXG4gICAgICAgICAgICAgICAgICB2aXNpdCB0byZuYnNwO291ciB3ZWJzaXRlLCB0aGUgY29udGVudCB5b3Ugdmlld2VkLCB0aGUgbGlua3MgeW91IGZvbGxvd2VkLCBhbmQgaW5mb3JtYXRpb24gYWJvdXQgeW91clxuICAgICAgICAgICAgICAgICAgYnJvd3NlciwgZGV2aWNlLCBhbmQgeW91ciZuYnNwO0lQIGFkZHJlc3MuIFRoZSBjb21wYW55IHNvbWV0aW1lcyBzaGFyZXMgc29tZSBsaW1pdGVkIGFzcGVjdHNcbiAgICAgICAgICAgICAgICAgIG9mJm5ic3A7dGhpcyBkYXRhIHdpdGggdGhpcmQgcGFydGllcyBmb3IgYWR2ZXJ0aXNpbmcgcHVycG9zZXMuIFdlJm5ic3A7bWF5IGFsc28gc2hhcmUgb25saW5lIGRhdGFcbiAgICAgICAgICAgICAgICAgIGNvbGxlY3RlZCB0aHJvdWdoIGNvb2tpZXMgd2l0aCBvdXIgYWR2ZXJ0aXNpbmcgcGFydG5lcnMuIFRoaXMgbWVhbnMgdGhhdCB3aGVuIHlvdSB2aXNpdCBhbm90aGVyXG4gICAgICAgICAgICAgICAgICB3ZWJzaXRlLCB5b3UgbWF5IGJlJm5ic3A7c2hvd24gYWR2ZXJ0aXNpbmcgYmFzZWQgb24mbmJzcDt5b3VyIGJyb3dzaW5nIHBhdHRlcm5zIG9uJm5ic3A7b3VyIHdlYnNpdGUuXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPGgzPkhvdyB0byZuYnNwO21hbmFnZSBjb29raWVzPC9oMz5cbiAgICAgICAgICAgICAgPHA+WW91IGNhbiBzZXQgeW91ciBicm93c2VyIG5vdCB0byZuYnNwO2FjY2VwdCBjb29raWVzLCBhbmQgdGhlIGFib3ZlIHdlYnNpdGUgdGVsbHMgeW91IGhvdyB0byZuYnNwO3JlbW92ZVxuICAgICAgICAgICAgICAgIGNvb2tpZXMgZnJvbSB5b3VyIGJyb3dzZXIuIEhvd2V2ZXIsIGluJm5ic3A7YSZuYnNwO2ZldyBjYXNlcywgc29tZSBvZiZuYnNwO291ciB3ZWJzaXRlIGZlYXR1cmVzIG1heSBub3RcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBhcyZuYnNwO2EmbmJzcDtyZXN1bHQuPC9wPlxuICAgICAgICAgICAgICA8aDM+UHJpdmFjeSBwb2xpY2llcyBvZiZuYnNwO290aGVyIHdlYnNpdGVzPC9oMz5cbiAgICAgICAgICAgICAgPHA+VGhlIGNvbXBhbnkgd2Vic2l0ZSBjb250YWlucyBsaW5rcyB0byZuYnNwO290aGVyIHdlYnNpdGVzLiBPdXIgcHJpdmFjeSBwb2xpY3kgYXBwbGllcyBvbmx5IHRvJm5ic3A7b3VyXG4gICAgICAgICAgICAgICAgd2Vic2l0ZSwgc28mbmJzcDtpZiZuYnNwO3lvdSBjbGljayBvbiZuYnNwO2EmbmJzcDtsaW5rIHRvJm5ic3A7YW5vdGhlciB3ZWJzaXRlLCB5b3Ugc2hvdWxkIHJlYWQgdGhlaXJcbiAgICAgICAgICAgICAgICBwcml2YWN5IHBvbGljeS48L3A+XG4gICAgICAgICAgICAgIDxoMz5Ib3cgdG8mbmJzcDtjb250YWN0Jm5ic3A7dXM8L2gzPlxuICAgICAgICAgICAgICA8cD5JZiZuYnNwO3lvdSBoYXZlIGFueSBxdWVzdGlvbnMgYWJvdXQgT3VyIENvbXBhbnkmcnNxdW87cyBwcml2YWN5IHBvbGljeSwgdGhlIGRhdGEgd2UmbmJzcDtob2xkXG4gICAgICAgICAgICAgICAgb24mbmJzcDt5b3UsIG9yJm5ic3A7eW91IHdvdWxkIGxpa2UgdG8mbmJzcDtleGVyY2lzZSBvbmUgb2YmbmJzcDt5b3VyIGRhdGEgcHJvdGVjdGlvbiByaWdodHMsIHBsZWFzZVxuICAgICAgICAgICAgICAgIGRvJm5ic3A7bm90IGhlc2l0YXRlIHRvJm5ic3A7Y29udGFjdCZuYnNwO3VzLjwvcD5cbiAgICAgICAgICAgICAgPGJsb2NrcXVvdGU+XG4gICAgICAgICAgICAgICAgT3VyIGNvcmUgdmFsdWUgaXMmbmJzcDt0byZuYnNwO2JlJm5ic3A7Z2VudWluZWx5IGhlbHBmdWwgYW5kIGVmZmVjdGl2ZS4gV2UmbmJzcDtpbnZlc3QgaW4mbmJzcDtvdXJcbiAgICAgICAgICAgICAgICBUZWFtJnJzcXVvO3MgZGV2ZWxvcG1lbnQgYW5kIGVkdWNhdGlvbiBhbmQgY29uc3RhbnRseSBzZWFyY2ggZm9yIHdheXMgdG8mbmJzcDtmdXJ0aGVyIG9wdGltaXNlIGFuZFxuICAgICAgICAgICAgICAgIGltcHJvdmUgc28mbmJzcDt0aGF0IHdlJm5ic3A7Y2FuIHN0YXkgb24mbmJzcDt0b3Agb2YmbmJzcDtvdXIgZ2FtZS5cbiAgICAgICAgICAgICAgICA8YnIvPjxjaXRlPiZtZGFzaDsmbmJzcDtDVE8gQ2FkbyBMYWJzPC9jaXRlPlxuICAgICAgICAgICAgICA8L2Jsb2NrcXVvdGU+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAge2ZldGNoZXIuZGF0YSA/IDxWYWNhbmNpZXNMaXN0IGRhdGE9e2ZldGNoZXIuZGF0YX0gLz4gOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUge01ldGFGdW5jdGlvbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge3VzZUZldGNoZXJ9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IFZhY2FuY2llc0xpc3QgZnJvbSBcIn4vY29tcG9uZW50cy92YWNhbmNpZXNcIjtcbmltcG9ydCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwiQ2Fkb2xhYnMgLSB0ZWFjaCByYWRhclwiLFxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcml2YWN5KCkge1xuICAgIGxldCBmZXRjaGVyID0gdXNlRmV0Y2hlcigpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoZXIubG9hZCgnL2FpcnRhYmxlL2dldFRhYmxlJyk7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZWNoLXJhZGFyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICA8aWZyYW1lIHNyYz1cImh0dHBzOi8vY2Fkb2xhYnMtdGVjaHJhZGFyLnMzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL2luZGV4Lmh0bWxcIiBoZWlnaHQ9XCIxMjAwXCIgd2lkdGg9XCIxMDAlXCIgdGl0bGU9XCJUZWNoIHJhZGFyXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIHtmZXRjaGVyLmRhdGEgPyA8VmFjYW5jaWVzTGlzdCBkYXRhPXtmZXRjaGVyLmRhdGF9IC8+IDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCAiaW1wb3J0IHR5cGUge0FjdGlvbkZ1bmN0aW9uLCBNZXRhRnVuY3Rpb259IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHtGb3JtLCB1c2VGZXRjaGVyLCB1c2VUcmFuc2l0aW9ufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBWYWNhbmNpZXNMaXN0IGZyb20gXCJ+L2NvbXBvbmVudHMvdmFjYW5jaWVzXCI7XG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJDYWRvbGFicyAtIGNvbnRhY3RcIixcbiAgfVxufTtcblxuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7cmVxdWVzdH0pID0+IHtcbiAgYXdhaXQgbmV3IFByb21pc2UoKHJlcykgPT4gc2V0VGltZW91dChyZXMsIDIwMDApKTtcbiAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgYmFzZVVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmwub3JpZ2lufS9hcGkvYWlydGFibGUvc2VuZE1lc3NhZ2VgLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogYm9keSxcbiAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtyZXR1cm4gcmVzcG9uc2UuanNvbigpfSlcbiAgICAgIC5jYXRjaChlID0+IHtlLm1lc3NhZ2V9KTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XG4gIGxldCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xuICBsZXQgZmV0Y2hlciA9IHVzZUZldGNoZXIoKTtcbiAgbGV0IGZvcm1SZWYgPSB1c2VSZWYoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHRyYW5zaXRpb24uc3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgICAgICAgIGZvcm1SZWYuY3VycmVudD8ucmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBmZXRjaGVyLmxvYWQoJy9haXJ0YWJsZS9nZXRUYWJsZScpO1xuICAgICAgfSwgW3RyYW5zaXRpb25dXG4gICk7XG4gIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWN0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICA8aDE+V2UgYXJlIGFuIElUIGNvbXBhbnkgd2l0aCBhIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFya2VkXCI+aGlnaCBsZXZlbCBvZiBleHBlcmllbmNlPC9zcGFuPiBpbiA8Yj5jb25zdWx0aW5nPC9iPiwgPGI+c29mdHdhcmVcbiAgICAgICAgICAgICAgZW5oYW5jZW1lbnQ8L2I+IGFuZCA8Yj5idXNpbmVzcyBncm93dGggc29sdXRpb25zPC9iPlxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1mb3JtXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1mb3JtLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgPGgyPkxldFx1MjAxOXMgdGFsazwvaDI+XG4gICAgICAgICAgICAgICAgPHA+Rm9yIGFueSBpbnF1aXJpZXMgcGxlYXNlIGNvbnRhY3QgdXMgYXQgPGEgaHJlZj1cIm1haWx0bzppbmZvQGNhZG9sYWJzLmlvXCI+aW5mb0BjYWRvbGFicy5pbzwvYT48L3A+XG4gICAgICAgICAgICAgICAgPEZvcm0gcmVmPXtmb3JtUmVmfSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LW91dGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgbmFtZT1cIm5hbWVcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LW91dGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGF0dGVybj1cIl5bQS1aYS16MC05Ll8lKy1dK0BbYS16MC05Li1dK1xcLlthLXpdezIsMTB9JFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtb3V0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJtZXNzYWdlXCIgaWQ9XCJcIiBjb2xzPVwiMzBcIiByb3dzPVwiN1wiIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtb3V0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZW5kXCI+U2VuZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7dHJhbnNpdGlvbi5zdGF0ZSA9PT0gXCJzdWJtaXR0aW5nXCIgJiZcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPllvdXIgbWVzc2FnZSBoYXMgYmVlbiBzZW50PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIHtmZXRjaGVyLmRhdGEgPyA8VmFjYW5jaWVzTGlzdCBkYXRhPXtmZXRjaGVyLmRhdGF9IC8+IDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHtNZXRhRnVuY3Rpb259IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHt1c2VGZXRjaGVyfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBWYWNhbmNpZXNMaXN0IGZyb20gXCJ+L2NvbXBvbmVudHMvdmFjYW5jaWVzXCI7XG5pbXBvcnQge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIkNhZG9sYWJzIC0gcHJpdmFjeSBwb2xpY3lcIixcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpdmFjeSgpIHtcbiAgICBsZXQgZmV0Y2hlciA9IHVzZUZldGNoZXIoKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZmV0Y2hlci5sb2FkKCcvYWlydGFibGUvZ2V0VGFibGUnKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgICA8aDE+UHJpdmFjeSBQb2xpY3k8L2gxPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIHByaXZhY3kgcG9saWN5IHdpbGwgZXhwbGFpbiBob3cmbmJzcDt3ZSAoaGVyZWluYWZ0ZXIgJnF1b3Q7Q29tcGFueSZxdW90OykgdXNlcyB0aGUgcGVyc29uYWwgZGF0YVxuICAgICAgICAgICAgICAgICAgd2UmbmJzcDtjb2xsZWN0IGZyb20geW91IHdoZW4geW91IHVzZSBvdXIgd2Vic2l0ZS48L3A+XG4gICAgICAgICAgICAgICAgPGgzPk91ciBDb21wYW55IGNvbGxlY3RzIHRoZSBmb2xsb3dpbmcgZGF0YTo8L2gzPlxuICAgICAgICAgICAgICAgIDxwPlBlcnNvbmFsIGlkZW50aWZpY2F0aW9uIGluZm9ybWF0aW9uIHN1Y2gmbmJzcDthczo8L3A+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgPGxpPm5hbWU8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPmVtYWlsPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5ldGMuPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxoMz5PdXIgQ29tcGFueSBjb2xsZWN0cyB5b3VyIGRhdGEgc28mbmJzcDt0aGF0IHdlJm5ic3A7Y2FuOjwvaDM+XG4gICAgICAgICAgICAgICAgPHA+UHJvY2VzcyB5b3VyIG9yZGVyLjwvcD5cbiAgICAgICAgICAgICAgICA8cD5FbWFpbCB5b3Ugd2l0aCBzcGVjaWFsIG9mZmVycyBvbiZuYnNwO290aGVyIHByb2R1Y3RzIGFuZCBzZXJ2aWNlcyB3ZSZuYnNwO3RoaW5rIHlvdSBtaWdodCBsaWtlLjwvcD5cbiAgICAgICAgICAgICAgICA8cD5JZiZuYnNwO3lvdSBhZ3JlZSwgQ29tcGFueSB3aWxsIHNoYXJlIHlvdXIgZGF0YSB3aXRoIG91ciBwYXJ0bmVyIGNvbXBhbmllcyBzbyZuYnNwO3RoYXQgdGhleSBtYXlcbiAgICAgICAgICAgICAgICAgIG9mZmVyIHlvdSB0aGVpciBwcm9kdWN0cyBhbmQgc2VydmljZXMuPC9wPlxuICAgICAgICAgICAgICAgIDxwPldoZW4gdGhlIENvbXBhbnkgcHJvY2Vzc2VzIHlvdXIgb3JkZXIsIGl0Jm5ic3A7bWF5IHNlbmQgeW91ciBkYXRhJm5ic3A7dG8sIGFuZCBhbHNvIHVzZSB0aGUgcmVzdWx0aW5nXG4gICAgICAgICAgICAgICAgICBpbmZvcm1hdGlvbiBmcm9tLCBjcmVkaXQgcmVmZXJlbmNlIGFnZW5jaWVzIHRvJm5ic3A7cHJldmVudCBmcmF1ZHVsZW50IHB1cmNoYXNlcy48L3A+XG4gICAgICAgICAgICAgICAgPGgzPkhvdyBkbyZuYnNwO3dlJm5ic3A7c3RvcmUgeW91ciBkYXRhPzwvaDM+XG4gICAgICAgICAgICAgICAgPHA+VGhlIGNvbXBhbnkgc2VjdXJlbHkgc3RvcmVzIHlvdXIgZGF0YSBpbiZuYnNwO2FjY29yZGFuY2Ugd2l0aCB0aGUgRGF0YSBQcm9jZXNzaW5nIGxlZ2lzbGF0aW9uLjwvcD5cbiAgICAgICAgICAgICAgICA8cD5UaGUgY29tcGFueSB3aWxsIGtlZXAgeW91ciBkYXRhIGZvciAxJm5ic3A7eWVhci4gT25jZSB0aGlzIHRpbWUgcGVyaW9kIGhhcyBleHBpcmVkLCB3ZSZuYnNwO3dpbGxcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZSB5b3VyIGRhdGEuPC9wPlxuICAgICAgICAgICAgICAgIDxoMz5NYXJrZXRpbmc8L2gzPlxuICAgICAgICAgICAgICAgIDxwPlRoZSBjb21wYW55IHdvdWxkIGxpa2UgdG8mbmJzcDtzZW5kIHlvdSBpbmZvcm1hdGlvbiBhYm91dCBwcm9kdWN0cyBhbmQgc2VydmljZXMgb2YmbmJzcDtvdXJzIHRoYXRcbiAgICAgICAgICAgICAgICAgIHdlJm5ic3A7dGhpbmsgeW91IG1pZ2h0IGxpa2UsIGFzJm5ic3A7d2VsbCBhcyZuYnNwO3Rob3NlIG9mJm5ic3A7b3VyIHBhcnRuZXIgY29tcGFuaWVzLjwvcD5cbiAgICAgICAgICAgICAgICA8cD5JZiZuYnNwO3lvdSBoYXZlIGFncmVlZCB0byZuYnNwO3JlY2VpdmUgbWFya2V0aW5nLCB5b3UgbWF5IGFsd2F5cyBvcHQtb3V0IGF0Jm5ic3A7YSZuYnNwO2xhdGVyXG4gICAgICAgICAgICAgICAgICBkYXRlLjwvcD5cbiAgICAgICAgICAgICAgICA8cD5Zb3UgaGF2ZSB0aGUgcmlnaHQgYXQmbmJzcDthbnkgdGltZSB0byZuYnNwO3N0b3AgQ29tcGFueSBmcm9tIGNvbnRhY3RpbmcgeW91IGZvciBtYXJrZXRpbmcgcHVycG9zZXNcbiAgICAgICAgICAgICAgICAgIG9yJm5ic3A7Z2l2aW5nIHlvdXIgZGF0YSB0byZuYnNwO290aGVyIG1lbWJlcnMgb2YmbmJzcDt0aGUgQ29tcGFueSBHcm91cC48L3A+XG4gICAgICAgICAgICAgICAgPHA+SWYmbmJzcDt5b3Ugbm8mbmJzcDtsb25nZXIgd2lzaCB0byZuYnNwO2JlJm5ic3A7Y29udGFjdGVkIGZvciBtYXJrZXRpbmcgcHVycG9zZXMsIHBsZWFzZSBzZW5kJm5ic3A7dXNcbiAgICAgICAgICAgICAgICAgIGFuJm5ic3A7ZW1haWwuPC9wPlxuICAgICAgICAgICAgICAgIDxoMz5XaGF0IGFyZSB5b3VyIGRhdGEgcHJvdGVjdGlvbiByaWdodHM/PC9oMz5cbiAgICAgICAgICAgICAgICA8cD5PdXIgQ29tcGFueSB3b3VsZCBsaWtlIHRvJm5ic3A7bWFrZSBzdXJlIHlvdSBhcmUgZnVsbHkgYXdhcmUgb2YmbmJzcDthbGwgb2YmbmJzcDt5b3VyIGRhdGEgcHJvdGVjdGlvblxuICAgICAgICAgICAgICAgICAgcmlnaHRzLjwvcD5cbiAgICAgICAgICAgICAgICA8aDM+RXZlcnkgdXNlciBpcyZuYnNwO2VudGl0bGVkIHRvJm5ic3A7dGhlIGZvbGxvd2luZzo8L2gzPlxuICAgICAgICAgICAgICAgIDxwPlRoZSByaWdodCB0byZuYnNwO2FjY2VzcyZuYnNwOyZtZGFzaDsgWW91IGhhdmUgdGhlIHJpZ2h0IHRvJm5ic3A7cmVxdWVzdCB0aGUgQ29tcGFueSBmb3IgY29waWVzXG4gICAgICAgICAgICAgICAgICBvZiZuYnNwO3lvdXIgcGVyc29uYWwgZGF0YS4gV2UmbmJzcDttYXkgY2hhcmdlIHlvdSBhJm5ic3A7c21hbGwgZmVlIGZvciB0aGlzIHNlcnZpY2UuPC9wPlxuICAgICAgICAgICAgICAgIDxwPlRoZSByaWdodCB0byZuYnNwO3JlY3RpZmljYXRpb24mbmJzcDsmbWRhc2g7IFlvdSBoYXZlIHRoZSByaWdodCB0byZuYnNwO3JlcXVlc3QgdGhhdCBPdXIgQ29tcGFueVxuICAgICAgICAgICAgICAgICAgY29ycmVjdCBhbnkgaW5mb3JtYXRpb24geW91IGJlbGlldmUgaXMmbmJzcDtpbmFjY3VyYXRlLiBZb3UgYWxzbyBoYXZlIHRoZSByaWdodCB0byZuYnNwO3JlcXVlc3QgT3VyXG4gICAgICAgICAgICAgICAgICBDb21wYW55IHRvJm5ic3A7Y29tcGxldGUgaW5mb3JtYXRpb24geW91IGJlbGlldmUgaXMmbmJzcDtpbmNvbXBsZXRlLjwvcD5cbiAgICAgICAgICAgICAgICA8cD5UaGUgcmlnaHQgdG8mbmJzcDtlcmFzdXJlJm5ic3A7Jm1kYXNoOyBZb3UgaGF2ZSB0aGUgcmlnaHQgdG8mbmJzcDtyZXF1ZXN0IHRoYXQgQ29tcGFueSBlcmFzZSB5b3VyXG4gICAgICAgICAgICAgICAgICBwZXJzb25hbCBkYXRhLCB1bmRlciBjZXJ0YWluIGNvbmRpdGlvbnMuPC9wPlxuICAgICAgICAgICAgICAgIDxwPlRoZSByaWdodCB0byZuYnNwO3Jlc3RyaWN0IHByb2Nlc3NpbmcmbmJzcDsmbWRhc2g7IFlvdSBoYXZlIHRoZSByaWdodCB0byZuYnNwO3JlcXVlc3QgdGhhdCB0aGVcbiAgICAgICAgICAgICAgICAgIENvbXBhbnkgcmVzdHJpY3QgdGhlIHByb2Nlc3Npbmcgb2YmbmJzcDt5b3VyIHBlcnNvbmFsIGRhdGEsIHVuZGVyIGNlcnRhaW4gY29uZGl0aW9ucy48L3A+XG4gICAgICAgICAgICAgICAgPHA+VGhlIHJpZ2h0IHRvJm5ic3A7b2JqZWN0IHRvJm5ic3A7cHJvY2Vzc2luZyZuYnNwOyZtZGFzaDsgWW91IGhhdmUgdGhlIHJpZ2h0IHRvJm5ic3A7b2JqZWN0XG4gICAgICAgICAgICAgICAgICB0byZuYnNwO091ciBDb21wYW55JnJzcXVvO3MgcHJvY2Vzc2luZyBvZiZuYnNwO3lvdXIgcGVyc29uYWwgZGF0YSwgdW5kZXIgY2VydGFpbiBjb25kaXRpb25zLjwvcD5cbiAgICAgICAgICAgICAgICA8cD5UaGUgcmlnaHQgdG8mbmJzcDtkYXRhIHBvcnRhYmlsaXR5Jm5ic3A7Jm1kYXNoOyBZb3UgaGF2ZSB0aGUgcmlnaHQgdG8mbmJzcDtyZXF1ZXN0IHRoYXQgT3VyIENvbXBhbnlcbiAgICAgICAgICAgICAgICAgIHRyYW5zZmVyIHRoZSBkYXRhIHRoYXQgd2UmbmJzcDtoYXZlIGNvbGxlY3RlZCB0byZuYnNwO2Fub3RoZXIgb3JnYW5pemF0aW9uLCBvciZuYnNwO2RpcmVjdGx5XG4gICAgICAgICAgICAgICAgICB0byZuYnNwO3lvdSwgdW5kZXIgY2VydGFpbiBjb25kaXRpb25zLjwvcD5cbiAgICAgICAgICAgICAgICA8cD5JZiZuYnNwO3lvdSBtYWtlIGEmbmJzcDtyZXF1ZXN0LCB3ZSZuYnNwO2hhdmUgb25lIG1vbnRoIHRvJm5ic3A7cmVzcG9uZCB0byZuYnNwO3lvdS4gSWYmbmJzcDt5b3VcbiAgICAgICAgICAgICAgICAgIHdvdWxkIGxpa2UgdG8mbmJzcDtleGVyY2lzZSBhbnkgb2YmbmJzcDt0aGVzZSByaWdodHMsIHBsZWFzZSBjb250YWN0Jm5ic3A7dXMgYXQmbmJzcDtvdXIgZW1haWwuPC9wPlxuICAgICAgICAgICAgICAgIDxibG9ja3F1b3RlPlxuICAgICAgICAgICAgICAgICAgT3VyIGNvcmUgdmFsdWUgaXMmbmJzcDt0byZuYnNwO2JlJm5ic3A7Z2VudWluZWx5IGhlbHBmdWwgYW5kIGVmZmVjdGl2ZS4gV2UmbmJzcDtpbnZlc3QgaW4mbmJzcDtvdXJcbiAgICAgICAgICAgICAgICAgIFRlYW0mcnNxdW87cyBkZXZlbG9wbWVudCBhbmQgZWR1Y2F0aW9uIGFuZCBjb25zdGFudGx5IHNlYXJjaCBmb3Igd2F5cyB0byZuYnNwO2Z1cnRoZXIgb3B0aW1pc2UgYW5kXG4gICAgICAgICAgICAgICAgICBpbXByb3ZlIHNvJm5ic3A7dGhhdCB3ZSZuYnNwO2NhbiBzdGF5IG9uJm5ic3A7dG9wIG9mJm5ic3A7b3VyIGdhbWUuXG4gICAgICAgICAgICAgICAgICA8YnIvPjxjaXRlPiZtZGFzaDsmbmJzcDtDVE8gQ2FkbyBMYWJzPC9jaXRlPlxuICAgICAgICAgICAgICAgIDwvYmxvY2txdW90ZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIHtmZXRjaGVyLmRhdGEgPyA8VmFjYW5jaWVzTGlzdCBkYXRhPXtmZXRjaGVyLmRhdGF9IC8+IDogbnVsbH1cbiAgICAgIDwvZGl2PlxuKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7TWV0YUZ1bmN0aW9ufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7dXNlRmV0Y2hlcn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgVmFjYW5jaWVzTGlzdCBmcm9tIFwifi9jb21wb25lbnRzL3ZhY2FuY2llc1wiO1xuaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIkNhZG9sYWJzIC0gYWJvdXQgdXNcIixcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gICAgbGV0IGZldGNoZXIgPSB1c2VGZXRjaGVyKCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hlci5sb2FkKCcvYWlydGFibGUvZ2V0VGFibGUnKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFib3V0LXVzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICA8aDE+V2UgYXJlIGFuIElUIGNvbXBhbnkgd2l0aCBhIDxzcGFuIGNsYXNzTmFtZT1cIm1hcmtlZFwiPmhpZ2ggbGV2ZWwgb2YgZXhwZXJpZW5jZTwvc3Bhbj4gaW4gPGI+Y29uc3VsdGluZzwvYj4sIDxiPnNvZnR3YXJlIGVuaGFuY2VtZW50PC9iPiBhbmQgPGI+YnVzaW5lc3MgZ3Jvd3RoIHNvbHV0aW9uczwvYj5cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgQ0FETyBpcyZuYnNwO2FuJm5ic3A7b3V0c291cmNpbmcgY29tcGFueSB3aXRoIGEmbmJzcDtwcm9kdWN0IGNvbXBhbnkgYXBwcm9hY2hcbiAgICAgICAgICAgICAgYW5kIGdvLWdldHRlciBhdHRpdHVkZS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYWRvLWJlbGl2ZXNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cbiAgICAgICAgICAgICAgPGgyPkNBRE8gQkVMSVZFUyBJTjwvaDI+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8ZGl2PnJlbW90ZSB0ZWFtcyBhbmQgPGI+ZmxleGlibGUgc2NoZWR1bGU8L2I+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8ZGl2PmNvbnN0YW50IGFuZCBvbmx5IHVzZWZ1bCA8Yj5sZWFybmluZzwvYj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxkaXY+cGVyc29uYWwgPGI+cmVzcG9uc2liaWxpdHk8L2I+IGFuZCBnb2FsIG9yaWVudGVkIHdvcms8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxkaXY+aG9uZXN0IHR3by13YXkgc3RyZWV0IDxiPmZlZWRiYWNrPC9iPiBiZXR3ZWVuIHRoZSBDb21wYW55IGFuZCB0aGUgVGVhbTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYWRvLWNhblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgPGgyPkNBRE8gQ0FOPC9oMj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBBbmQgeW91IG1pZ2h0IHRoaW5rIHdlJm5ic3A7Y2FuJnJzcXVvO3QgZG8mbmJzcDttdWNoIGFuZCBmYXN0IHNpbmNlIHdlJm5ic3A7YXJlIHF1aXRlIHNtYWxsLCBidXRcbiAgICAgICAgICAgICAgd2UmbmJzcDthcmUgYWJvdXQgdG8mbmJzcDt0ZWxsIHlvdSB3aHkgd2UmbmJzcDtjYW46XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgV2UmbmJzcDtoYXZlIDxiPnNldmVyYWwgbWFqb3IgY2xpZW50czwvYj4gYW5kIHdlJm5ic3A7Y292ZXIgYWxsIHRoZWlyIGRldmVsb3BtZW50IG5lZWRzLiBBbmQgZm9yIHN1cmUsXG4gICAgICAgICAgICAgIHRoaXMgaXMmbmJzcDthJm5ic3A7bWF0Y2ggbWFkZSBpbiZuYnNwO2hlYXZlbi5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBXZSZuYnNwO2NvZGUgPGI+dG8mbmJzcDtib29zdCB0aGUgYnVzaW5lc3M8L2I+LiBUaGVyZSBpcyZuYnNwO25vJm5ic3A7ZGV2ZWxvcG1lbnQgZm9yIHRoZSBzYWtlXG4gICAgICAgICAgICAgIG9mJm5ic3A7ZGV2ZWxvcG1lbnQgaGVyZSFcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBPdXIgcmVjcnVpdGVycyB3b3JrIGhhcmQgPGI+dG8mbmJzcDtoaXJlIHRoZSBiZXN0IGNyb3dkPC9iPiBhbmQgdGhlIHJlc3Qgb2YmbmJzcDt0aGUgdGVhbSBtYWtlcyBzdXJlXG4gICAgICAgICAgICAgIGl0Jm5ic3A7d2FudHMgdG8mbmJzcDtzdGF5IHdpdGgmbmJzcDt1cyFcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBBdCZuYnNwOzxiPkNhZG8gTGFiczwvYj4gd2UmbmJzcDtrbm93IHRoYXQgdGhlIEZ1dHVyZSBpcyZuYnNwO09wZW4gU291cmNlLCB0aGVyZWZvcmUgd2UmbmJzcDthY3RpdmVseSB1c2VcbiAgICAgICAgICAgICAgb3BlbiBzb3VyY2Ugc29sdXRpb25zIGluJm5ic3A7b3VyIHdvcmsuIE5vdCBqdXN0IHRoYXQgd2UmbmJzcDt1c2UgYW5kIHN1cHBvcnQgb3BlbiBzb3VyY2UgcHJvZHVjdHMsXG4gICAgICAgICAgICAgIHdlJm5ic3A7Y29udHJpYnV0ZSBvdXJzZWx2ZXMuIFlvdSBjYW4gaGF2ZSBhJm5ic3A7bG9vayBhdCZuYnNwO3NvbWUgb2YmbmJzcDtvdXIgY29kZSBpbiZuYnNwO291ciBHaXRIdWJcbiAgICAgICAgICAgICAgYWNjb3VudCBhbmQgYWxzbyBjaGVjayBvdXQgb3VyIFRlY2ggUmFkYXJcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYWRvLWRvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICA8aDI+Q0FETyBETzwvaDI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+VHJhZmZpYyBNYW5hZ2VtZW50IFN5c3RlbXM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JcIj50byBib29zdCB5b3VyIGdyb3d0aCE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5DUk0gUGxhdGZvcm1zPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyXCI+dG8gYnJpbmcgc29tZSBvcmRlciB0byB5b3VyIERhdGEhPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+UGF5bWVudCBzeXN0ZW1zPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyXCI+d2Uga25vdyBob3cgdG8gbWFrZSBtb25leSB3b3JrIGZvciB5b3UhPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+QkkgU3lzdGVtczwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjclwiPm91ciBzZWNyZXRzIHRvIGEgZ29vZCBuaWdodCdzIHNsZWVwPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+QW50aS1GcmF1ZCBTb2x1dGlvbnM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JcIj5vdXIgc2VjcmV0cyB0byB0aGUgQkVTVCBuaWdodCdzIHNsZWVwPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+TWFjaGluZSBMZWFybmluZyBQcm9kdWN0czwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjclwiPmZvciB0aGUgbG92ZSBvZiBSb2JvdHMhPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIHtmZXRjaGVyLmRhdGEgPyA8VmFjYW5jaWVzTGlzdCBkYXRhPXtmZXRjaGVyLmRhdGF9IC8+IDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICApO1xufVxuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9hbHRqL3Byb2plY3RzL2NhZG9sYWJzLmlvL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9hbHRqL3Byb2plY3RzL2NhZG9sYWJzLmlvL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvYWx0ai9wcm9qZWN0cy9jYWRvbGFicy5pby9hcHAvcm91dGVzL2FpcnRhYmxlLmdldFRhYmxlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvYWx0ai9wcm9qZWN0cy9jYWRvbGFicy5pby9hcHAvcm91dGVzL2NhcmVlcnMvJGNhcmVlcklkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvYWx0ai9wcm9qZWN0cy9jYWRvbGFicy5pby9hcHAvcm91dGVzL2NhcmVlcnMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9hbHRqL3Byb2plY3RzL2NhZG9sYWJzLmlvL2FwcC9yb3V0ZXMvY29va2llLXBvbGljeS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2FsdGovcHJvamVjdHMvY2Fkb2xhYnMuaW8vYXBwL3JvdXRlcy90ZWNoLXJhZGFyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvVXNlcnMvYWx0ai9wcm9qZWN0cy9jYWRvbGFicy5pby9hcHAvcm91dGVzL2NvbnRhY3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9hbHRqL3Byb2plY3RzL2NhZG9sYWJzLmlvL2FwcC9yb3V0ZXMvcHJpdmFjeS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL1VzZXJzL2FsdGovcHJvamVjdHMvY2Fkb2xhYnMuaW8vYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL2FpcnRhYmxlLmdldFRhYmxlXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYWlydGFibGUuZ2V0VGFibGVcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJhaXJ0YWJsZS9nZXRUYWJsZVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2NhcmVlcnMvJGNhcmVlcklkXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvY2FyZWVycy8kY2FyZWVySWRcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJjYXJlZXJzLzpjYXJlZXJJZFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL2NhcmVlcnMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9jYXJlZXJzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiY2FyZWVyc1wiLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlM1xuICB9LFxuICBcInJvdXRlcy9jb29raWUtcG9saWN5XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvY29va2llLXBvbGljeVwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImNvb2tpZS1wb2xpY3lcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNFxuICB9LFxuICBcInJvdXRlcy90ZWNoLXJhZGFyXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvdGVjaC1yYWRhclwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInRlY2gtcmFkYXJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNVxuICB9LFxuICBcInJvdXRlcy9jb250YWN0XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvY29udGFjdFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImNvbnRhY3RcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNlxuICB9LFxuICBcInJvdXRlcy9wcml2YWN5XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcHJpdmFjeVwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInByaXZhY3lcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlN1xuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZThcbiAg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
