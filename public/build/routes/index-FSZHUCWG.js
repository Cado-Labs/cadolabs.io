import {
  VacanciesList
} from "/build/_shared/chunk-Y4TCAJIQ.js";
import {
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-GJXD2B2M.js";

// browser-route-module:/Users/altj/projects/cadolabs.io/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var meta = () => {
  return {
    title: "Cadolabs - about us"
  };
};
function Index() {
  const vacanciesList = JSON.parse(useLoaderData()).records;
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
  }, "for the love of Robots!")))))), vacanciesList ? /* @__PURE__ */ React.createElement(VacanciesList, {
    data: vacanciesList
  }) : "");
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/index-FSZHUCWG.js.map
