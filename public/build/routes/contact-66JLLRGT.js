import {
  VacanciesList
} from "/build/_shared/chunk-Y4TCAJIQ.js";
import {
  Form,
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-GJXD2B2M.js";

// browser-route-module:/Users/altj/projects/cadolabs.io/app/routes/contact.tsx?browser
init_react();

// app/routes/contact.tsx
init_react();
var meta = () => {
  return {
    title: "Cadolabs - contact"
  };
};
function Contact() {
  const vacanciesList = JSON.parse(useLoaderData()).records;
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
  }, /* @__PURE__ */ React.createElement("h2", null, "Let\u2019s talk"), /* @__PURE__ */ React.createElement("p", null, "For1 any inquiries please contact us at ", /* @__PURE__ */ React.createElement("a", {
    href: "mailto:info@cadolabs.io"
  }, "info@cadolabs.io")), /* @__PURE__ */ React.createElement(Form, {
    reloadDocument: true,
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
  }, "Send"))))))), vacanciesList ? /* @__PURE__ */ React.createElement(VacanciesList, {
    data: vacanciesList
  }) : "");
}
export {
  Contact as default,
  meta
};
//# sourceMappingURL=/build/routes/contact-66JLLRGT.js.map
