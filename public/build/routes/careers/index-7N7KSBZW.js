import {
  VacanciesList
} from "/build/_shared/chunk-UOG2XU5U.js";
import {
  useFetcher
} from "/build/_shared/chunk-U3MF2FUU.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/altj/projects/cadolabs.io/app/routes/careers/index.tsx?browser
init_react();

// app/routes/careers/index.tsx
init_react();
var import_react = __toModule(require_react());
var meta = () => {
  return {
    title: "Cadolabs - careers"
  };
};
function CareerIndex() {
  let fetcher = useFetcher();
  (0, import_react.useEffect)(() => {
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
export {
  CareerIndex as default,
  meta
};
//# sourceMappingURL=/build/routes/careers/index-7N7KSBZW.js.map
