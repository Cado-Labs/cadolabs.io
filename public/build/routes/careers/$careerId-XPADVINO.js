import {
  VacanciesList
} from "/build/_shared/chunk-UOG2XU5U.js";
import {
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-U3MF2FUU.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/altj/projects/cadolabs.io/app/routes/careers/$careerId.tsx?browser
init_react();

// app/routes/careers/$careerId.tsx
init_react();
var import_react = __toModule(require_react());
var meta = ({ data }) => {
  if (!data) {
    return { title: "Oops..." };
  }
  const findCurrentVacancy = data.list.records.filter((arr) => arr.slug === data.currentSlug);
  const currentVacancy = findCurrentVacancy[0].fields;
  return {
    title: currentVacancy.page_title ? `${currentVacancy.page_title}` : "Vacancy"
  };
};
function DynamicCareer() {
  const careerDataRaw = useLoaderData().list.records.filter((arr) => arr.slug === useLoaderData().currentSlug);
  const careerData = careerDataRaw[0].fields;
  let fetcher = useFetcher();
  (0, import_react.useEffect)(() => {
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
export {
  DynamicCareer as default,
  meta
};
//# sourceMappingURL=/build/routes/careers/$careerId-XPADVINO.js.map