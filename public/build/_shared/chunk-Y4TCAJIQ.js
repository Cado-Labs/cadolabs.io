import {
  Link,
  React,
  init_react
} from "/build/_shared/chunk-GJXD2B2M.js";

// app/components/vacancies.tsx
init_react();
function VacanciesList(data) {
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
  }, "View all vacancies"))), /* @__PURE__ */ React.createElement("ul", null, data.data.map((vacancy, index) => /* @__PURE__ */ React.createElement("li", {
    key: index
  }, /* @__PURE__ */ React.createElement("div", {
    className: "inner"
  }, /* @__PURE__ */ React.createElement(Link, {
    title: vacancy.fields.url,
    key: vacancy.id,
    to: `/careers/${vacancy.id}`,
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

export {
  VacanciesList
};
//# sourceMappingURL=/build/_shared/chunk-Y4TCAJIQ.js.map
